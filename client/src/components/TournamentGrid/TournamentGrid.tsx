import React from 'react';
import Box from "@mui/material/Box";
import {UsersGroup} from "../UsersGroup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './TournamentGrid.module.css'
import { Header } from '../Header'

const TournamentGrid = () => {
	return (
		<Box sx={{padding: ' 0 0 50px', width: '100%', position: 'relative'}}>
			<Header/>
			<Box className={styles.content} sx={{paddingTop: '50px', overflowY: 'scroll'}}>
				{[...new Array(3)].map((_, id) => <UsersGroup key={id} customClassName={styles.group}/>)}
			</Box>
		</Box>
	);
};

export default TournamentGrid;
