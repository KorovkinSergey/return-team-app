import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

interface IProps {
	name: string
	surname: string
}

const UserTile = ({name, surname}: IProps) => {
	return (
		<Box sx={{padding: '5px 20px', border: '1px solid', borderColor: 'secondary.contrastText', width: '100%'}}>
			<Typography>
				{name}&nbsp;{surname}
			</Typography>
		</Box>
	);
};

export default UserTile;
