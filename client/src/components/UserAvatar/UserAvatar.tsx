import React, { FC, memo } from 'react'
import { Avatar } from '@mui/material'
import { getFirstLetter } from '../../helpers/getFirstLetter'

interface IProps {
	name: string
}

const UserAvatar: FC<IProps> = ({ name }) => {
	return (
		<Avatar sx={{
			width: 55,
			height: 55,
			backgroundColor: 'secondary.light',
			fontSize: '3rem',
			lineHeight: '100%',
		}} src='/assets/ironman-ava.webp'
		>
			<span style={{ height: '100%' }}>{getFirstLetter(name)}</span>
		</Avatar>
	)
}

export default memo(UserAvatar)
