import { Color } from './color'

interface SPSAPayload {
	called?: number
	loss: number
	values: [number, number, number, number, number, number]
}

class Solver {
	private target: Color
	private targetHSL: { h: number; s: number; l: number }
	private reusedColor: Color
	private options: {
		acceptanceLossPercentage: number
		maxChecks: number
	}

	constructor(target: Color) {
		this.target = target
		this.targetHSL = target.hsl()

		this.options = Object.assign(
			{},
			{
				acceptanceLossPercentage: 5,
				maxChecks: 15,
			}
		)
		this.reusedColor = new Color(0, 0, 0)
	}

	solve(): SPSAPayload & {
		filter: string
	} {
		const result = this.solveNarrow(this.solveWide())
		return {
			values: result.values,
			called: result.called,
			loss: result.loss,
			filter: this.css(result.values),
		}
	}

	private solveWide(): SPSAPayload {
		const A = 5
		const c = 15
		const a = [60, 180, 18000, 600, 1.2, 1.2]

		let best = { loss: Infinity }
		let counter = 0
		while (best.loss > this.options.acceptanceLossPercentage) {
			const initialFilterValues: SPSAPayload['values'] = [
				50, 20, 3750, 50, 100, 100,
			]
			const result: SPSAPayload = this.spsa({
				A,
				a,
				c,
				values: initialFilterValues,
				maxTriesInLoop: 1000,
			})

			if (result.loss < best.loss) {
				best = result
			}

			counter += 1
			if (counter >= this.options.maxChecks) {
				break
			}
		}

		return Object.assign({}, best, { called: counter }) as SPSAPayload
	}

	private solveNarrow(wide: SPSAPayload): SPSAPayload {
		const A = wide.loss
		const c = 2
		const A1 = A + 1
		const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1]
		return this.spsa({
			A,
			a,
			c,
			values: wide.values,
			maxTriesInLoop: 500,
			called: wide.called,
		})
	}

	private fixValueByFilterIDX(value: number, idx: number): number {
		let max = 100
		if (idx === 2) {
			max = 7500
		} else if (idx === 4 || idx === 5) {
			max = 200
		}

		if (idx === 3 /* hue-rotate */) {
			if (value > max) {
				value %= max
			} else if (value < 0) {
				value = max + (value % max)
			}
		} else if (value < 0) {
			value = 0
		} else if (value > max) {
			value = max
		}
		return value
	}

	private spsa({
		A,
		a,
		c,
		values,
		maxTriesInLoop = 500,
		called = 0,
	}: {
		A: number
		a: number[]
		c: number
		values: SPSAPayload['values']
		maxTriesInLoop: number
		called?: number
	}): SPSAPayload {
		const alpha = 1
		const gamma = 0.16666666666666666

		let best = null
		let bestLoss = Infinity

		const deltas = new Array(6) as SPSAPayload['values']
		const highArgs = new Array(6) as SPSAPayload['values']
		const lowArgs = new Array(6) as SPSAPayload['values']

		const filtersToBeAppliedSize = 6

		for (let key = 0; key < maxTriesInLoop; key++) {
			const ck = c / Math.pow(key + 1, gamma)
			for (let i = 0; i < filtersToBeAppliedSize; i++) {
				deltas[i] = Math.random() > 0.5 ? 1 : -1
				highArgs[i] = values[i] + ck * deltas[i]
				lowArgs[i] = values[i] - ck * deltas[i]
			}

			const lossDiff = this.loss(highArgs) - this.loss(lowArgs)
			for (let i = 0; i < filtersToBeAppliedSize; i++) {
				const g = (lossDiff / (2 * ck)) * deltas[i]
				const ak = a[i] / Math.pow(A + key + 1, alpha)
				values[i] = this.fixValueByFilterIDX(values[i] - ak * g, i)
			}

			const loss = this.loss(values)
			if (loss < bestLoss) {
				best = values.slice(0)
				bestLoss = loss
			}
		}

		return { values: best, loss: bestLoss, called } as SPSAPayload
	}

	private loss(filters: SPSAPayload['values']): number {
		const color = this.reusedColor
		color.set(0, 0, 0)

		color.invert(filters[0] / 100)
		color.sepia(filters[1] / 100)
		color.saturate(filters[2] / 100)
		color.hueRotate(filters[3] * 3.6)
		color.brightness(filters[4] / 100)
		color.contrast(filters[5] / 100)

		const colorHSL = color.hsl()

		return (
			Math.abs(color.r - this.target.r) +
			Math.abs(color.g - this.target.g) +
			Math.abs(color.b - this.target.b) +
			Math.abs(colorHSL.h - this.targetHSL.h) +
			Math.abs(colorHSL.s - this.targetHSL.s) +
			Math.abs(colorHSL.l - this.targetHSL.l)
		)
	}

	private css(filters: number[]): string {
		const formatCssFilterValueByMultiplier = (
			idx: number,
			multiplier = 1
		): number => Math.round(filters[idx] * multiplier)

		return [
			`invert(${formatCssFilterValueByMultiplier(0)}%)`,
			`sepia(${formatCssFilterValueByMultiplier(1)}%)`,
			`saturate(${formatCssFilterValueByMultiplier(2)}%)`,
			`hue-rotate(${formatCssFilterValueByMultiplier(3, 3.6)}deg)`,
			`brightness(${formatCssFilterValueByMultiplier(4)}%)`,
			`contrast(${formatCssFilterValueByMultiplier(5)}%);`,
		].join(' ')
	}
}

export { Solver }
