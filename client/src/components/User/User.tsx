import React from 'react'
import Box from '@mui/material/Box'
import { Wrapper } from '../Wrapper'
import { Chip, Typography } from '@mui/material'
import UserAvatar from '../UserAvatar/UserAvatar'
import { UserAchievements } from '../UserAchievements'
import { useAuthContext } from '../../context/AuthContext'

const User = () => {
	const { data } = useAuthContext()
	const { user } = data || {}
	const { name = '', surname = '', coins } = user || {}

	return (
		<Box
			sx={{
				maxWidth: '25%',
				height: '100%',
				backgroundColor: 'success.main',
			}}
		>
			<Wrapper top>
				<Box
					sx={{
						marginTop: 5,
						marginLeft: 'auto',
						marginRight: 'auto',
						backgroundColor: 'primary.light',
						maxWidth: '100%',
						width: 'auto',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '20px',
						borderRadius: '24px',
					}}
				>
					<Chip
						avatar={<UserAvatar name={name} />}
						label={`${name} ${surname}`}
						variant='filled'
						sx={{
							height: 50,
							color: 'primary.contrastText',
							fontSize: '2rem',
							bgcolor: 'transparent',
						}}
					/>
					<Typography sx={{ fontSize: 18, marginTop: 2 }} color='primary.contrastText'>
						Девиз:
						<br />― Вас называют &quot;Да Винчи нашего времени&quot;. Что скажите на это?
						<br />― Это бред - я рисовать не умею.
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '20px',
					}}
				>
					<UserAchievements countColor='secondary.contrastText' label='Поставлено' count={0} />
					<UserAchievements countColor='secondary.contrastText' label='Проиграно' count={0} />
					<UserAchievements countColor='secondary.contrastText' label='Выиграно' count={0} />
				</Box>
				<Typography sx={{ fontSize: 25, marginTop: 2 }} color='secondary.contrastText'>
					Баланс: {coins ? `${coins} баллов` : 'не найден'}
				</Typography>
			</Wrapper>
		</Box>
	)
}

export default User
