import { useHttp } from '../useHttp'
import { useCallback } from 'react'
import { endpoints } from '../../consts/endpoints'
import { useAuth } from '../useAuth'

export interface UserBet {
	userId: string
	coins: string
	team: string
}

export interface AddBetResponse {
	coins: number
}

export const useAddBet = () => {
	const { loading, error, request } = useHttp()
	const { updateUser } = useAuth()

	const addBet = useCallback((bet: UserBet) => {
		try {
			return request(endpoints.bet, 'POST', { bet }).then((req: AddBetResponse) => {
				updateUser({coins: req.coins})
			})
		} catch (e) {
			console.log('e', e)
		}
	}, [request, updateUser])

	return { addBet, loading, error }
}
