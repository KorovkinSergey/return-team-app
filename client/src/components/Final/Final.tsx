import React from 'react'
import Box from '@mui/material/Box'
import { UserTile } from '../UserTile'

interface IProps {
	players: any[]
}

const Final = ({ players }: IProps) => {
	console.log('players', players)
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				rowGap: '15px',
				justifyContent: 'space-around',
			}}
		>
			{players.map((player, id) => (
				<UserTile key={id} name={player.win} />
			))}
		</Box>
	)
}

export default Final
