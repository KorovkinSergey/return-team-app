import React, { useEffect, useState } from 'react'
import { AppBar, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useAuthContext } from '../../context/AuthContext'
import { Bet, useBet } from '../../hooks/api/useBet'
import { BetField } from '../BetField'
import { Loading } from '../Loading'

const Header = () => {
	const { logout } = useAuthContext()
	const { getBet, loading } = useBet()

	const [bet, setBet] = useState<Bet | null>(null)

	const updateBet = () => getBet().then(setBet)

	useEffect(() => {
		getBet().then(setBet)
	}, [getBet])

	return (
		<AppBar
			sx={{
				padding: '15px 0 35px',
				backgroundColor: 'success.main',
				position: 'relative',
				minHeight: '190px',
			}}
			color='secondary'
		>
			<Button
				onClick={logout}
				variant='contained'
				color='primary'
				sx={{
					position: 'absolute',
					backgroundColor: 'primary.dark',
					top: 10,
					right: 10,
				}}
			>
				Выход
			</Button>
			{bet === null && (
				<>
					<Typography variant='h4' component='h2' align='center' sx={{ margin: 'auto' }}>
						Ставка закрыта
					</Typography>
				</>
			)}

			{bet && (
				<>
					<Typography variant='h4' component='h2' align='center'>
						Победа в серии BO3
					</Typography>

					<Box sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
						flexWrap: 'wrap',
						gap: '20px',
						marginTop: '20px',
					}}>
						{ loading ? <Loading /> : <>
							<BetField onAdd={updateBet} ratio={bet.firstTeamRatio} name={bet.firstTeam} />
							<BetField onAdd={updateBet} ratio={bet.secondTeamRatio} name={bet.secondTeam} />
						</> }
					</Box>
				</>
			)}
		</AppBar>
	)
}

export default React.memo(Header)
