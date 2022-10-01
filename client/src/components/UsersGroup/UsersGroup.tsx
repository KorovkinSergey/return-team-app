import React from 'react'
import Box from '@mui/material/Box'
import { QuarterFinal } from '../QuarterFinal'
import { SemiFinal } from '../SemiFinal'
import { Final } from '../Final'
import { IGroup } from '../../hooks/api/useGroupList'

interface IProps {
	customClassName?: string
	group: IGroup
}

const UsersGroup = ({ group, customClassName }: IProps) => {
	const {quarterfinal, semiFinal} = group

	return (
		<Box sx={{
			display: 'flex',
			width: '100%',
		}}
				 className={customClassName ? customClassName : ''}>
			<QuarterFinal quarterfinal={quarterfinal} />
			<SemiFinal semiFinal={semiFinal} />
			<Final players={[...new Array(1)]} />
		</Box>
	)
}

export default UsersGroup
