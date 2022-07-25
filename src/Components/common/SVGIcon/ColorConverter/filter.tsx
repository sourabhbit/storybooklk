import { Color } from './color'
import { Solver } from './Solver'

const hexToRgb = (hex: string) => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b
	})

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? [
				parseInt(result[1], 16),
				parseInt(result[2], 16),
				parseInt(result[3], 16),
		  ]
		: null
}

export const final = (hexColor: string) => {
	const rgb = hexToRgb(hexColor)
	if (rgb?.length !== 3) {
		return null
	}

	const color = new Color(rgb[0], rgb[1], rgb[2])
	const solver = new Solver(color)
	const result = solver.solve()
	console.log(result)
	return result.filter
}
