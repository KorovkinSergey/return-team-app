import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

interface IProps {
	name: string
}

const UserTile = ({ name }: IProps) => {
	return (
		<Box sx={{
			padding: '15px 20px',
			width: '205px',
			minHeight: '54px',
			textAlign: 'center',
			backgroundColor: 'success.main',
			border: '1px solid',
			borderColor: 'primary.main'
		}}
		>
			<Typography color='primary' >
				{name ? name : 'Player ?'}
			</Typography>
		</Box>
	)
}

export default UserTile
