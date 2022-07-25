import { NavBarWrapper } from './styles'
import { NavBarTypes } from './NavBar.types'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'
import NavButton from '../NavButton'
import React from 'react'

const NavBar = ({ options }: NavBarTypes) => {
	const [selectedNav, setSelectedNav] = React.useState(0)

	const changeNav = (index: number) => {
		setSelectedNav(index)
	}
	return (
		<NavBarWrapper data-testid="navbar-wrapper">
			{options?.map((nav, index) => (
				<NavButton
					selectedNav={selectedNav}
					onClick={() => changeNav(index)}
					index={index}
					text={nav}
					key={index}
					id="id"
					componentSize={ComponentSizeENUM.small}
					font={TypographyENUM.serif}
				></NavButton>
			))}
		</NavBarWrapper>
	)
}

export default NavBar
