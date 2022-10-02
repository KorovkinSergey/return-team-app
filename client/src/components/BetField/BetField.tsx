import React, { ChangeEvent, useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import { Button, TextField, Typography } from '@mui/material'
import { useAuthContext } from '../../context/AuthContext'
import { useAddBet } from '../../hooks/api/useAddBet'
import { Loading } from '../Loading'
import styles from './BetField.module.css'

interface IProps {
	name: string
	ratio: number
}

const BetField = ({ name, ratio }: IProps) => {
	const [userBet, setUserBet] = useState<number | ''>('');
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const { data } = useAuthContext()
	const { addBet, loading, error } = useAddBet()

	const { user } = data || {}
	const { id, coins = 0 } = user || {}

	const changeUserBet = useCallback(
		(e: ChangeEvent<HTMLInputElement>): void => {
			setIsDisabled(false)

			if (+e.target.value < 0 && e.target.value !== null || e.target.value === '') {
				setUserBet('')
				return
			}
			if (+e.target.value > coins) setIsDisabled(true)
			setUserBet(+e.target.value)
		},
		[setUserBet, setIsDisabled, coins]
	)

	const onClick = useCallback((): void => {
		const bet = {
			userId: id || '',
			team: name,
			coins: userBet.toString()
		}
		addBet(bet)
		setUserBet(0)
	}, [userBet, setUserBet, addBet, name, id])

	if (loading) return <Loading />

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
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<TextField
						required
						type='number'
						label={isDisabled ? 'Недостаточно поинтов' : 'Размер ставки'}
						variant='outlined'
						value={userBet}
						onChange={changeUserBet}
						className={styles.input}
						error={isDisabled}
					/>
					<Button
						onClick={onClick}
						variant='outlined'
						size='large'
						color='secondary'
						sx={{ backgroundColor: 'primary.dark', marginLeft: '15px' }}
						disabled={isDisabled}
					>
						Поставить
					</Button>
				</Box>
			</Box>
			<Typography variant='h5' sx={{ marginLeft: '10px' }}>
				x{ratio}
			</Typography>
		</Box>
	)
}

export default React.memo(BetField)
