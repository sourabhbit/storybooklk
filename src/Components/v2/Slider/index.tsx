import { SimplePrice } from 'Components/v2/Price/Price.stories'
import React, { useEffect, useState } from 'react'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import { SliderTypes } from './Slider.types'
import { Container, SliderTrack, SliderInput, PriceWrapper } from './styles'
import { useSliderHook } from './useSliderHook'

const Slider = ({
	id,
	startValue = '500',
	endValue = '3000',
	minDiff = 1000,
	maxRangeValue = 10000,
	step = 500,
}: SliderTypes) => {
	const [selectedOne, setSelectedOne] = useState(true)
	const [selectedTwo, setSelectedTwo] = useState(false)
	const {
		minValue,
		maxValue,
		percentOne,
		percentTwo,
		fillColor,
		slideOne,
		slideTwo,
	} = useSliderHook({ startValue, endValue, maxRangeValue, minDiff })
	useEffect(() => {
		fillColor()
	}, [fillColor, startValue, endValue])

	return (
		<Container id={id} data-testid="slider-test">
			<SliderTrack
				percentOne={percentOne}
				percentTwo={percentTwo}
			></SliderTrack>
			<label htmlFor="slider-input">
				<SliderInput
					min="0"
					max={maxRangeValue}
					value={minValue}
					step={step}
					onChange={(e) => slideOne(e)}
					onMouseDown={() => {
						setSelectedOne(true)
						setSelectedTwo(false)
					}}
				/>
			</label>
			<PriceWrapper left={percentOne} selected={selectedOne}>
				<SimplePrice
					id={id}
					amount={minValue.toString()}
					special={false}
					font={TypographyENUM.serif}
					componentSize={ComponentSizeENUM.small}
				/>
			</PriceWrapper>
			<label htmlFor="slider-input">
				<SliderInput
					min="0"
					max={maxRangeValue}
					value={maxValue}
					step={step}
					onChange={(e) => slideTwo(e)}
					onMouseDown={() => {
						setSelectedOne(false)
						setSelectedTwo(true)
					}}
				/>
			</label>
			<PriceWrapper left={percentTwo} selected={selectedTwo}>
				<SimplePrice
					id={id}
					amount={maxValue.toString()}
					special={false}
					font={TypographyENUM.serif}
					componentSize={ComponentSizeENUM.small}
				/>
			</PriceWrapper>
		</Container>
	)
}

export default Slider
