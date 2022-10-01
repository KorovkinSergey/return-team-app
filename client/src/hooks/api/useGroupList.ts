import { useHttp } from '../useHttp'
import { useCallback } from 'react'
import { endpoints } from '../../consts/endpoints'

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
