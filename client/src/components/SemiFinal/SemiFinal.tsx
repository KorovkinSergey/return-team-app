import React, { FC } from 'react'
import Box from '@mui/material/Box'
import PlayersCouple from '../PlayersCouple/PlayersCouple'
import { IQuarter } from '../../hooks/api/useGroupList'

interface IProps {
	semiFinal: IQuarter[]
}

const SemiFinal: FC<IProps> = ({semiFinal}) => {
	return (
		<Box sx={{ flexBasis: '45%', padding: '36.5px 0'}}>
			{semiFinal.map((couple) => {
				return <PlayersCouple key={couple._id}
															couple={couple}
															height='100%'
				/>
			})}
		</Box>
	)
}

export default SemiFinal
