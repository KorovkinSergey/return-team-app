import { useCallback, useEffect, useState } from 'react'

const storageName = 'userData'

export interface IUseAuth {
	login: (userData: IData) => void
	logout: () => void
	token: string
	user: any
	updateUser: (userData: any) => void
	data: IData | null
	isAuthenticated: boolean
}

interface IData {
	token: string
	user: {
		avatar: string
		id: string
		name: string
		surname: string
		coins: number
		bets: []
		role: 'USER' | 'ADMIN'
	}
}

export const useAuth = (): IUseAuth => {
	const [token, setToken] = useState('')
	const [data, setData] = useState<IData | null>(null)
	const [user, setUser] = useState<any | null>(null)

	const login = useCallback((userData: IData) => {
		setToken(userData.token)
		setData(userData)
		setUser(userData.user)
		localStorage.setItem(
			storageName,
			JSON.stringify({
				...userData,
			})
		)
	}, [])

	useEffect(() => {
		const localData = localStorage.getItem(storageName)
		const data = localData ? JSON.parse(localData) : null
		if (data && data.token) {
			login(data)
		}
	}, [login])

	const updateUser = useCallback((updateData: any) => {
		setUser({ ...user, ...updateData })
	}, [])

	const logout = useCallback(() => {
		setToken('')
		setData(null)
		localStorage.removeItem(storageName)
	}, [])

	const isAuthenticated = !!token

	return { login, user, updateUser, logout, token, data, isAuthenticated }
}
