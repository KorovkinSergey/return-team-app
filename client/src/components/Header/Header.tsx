import React, { FC } from 'react'
import { Box } from '@mui/material'

const Header: FC = () => {
	return (
		<Box
			sx={{
				'display': 'flex',
				'flexDirection': 'column',
				'alignItems': 'start',
				'marginTop': 2,
				'width': '100%',
				'& > span': {
					display: 'flex',
					alignItems: 'center',
				},
			}}
		>
			header
		</Box>
	)
}

export default Header
