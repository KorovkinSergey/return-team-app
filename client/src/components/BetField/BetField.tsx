import React, { ChangeEvent, useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material'

interface IProps {
	name: string
	ratio: number
}

const BetField = ({ name, ratio }: IProps) => {
	const [userRatio, setUserRatio] = useState(0);

	const changeUserRatio = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
		if (+e.target.value <= 0) {
			return
		}
			setUserRatio(+e.target.value)
		}, [setUserRatio])

	const onClick = useCallback((): void => {
		console.log(`send userRatio ${userRatio}`)
		setUserRatio(0)
	}, [userRatio, setUserRatio])

	return (
		<Box sx={{position: 'relative', flexBasis: '45%', display: 'flex', alignItems: 'center' }}>
			<Box sx={{
				border: '1px solid',
				borderColor: 'secondary.contrastText',
				padding: '10px',
				width: '100%',
				borderRadius: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
				<Typography variant='h6' sx={{ display: 'inline-block' }}>{name}</Typography>
				<Box sx={{	display: 'flex', alignItems: 'center'}}>
					<TextField required type='number' label='Размер ставки'
										 variant='outlined' value={userRatio}
										 onChange={changeUserRatio}/>
					<Button onClick={onClick}
									variant='outlined'
									size='large'
									color='secondary'
									sx={{ backgroundColor: 'primary.dark', marginLeft: '15px'}}
					>
						Поставить
					</Button>
				</Box>
			</Box>
			<Typography variant='h5' sx={{marginLeft: '10px'}}>x{ratio}</Typography>
		</Box>
	)
}

export default BetField
