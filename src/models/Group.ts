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
			firstCandidate: { type: String, default: '' },
			secondCandidate: { type: String, default: '' },
			win: { type: String, default: '' },
			score: { type: String, default: '' },
		},
	],
	semiFinal: [
		{
			firstCandidate: { type: String, default: '' },
			secondCandidate: { type: String, default: '' },
			win: { type: String, default: '' },
			score: { type: String, default: '' },
		},
	],
})

export default model('Group', schema)
