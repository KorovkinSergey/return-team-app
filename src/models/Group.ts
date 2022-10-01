import { model, Schema } from 'mongoose'

const schema = new Schema({
	group: { type: Number, required: true, unique: true },
	members: [
		{
			id: { type: String, required: true },
			name: { type: String, required: true },
			surname: { type: String, required: true },
		},
	],
	quarterfinal: [
		{
			firstTeam: { type: String, default: '', required: true },
			secondTeam: { type: String, default: '', required: true },
			win: { type: String, default: '', required: true },
			score: { type: String, default: '', required: true },
		},
	],
	semiFinal: [
		{
			firstTeam: { type: String, default: '', required: true },
			secondTeam: { type: String, default: '', required: true },
			win: { type: String, default: '', required: true },
			score: { type: String, default: '', required: true },
		},
	],
})

export default model('Group', schema)
