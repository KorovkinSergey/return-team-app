import React from 'react'
import Box from '@mui/material/Box'
import { User } from '../../components/User'
import { TournamentGrid } from '../../components/TournamentGrid'

const HomePage = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				height: '100%',
			}}
		>
			<User />
			<TournamentGrid/>
		</Box>
	)
}

export default HomePage
