import React from 'react'
import Box from '@mui/material/Box'
import TournamentLines from '../TournamentLines/TournamentLines'
import { UserTile } from '../UserTile'

interface IProps {
	height: string
	customClassName?: string
	couple?: any[]
}

const PlayersCouple = ({ height, customClassName, couple = [...new Array(2)]} :IProps) => {
	return (
		<Box className={customClassName ? customClassName : ''} sx={{ display: 'flex', height: height}}>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				rowGap: '15px',
				justifyContent: 'space-between',
			}}>
				{couple.map((_, id) => <UserTile key={id} name='Hulk' surname='Hogan'/>)}
			</Box>
			<TournamentLines boxHeight={height}/>
		</Box>
	)
}

export default PlayersCouple
