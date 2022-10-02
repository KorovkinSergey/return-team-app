import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Wrapper } from '../Wrapper'
import { Chip, Typography } from '@mui/material'
import UserAvatar from '../UserAvatar/UserAvatar'
import styles from './User.module.css'
import { useUser } from '../../hooks/useUser'

interface IUser {
	avatar: string
	id: string
	name: string
	surname: string
	coins: number
	bets: []
	role: 'USER' | 'ADMIN'
}

const User = () => {
	const { getUser } = useUser()
	const [user, setUser] = useState<IUser | null>(null)
	const { name = '', surname = '', coins } = user || {}

	useEffect(() => {
		getUser().then((res: IUser) => {
			setUser(res)
		})
	}, [getUser, setUser])

	return (
		<Box
			className={styles.mainWrap}
			sx={{
				height: '100%',
				backgroundColor: 'success.main',
				overflowY: 'scroll',
				flexShrink: 0,
			}}
		>
			<Wrapper top customStyles={{ p: 0, pt: 4 }}>
				<Box
					sx={{
						marginTop: 0,
						marginLeft: 'auto',
						marginRight: 'auto',
						backgroundColor: 'primary.light',
						maxWidth: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '20px',
						borderRadius: '24px',
						width: '90%',
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
						<br />— Да. Парень в бронированном костюме. А снять — кто ты без него?
						<br />— Гений, миллиардер, плэйбой, филантроп.
					</Typography>
				</Box>

				{/*				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '20px',
					}}
				>
					<UserAchievements countColor='secondary.contrastText' label='Поставлено' count={0} />
					<UserAchievements countColor='secondary.contrastText' label='Проиграно' count={0} />
					<UserAchievements countColor='secondary.contrastText' label='Выиграно' count={0} />
				</Box>*/}

				<Box sx={{ position: 'relative', marginTop: 5, width: '100%', paddingBottom: '100%' }}>
					<img
						src='/assets/User-iron-man.png'
						alt='ironman'
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
							objectFit: 'contain',
							objectPosition: 'center',
							maxWidth: '100%',
						}}
					/>
					<Typography
						className={styles.text}
						sx={{
							fontSize: 25,
							position: 'absolute',
							top: '28%',
							left: '23%',
							fontWeight: 800,
							zIndex: 2,
							textShadow: `1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000`,
						}}
						color='primary.contrastText'
					>
						Баланс:
					</Typography>

					<Typography
						className={styles.text}
						sx={{
							fontSize: 25,
							position: 'absolute',
							top: '40%',
							left: '27%',
							width: '5vw',
							height: '5vw',
							maxWidth: '60px',
							maxHeight: '60px',
							borderRadius: '50%',
							bgcolor: '#ffff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							boxShadow: `#FFF 0 -1px 4px,
						#ff0 0 -2px 10px,
						#ff8000 10px -10px 20px,
						red 0 -18px 40px,
						5px 5px 15px 5px
						rgba(255,255,255,0);`,
							cursor: 'default',
						}}
						color='secondary.contrastText'
					>
						{coins?.toFixed(0)}
					</Typography>
				</Box>
			</Wrapper>
		</Box>
	)
}

export default User
