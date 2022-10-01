import { Router } from 'express'
import auth from '../middleware/auth.middleware'
import Bet from '../models/Bet'
import User from '../models/User'

const { check, validationResult } = require('express-validator')

const router = Router()

// получить текущую ставку
router.get('/', auth, async (req: any, res: any) => {
	try {
		const bet = await Bet.findOne({ isOpen: true })

		if (!bet) return res.status(404).json({ message: 'Ставка не найдена' })

		return res.status(200).json(bet)
	} catch (e) {
		console.log('e', e)
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

// добавить новую ставку
router.post('/add', auth, async (req: any, res: any) => {
	try {
		const { firstTeam, secondTeam } = req.body

		const bet = new Bet({
			firstTeam,
			secondTeam,
			firstTeamRatio: 1,
			secondTeamRatio: 1,
			isOpen: true,
		})

		await bet.save()

		res.status(201).json({ message: 'Ставка создана' })

		return res.status(200).json(bet)
	} catch (e) {
		console.log('e', e)
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

// добавить ставку пользователя
router.post('/', auth, async (req: any, res: any) => {
	try {
		const bet = await Bet.findOne({ isOpen: true })
		const user = await User.findOne({ _id: req.body.bet.userId })

		if (!user) return res.status(404).json({ message: 'Пользователь не найден' })

		if (!bet) return res.status(404).json({ message: 'Ставка не найдена' })

		if (user.coins < req.body.bet.coins) {
			return res.status(404).json({ message: 'Не хватает поинтов' })
		}
		user.coins -= req.body.bet.coins

		await user.save()

		bet.bets.push(req.body.bet)

		let firstTeamCoins = 0
		let secondTeamCoins = 0

		bet.bets.map((item) => {
			if (item.team === bet.firstTeam) {
				firstTeamCoins += item.coins
			}
			if (item.team === bet.secondTeam) {
				secondTeamCoins += item.coins
			}
		})

		let firstTeamRatio = secondTeamCoins / firstTeamCoins !== Infinity ? secondTeamCoins / firstTeamCoins : 0
		let secondTeamRatio = firstTeamCoins / secondTeamCoins !== Infinity ? firstTeamCoins / secondTeamCoins : 0

		bet.firstTeamRatio = Math.floor((1 + firstTeamRatio) * 100) / 100
		bet.secondTeamRatio = Math.floor((1 + secondTeamRatio) * 100) / 100

		await bet.save()

		return res.status(201).json({ bet })
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

// изменить ставку
router.post('/:id', async (req: any, res: any) => {
	try {
		const bet = await Bet.findOne({ _id: req.params.id })

		if (!bet) return res.status(404).json({ message: 'Ставка не найдена' })

		const { isOpen, firstTeam, secondTeam, win, winRation } = req.body.bet

		const ids: string[] = []
		const userBets: any = []

		if (win !== undefined) {
			bet.win = win
		}
		if (winRation !== undefined) {
			bet.winRation = winRation
		}

		if (isOpen !== undefined) {
			bet.isOpen = isOpen
		}
		if (firstTeam !== undefined) {
			bet.firstTeam = firstTeam
		}
		if (secondTeam !== undefined) {
			bet.secondTeam = secondTeam
		}
		await bet.save()

		if (bet.isOpen === false && !!bet.win && !!bet.winRation) {
			bet.bets.map((item) => {
				if (item.team !== bet.win) return
				if (!ids.includes(item.userId)) ids.push(item.userId)
				const findBet = userBets.find((user: any) => user._id === item.userId)

				if (findBet) {
					findBet.coins += item.coins * bet.winRation
					return
				}
				userBets.push({ _id: item.userId, coins: item.coins * bet.winRation })
			})
		}

		const users = await User.find({ _id: ids })

		await users.map(async (user) => {
			user.coins += userBets.find((userBet: any) => userBet._id === user._id.toString()).coins
			await user.save()
		})

		res.status(201).json(users)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

export default router
