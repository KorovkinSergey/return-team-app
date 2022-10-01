import React from 'react'
import Box from '@mui/material/Box'

interface IProps {
	boxHeight: string
}

const TournamentLines = ({boxHeight}: IProps) => {
	return (
			<Box sx={{
				width: '100%',
				height: boxHeight,
				display: 'flex',
				padding: '18px 0',
			}}>
				<Box sx={{
					height: '100%',
					width: '50%',
					borderTop: '1px solid black',
					borderRight: '1px solid black',
					borderBottom: '1px solid black'
				}}>
				</Box>
				<hr style={{
					border: 'none',
					height: '1px',
					backgroundColor: 'black',
					margin: 0,
					width: '50%',
					position: 'relative',
					top: '50%'
				}}/>
			</Box>
	)
}

export default TournamentLines
