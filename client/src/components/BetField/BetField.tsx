import React from 'react'
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material'

interface IProps {
	name: string
}

const BetField = ({name}: IProps) => {
	return (
		<Box sx={{
			border: '1px solid',
			borderColor: 'secondary.contrastText',
			flexBasis: '45%',
			padding: '10px',
			borderRadius: '10px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		}}>
			<Typography variant='h6' sx={{display: 'inline-block'}}>{name}</Typography>
			<TextField id='outlined-basic' label='Размер ставки' variant='outlined' />
			<Button
				onClick={() => console.log('work')}
				variant='contained'
				color='primary'
				sx={{
					backgroundColor: 'primary.dark',
				}}
			>
				Поставить
			</Button>
		</Box>
	)
}

export default BetField
