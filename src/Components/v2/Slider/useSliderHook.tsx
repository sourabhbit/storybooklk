import { action } from '@storybook/addon-actions'
import { useCallback, useState } from 'react'
// import { SliderTypes } from './Slider.types'

interface sliderTypes {
	startValue: string
	endValue: string
	maxRangeValue: number
	minDiff: number
}
export const useSliderHook = ({
	startValue,
	endValue,
	maxRangeValue,
	minDiff,
}: sliderTypes) => {
	const [minValue, setMinValue] = useState<string>(startValue)
	const [maxValue, setMaxValue] = useState<string>(endValue)
	const [percentOne, setPercentOne] = useState<number>(
		(parseInt(minValue) / maxRangeValue) * 100
	)
	const [percentTwo, setPercentTwo] = useState<number>(
		(parseInt(maxValue) / maxRangeValue) * 100
	)
	const fillColor = useCallback(() => {
		setPercentOne((parseInt(minValue) / maxRangeValue) * 100)
		setPercentTwo((parseInt(maxValue) / maxRangeValue) * 100)
	}, [minValue, maxValue, maxRangeValue])
	const slideOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (parseInt(maxValue) - parseInt(value) <= minDiff) {
			setMinValue((parseInt(maxValue) - minDiff).toString())
		} else {
			setMinValue(value)
			action('start value changed')(e, value)
		}
	}
	const slideTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (parseInt(value) - parseInt(minValue) <= minDiff) {
			setMaxValue((parseInt(minValue) + minDiff).toString())
		} else {
			setMaxValue(value)
			action('end value changed')(e, value)
		}
	}

	return {
		minValue,
		maxValue,
		percentOne,
		percentTwo,
		fillColor,
		slideOne,
		slideTwo,
	}
}
