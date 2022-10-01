import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { UsersGroup } from '../UsersGroup'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Header } from '../Header'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './TournamentGrid.module.css'
import { useGroupList } from '../../hooks/api/useGroupList'

const TournamentGrid = () => {
	const { getGroupList } = useGroupList()
	const [groupList, setGroupList] = useState([])

	useEffect(() => {
		getGroupList().then(setGroupList)
	}, [])

	console.log('groupList', groupList)

	return (
		<Box
			sx={{
				padding: ' 0 0 50px',
				width: '100%',
				position: 'relative',
			}}
		>
			<Header />
			<Box
				className={styles.content}
				sx={{
					background: 'url(/assets/man-look.jpg)',
					backgroundSize: 'cover',
					paddingTop: '50px',
					overflowY: 'scroll',
				}}
			>
				{[...new Array(3)].map((_, id) => (
					<UsersGroup key={id} customClassName={styles.group} />
				))}
			</Box>
		</Box>
	)
}

export default TournamentGrid
