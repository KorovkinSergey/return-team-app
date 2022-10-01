import React from 'react'
import Box from '@mui/material/Box'
import {Button} from '@mui/material'
import {useAuthContext} from '../../context/AuthContext'
import User from "../../components/User/User";

const HomePage = () => {
	const { logout } = useAuthContext()
	return (
		<Box sx={{
			display: 'flex',
			width: '100%',
			height: '100%',
		}}>
			<Button
				onClick={logout}
				variant='contained'
				color='primary'
				sx={{
					position: 'absolute',
					backgroundColor: 'secondary.main',
					top: 10,
					right: 10,
				}}>Выход</Button>
			<User />
			<Box>
				test
			</Box>
		</Box>

	)
}

export default HomePage
