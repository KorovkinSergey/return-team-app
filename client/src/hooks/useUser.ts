import { useCallback } from 'react'
import { endpoints } from '../consts/endpoints'
import { useAuthContext } from '../context/AuthContext'
import { useHttp } from './useHttp'

export const useUser = () => {
	const { user } = useAuthContext()
	const { loading, error, request } = useHttp()

	const getUser = useCallback(() => {
		try {
			return request(endpoints.user.replace(':id', user.id))
		} catch (e) {
			console.error('e', e)
		}
	}, [user, request])

	return { loading, error, getUser }
}
