interface HSLData {
	h: number
	s: number
	l: number
}

class Color {
	r = 0
	g = 0
	b = 0

	constructor(r: number, g: number, b: number) {
		this.set(r, g, b)
	}

	set(r: number, g: number, b: number): void {
		this.r = this.clamp(r)
		this.g = this.clamp(g)
		this.b = this.clamp(b)
	}

	hueRotate(angle = 0): void {
		angle = (angle / 180) * Math.PI
		const sin = Math.sin(angle)
		const cos = Math.cos(angle)

		this.multiply([
			0.213 + cos * 0.787 - sin * 0.213,
			0.715 - cos * 0.715 - sin * 0.715,
			0.072 - cos * 0.072 + sin * 0.928,
			0.213 - cos * 0.213 + sin * 0.143,
			0.715 + cos * 0.285 + sin * 0.14,
			0.072 - cos * 0.072 - sin * 0.283,
			0.213 - cos * 0.213 - sin * 0.787,
			0.715 - cos * 0.715 + sin * 0.715,
			0.072 + cos * 0.928 + sin * 0.072,
		])
	}

	grayscale(value = 1): void {
		this.multiply([
			0.2126 + 0.7874 * (1 - value),
			0.7152 - 0.7152 * (1 - value),
			0.0722 - 0.0722 * (1 - value),
			0.2126 - 0.2126 * (1 - value),
			0.7152 + 0.2848 * (1 - value),
			0.0722 - 0.0722 * (1 - value),
			0.2126 - 0.2126 * (1 - value),
			0.7152 - 0.7152 * (1 - value),
			0.0722 + 0.9278 * (1 - value),
		])
	}

	sepia(value = 1): void {
		this.multiply([
			0.393 + 0.607 * (1 - value),
			0.769 - 0.769 * (1 - value),
			0.189 - 0.189 * (1 - value),
			0.349 - 0.349 * (1 - value),
			0.686 + 0.314 * (1 - value),
			0.168 - 0.168 * (1 - value),
			0.272 - 0.272 * (1 - value),
			0.534 - 0.534 * (1 - value),
			0.131 + 0.869 * (1 - value),
		])
	}

	saturate(value = 1): void {
		this.multiply([
			0.213 + 0.787 * value,
			0.715 - 0.715 * value,
			0.072 - 0.072 * value,
			0.213 - 0.213 * value,
			0.715 + 0.285 * value,
			0.072 - 0.072 * value,
			0.213 - 0.213 * value,
			0.715 - 0.715 * value,
			0.072 + 0.928 * value,
		])
	}

	multiply(matrix: number[]): void {
		const newR = this.clamp(
			this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]
		)
		const newG = this.clamp(
			this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]
		)
		const newB = this.clamp(
			this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]
		)
		this.r = newR
		this.g = newG
		this.b = newB
	}

	brightness(value = 1): void {
		this.linear(value)
	}

	contrast(value = 1): void {
		this.linear(value, -(0.5 * value) + 0.5)
	}

	private linear(slope = 1, intercept = 0) {
		this.r = this.clamp(this.r * slope + intercept * 255)
		this.g = this.clamp(this.g * slope + intercept * 255)
		this.b = this.clamp(this.b * slope + intercept * 255)
	}

	invert(value = 1): void {
		this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255)
		this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255)
		this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255)
	}

	hsl(): HSLData {
		const red = this.r / 255
		const green = this.g / 255
		const blue = this.b / 255
		const max = Math.max(red, green, blue)
		const min = Math.min(red, green, blue)

		let hue = 0
		let saturation = 0
		const lightness = (max + min) / 2

		if (max === min) {
			return {
				h: 0,
				s: 0,
				l: lightness * 100,
			}
		}

		const delta = max - min

		saturation =
			lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)

		if (max === red) {
			hue = (green - blue) / delta + (green < blue ? 6 : 0)
		} else if (max === green) {
			hue = (blue - red) / delta + 2
		} else if (max === blue) {
			hue = (red - green) / delta + 4
		}

		hue /= 6

		return {
			h: hue * 100,
			s: saturation * 100,
			l: lightness * 100,
		}
	}

	clamp(value: number): number {
		return Math.min(Math.max(value, 0), 255)
	}
}

export { Color }
