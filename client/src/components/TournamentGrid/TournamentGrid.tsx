import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { UsersGroup } from '../UsersGroup'
import { Header } from '../Header'
import { useGroupList } from '../../hooks/api/useGroupList'
import { Loading } from '../Loading'
import styles from './TournamentGrid.module.css'

const TournamentGrid = () => {
	const { getGroupList, loading } = useGroupList()
	const [groupList, setGroupList] = useState([])

	useEffect(() => {
		getGroupList().then(setGroupList)
	}, [getGroupList])

	if (loading) return <Loading />

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
				{groupList.map((group: any) => (
					<UsersGroup key={group.group} customClassName={styles.group} group={group} />
				))}
			</Box>
		</Box>
	)
}

export default TournamentGrid
