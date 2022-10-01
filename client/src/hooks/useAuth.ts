import { useCallback, useEffect, useState } from 'react'

const storageName = 'userData'

export interface IUseAuth {
	login: (userData: IData) => void,
	logout: () => void,
	token: string,
	data: IData | null,
	isAuthenticated: boolean,
}

interface IData {
	token: string,
	user: {
		avatar: string,
		id: string,
		name: string,
		surname: string,
		coins: number,
		bets: [],
		role: 'USER' | 'ADMIN'
	}
}

export const useAuth = (): IUseAuth => {
	const [token, setToken] = useState('')
	const [data, setData] = useState<IData | null>(null)

	const login = useCallback((userData: IData) => {
		setToken(userData.token)
		setData(userData)
		localStorage.setItem(storageName, JSON.stringify({
			...userData,
		}))
	}, [])

	useEffect(() => {
		const localData = localStorage.getItem(storageName)
		const data = localData ? JSON.parse(localData) : null
		if (data && data.token) {
			login(data)
		}
	}, [login])

	const logout = useCallback(() => {
		setToken('')
		setData(null)
		localStorage.removeItem(storageName)
	}, [])


	const isAuthenticated = !!token

	return { login, logout, token, data, isAuthenticated }
}
