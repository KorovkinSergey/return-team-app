import React, { FC } from 'react'
import Box from '@mui/material/Box'
import TournamentLines from '../TournamentLines/TournamentLines'
import { UserTile } from '../UserTile'
import { IQuarter } from '../../hooks/api/useGroupList'

interface IProps {
	height: string
	customClassName?: string
	couple: IQuarter
}

const PlayersCouple: FC<IProps> = ({ height, couple, customClassName}) => {
	const {firstCandidate, secondCandidate } = couple
	return (
		<Box className={customClassName ? customClassName : ''} sx={{ display: 'flex', height: height}}>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				rowGap: '15px',
				justifyContent: 'space-between',
			}}>
				<UserTile name={firstCandidate}/>
				<UserTile name={secondCandidate}/>
			</Box>
			<TournamentLines boxHeight={height}/>
		</Box>
	)
}

export default PlayersCouple
