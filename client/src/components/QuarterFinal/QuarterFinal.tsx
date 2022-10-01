import React from 'react'
import Box from '@mui/material/Box'
import PlayersCouple from '../PlayersCouple/PlayersCouple'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from '../QuarterFinal/QuarterFinal.module.css'

const QuarterFinal = () => {
	return (
		<Box sx={{ flexBasis: '45%'}}>
			<PlayersCouple height='auto' customClassName={styles.couple}/>
			<PlayersCouple height='auto' customClassName={styles.couple}/>
		</Box>
	)
}

export default QuarterFinal
