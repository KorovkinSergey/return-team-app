import { useHttp } from '../useHttp'
import { useCallback } from 'react'
import { endpoints } from '../../consts/endpoints'

export interface IGroup {
	group: number
	members: IMember[]
	quarterfinal: IQuarter[]
	semiFinal: IQuarter[]
	__v: number
	_id: string
}

export interface IMember {
	id: string
	name: string
	surname: string
	_id: string
}

export interface IQuarter {
	firstCandidate: string
	secondCandidate: string
	win: string
	score: string
	_id: string
}

export const useGroupList = () => {
	const { loading, error, request } = useHttp()

	const getGroupList = useCallback(() => {
		try {
			return request(endpoints.groups)
		} catch (e) {
			console.log('e', e)
		}
	}, [request])

	return { getGroupList, loading, error }
}
