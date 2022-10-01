import React from 'react'
import Box from '@mui/material/Box'
import { QuarterFinal } from '../QuarterFinal'
import { SemiFinal } from '../SemiFinal'
import { Final } from '../Final'


interface IProps {
	customClassName?: string
	group?: object
}

const UsersGroup = ({customClassName}: IProps) => {
	return (
		<Box sx={{
			display: 'flex',
			width: '100%'}}
			className={customClassName ? customClassName : ''}>
			<QuarterFinal />
			<SemiFinal />
			<Final players={[...new Array(1)]}/>
		</Box>
	);
};

export default UsersGroup;
