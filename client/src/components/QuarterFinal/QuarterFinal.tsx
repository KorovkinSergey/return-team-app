import React from 'react'
import Box from '@mui/material/Box'
import PlayersCouple from '../PlayersCouple/PlayersCouple'
import { IQuarter } from '../../hooks/api/useGroupList'
import styles from '../QuarterFinal/QuarterFinal.module.css'

interface IProps {
	quarterfinal: IQuarter[]
}

const QuarterFinal: React.FC<IProps> = ({ quarterfinal }) => {
	const {} = quarterfinal
	return (
		<Box sx={{ flexBasis: '45%' }}>
			{quarterfinal.map((couple) => {
				return <PlayersCouple key={couple._id}
															couple={couple}
															height='auto'
															customClassName={styles.couple}
				/>
			})}
		</Box>
	)
}
export default QuarterFinal
