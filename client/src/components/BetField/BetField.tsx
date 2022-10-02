import React, { ChangeEvent, useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material'
import { useAuthContext } from '../../context/AuthContext'
import { useAddBet } from '../../hooks/api/useAddBet'
import { Loading } from '../Loading'
import styles from './BetField.module.css'

interface IProps {
	onAdd: () => void
	name: string
	ratio: number
}

const BetField = ({ onAdd, name, ratio }: IProps) => {
	const [userBet, setUserBet] = useState<number | ''>('')
	const [isNotEnough, setIsNotEnough] = useState<boolean>(false)
	const [isInvalidData, setIsInvalidData] = useState<boolean>(false)
	const { data } = useAuthContext()
	const { addBet, loading, error } = useAddBet()

	const { user } = data || {}
	const { id, coins = 0 } = user || {}

	const changeUserBet = useCallback(
		(e: ChangeEvent<HTMLInputElement>): void => {
			setIsInvalidData(false)
			setIsNotEnough(false)

			if ((+e.target.value < 0 && e.target.value !== null) || e.target.value === '') {
				setIsInvalidData(true)
				setUserBet('')
				return
			}

			if (+e.target.value === 0  ) setIsInvalidData(true)

			if (+e.target.value > coins) setIsNotEnough(true)
			setUserBet(+e.target.value)
		},
		[setUserBet, setIsInvalidData, setIsNotEnough, coins]
	)

	const onClick = useCallback((): void => {
		if (!userBet) return
		const bet = {
			userId: id || '',
			team: name,
			coins: userBet.toString(),
		}
		addBet(bet).then(() => onAdd())
		setUserBet(0)
	}, [userBet, setUserBet, addBet, name, id, onAdd])

	if (error) console.error(error)

	return (
		<Box className={styles.wrapper}>
			<Box
				sx={{
					border: '1px solid',
					borderColor: 'secondary.contrastText',
					padding: '10px',
					width: '100%',
					borderRadius: '10px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography variant='h6' sx={{ display: 'inline-block' }}>
					{name}
				</Typography>
				{ loading ? <Loading/> : <Box sx={{ display: 'flex', alignItems: 'center' }}>
					<TextField
						required
						type='number'
						label={
						isNotEnough && 'Недостаточно поинтов'
							|| isInvalidData && 'Недопустимое значение'
							|| 'Размер ставки'
					}
						variant='outlined'
						value={userBet}
						onChange={changeUserBet}
						className={styles.input}
						error={isInvalidData}
					/>
					<Button
						onClick={onClick}
						variant='outlined'
						size='large'
						color='secondary'
						sx={{ backgroundColor: 'primary.dark', marginLeft: '15px' }}
						disabled={isInvalidData || isNotEnough}
					>
						Поставить
					</Button>
				</Box>}
			</Box>
			<Typography variant='h5' sx={{ marginLeft: '10px' }}>
				x{ratio}
			</Typography>
		</Box>
	)
}

export default BetField
