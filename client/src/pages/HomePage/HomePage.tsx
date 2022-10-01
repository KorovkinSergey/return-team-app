import React from 'react'
import Box from '@mui/material/Box'
import { Button, Chip, Typography } from '@mui/material'
import { useAuthContext } from '../../context/AuthContext'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { UserAchievements } from '../../components/UserAchievements'
import { Wrapper } from '../../components/Wrapper'

const HomePage = () => {
	const { data, logout } = useAuthContext()

	const { user } = data || {}
	const { name = '', surname='' } = user || {}
	return (
		<Box sx={{
			display: 'flex',
			width: '100%',
			height: '100%',
		}}>
			<Button
				onClick={logout}
				variant='contained'
				color='primary'
				sx={{
					position: 'absolute',
					backgroundColor: 'secondary.main',
					top: 10,
					right: 10,
				}}>Выход</Button>
			<Box sx={{
				maxWidth: '25%',
				height:'100%',
				backgroundColor:'secondary.light',
			}}>
				<Wrapper top>
					<Box sx={{
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
					}}>
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
							<p>
								― Вас называют &quot;Да Винчи нашего времени&quot;. Что скажите на это?
							</p>
							<p>
								― Это бред - я рисовать не умею.
							</p>
						</Typography>
					</Box>

					<Box sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '20px'
					}}>
						<UserAchievements
							countColor='secondary.contrastText'
							label='Поставлено'
							count={0}
						/>
						<UserAchievements
							countColor='secondary.contrastText'
							label='Проиграно'
							count={0}
						/>
						<UserAchievements
							countColor='secondary.contrastText'
							label='Выиграно'
							count={0}
						/>
					</Box>

					<Typography sx={{ fontSize: 25, marginTop: 2 }} color='secondary.contrastText'>
						Баланс: {1000} баллов
					</Typography>
				</Wrapper>
			</Box>
			<Box>

			</Box>
		</Box>

	)
}

export default HomePage
