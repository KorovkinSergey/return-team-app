import { Router } from 'express'
import User from '../models/User'
import auth from '../middleware/auth.middleware'

const router = Router()

router.get('/:id', [auth], async (req: any, res: any) => {
	try {
		const user = await User.findOne({ id: req.params.id })

		if (!user) return res.status(404).json({ message: 'Пользователь не найден' })

		res.status(200).json(user)
	} catch (e) {
		console.log('res', e)
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

export default router
