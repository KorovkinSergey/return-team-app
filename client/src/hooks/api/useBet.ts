import { useHttp } from '../useHttp'
import { useCallback } from 'react'
import { endpoints } from '../../consts/endpoints'

export interface Bet {
	bets: []
	firstTeam: string
	firstTeamRatio: number
	isOpen: boolean
	secondTeam: string
	secondTeamRatio: number
	win: string
	winRation: number
}

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
