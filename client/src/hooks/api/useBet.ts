import { useHttp } from '../useHttp'
import { useCallback } from 'react'
import { endpoints } from '../../consts/endpoints'

export const useBet = () => {
	const { loading, error, request } = useHttp()

	const getBet = useCallback(() => {
		try {
			return request(endpoints.bet)
		} catch (e) {
			console.log('e', e)
		}
	}, [request])

	return { getBet, loading, error }
}
