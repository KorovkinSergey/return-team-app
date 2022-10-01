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
				padding: '25.5px 0',
			}}>
				<Box sx={{
					height: '100%',
					width: '50%',
					borderTop: '3px solid',
					borderRight: '3px solid',
					borderBottom: '3px solid',
					borderColor: 'primary.main',
					borderLeftColor: 'transparent'
				}}>
				</Box>
				<hr style={{
					border: 'none',
					height: '3px',
					backgroundColor: '#aa0505',
					margin: 0,
					width: '50%',
					position: 'relative',
					top: '50%'
				}}/>
			</Box>
	)
}

export default TournamentLines
