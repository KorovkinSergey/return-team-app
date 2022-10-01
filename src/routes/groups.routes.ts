import { Router } from 'express'
import auth from '../middleware/auth.middleware'
import Group from '../models/Group'

const { check, validationResult } = require('express-validator')

const router = Router()

const dictionaryValidation = [auth]

// получить список групп
router.get('/', auth, async (req: any, res: any) => {
	try {
		const groups = await Group.find()

		if (!groups) return res.status(404).json({ message: 'Группы не найдены' })

		return res.status(200).json(groups)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})
// получить группу по id
router.get('/:id', auth, async (req: any, res: any) => {
	try {
		const group = await Group.findById({ _id: req.params.id })

		if (!group) return res.status(404).json({ message: 'Группа не найдена' })

		return res.status(200).json(group)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

// добавить новую группу
router.post('/', [...dictionaryValidation], async (req: any, res: any) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array(), message: 'Не корректные данные' })
		}
		const { members } = req.body
		const groups = await Group.find()

		const group = new Group({
			group: groups.length + 1,
			members,
			semiFinal: [],
			quarterfinal: [],
		})

		await group.save()

		res.status(201).json({ message: 'Группа создана' })
	} catch (e) {
		console.log('e', e)
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})
// удалить группу
router.delete('/:id', [...dictionaryValidation], async (req: any, res: any) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array(), message: 'Не корректные данные' })
		}
		const { id } = req.params

		await Group.deleteOne({ _id: id })

		res.status(201).json({ message: 'Пользователь удален' })
	} catch (e) {
		console.log('e', e)
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

// Редактировать группу
router.post('/:id', [...dictionaryValidation], async (req: any, res: any) => {
	try {
		Group.findById(req.params.id, async (err: any, group: any) => {
			if (!group) return res.status(404).json({ message: 'Группа не найдена' })

			if (req.body.group.quarterfinal) {
				group.quarterfinal = req.body.group.quarterfinal
			}
			if (req.body.group.semiFinal) {
				group.quarterfinal = req.body.group.quarterfinal
			}

			group.save((error: any, result: any) => {
				if (error) return res.status(400).json({ message: error })
				return res.status(200).json({ message: result })
			})
		})
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуй снова' })
	}
})

export default router
