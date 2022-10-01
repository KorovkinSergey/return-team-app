import React from 'react'
import { AppBar, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useAuthContext } from '../../context/AuthContext'
import BetField from '../BetField/BetField'

const Header = () => {
	const { logout } = useAuthContext()

	return (
		<AppBar sx={{
			padding: '15px 0 35px',
			backgroundColor: 'success.main',
			position: 'relative',
		}}
						color='secondary'
		>
			<Button
				onClick={ logout }
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
			<Typography variant='h4' component='h2' align='center'>Победа в серии BO3</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '20px' }}>
				<BetField ratio={1.1} name='Name 1' />
				<BetField ratio={2} name='Name 2' />
			</Box>
		</AppBar>
	)
}

export default Header
