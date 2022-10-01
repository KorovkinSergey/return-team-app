import React from 'react';
import Box from "@mui/material/Box";
import {UserTile} from "../UserTile";

interface IProps {
	players: any[]
}

const Final = ({players}: IProps) => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			rowGap: '15px',
			justifyContent: 'space-around',
		}}>
			{players.map((_, id) => <UserTile key={id} name='Iron man'/>)}
		</Box>
	);
};

export default Final;
