import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { UsersGroup } from '../UsersGroup'
import { Header } from '../Header'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './TournamentGrid.module.css'
import { useGroupList } from '../../hooks/api/useGroupList'
import { Loading } from '../Loading'

const TournamentGrid = () => {
	const { getGroupList, loading } = useGroupList()
	const [groupList, setGroupList] = useState([])

	useEffect(() => {
		getGroupList().then(setGroupList)
	}, [])

	if(loading) return <Loading/>

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
