import { useState } from 'react'
import { AccodionGroupTypes, FilterTypes, OptionTypes } from './Accodion.types'
import Accordion from './AccordianItem'
import { FlexCol, Flex, CheckBoxLabel, Label } from './styles'

const Accordions = ({ id, filters }: AccodionGroupTypes) => {
	const [expandIndex, setExpandIndex] = useState(0)
	const handleExpand = (index: number) => {
		console.log(index, expandIndex)
		if (index === expandIndex) {
			setExpandIndex(0)
		} else setExpandIndex(index)
	}

	return (
		<>
			{filters.map((item: FilterTypes, index: number) => {
				return (
					<Accordion
						title={item.name}
						expand={expandIndex === index + 1}
						handleExpand={() => handleExpand(index + 1)}
						key={index + 1}
						id={id}
					>
						<FlexCol>
							{item.options.map((item: OptionTypes, index: number) => {
								return (
									<Flex key={index}>
										<Label>
											<input
												type="checkbox"
												name={item.title}
												id=""
											/>
											<CheckBoxLabel>
												{item.title +
													'(' +
													item.no_of_products +
													')'}
											</CheckBoxLabel>
										</Label>
									</Flex>
								)
							})}
						</FlexCol>
					</Accordion>
				)
			})}
		</>
	)
}

export default Accordions
