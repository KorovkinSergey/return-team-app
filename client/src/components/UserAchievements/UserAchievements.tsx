import React, { FC, memo } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

interface IProps {
	label: string,
	count: string | number,
	countColor: string
}

const UserAchievements: FC<IProps> = ({ label, count = 0, countColor = 'common.white' }) => {
	return (
		<Box sx={{ marginTop: 1 }}>
			<Typography sx={{
				fontSize: 24,
				textAlign: 'center',
				width: 120,
				height: 120,
				borderRadius: '50%',
				border: '3px solid #aa0505',
				padding: '20px',
				boxSizing: 'border-box'
			}} color='primary.light'>
				<span style={{
					display: 'block',
					fontSize: 14,
				}}>{label}:</span>
				<Typography sx={{
				fontSize: 32,
				display: 'inline-block',
			}} color={countColor} component='span'>{count}</Typography>
			</Typography>
		</Box>
	)
}

export default memo(UserAchievements)
