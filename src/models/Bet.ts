import { model, Schema } from 'mongoose'

const schema = new Schema({
	firstTeam: { type: String, required: true },
	secondTeam: { type: String, required: true },
	firstTeamRatio: { type: Number, required: true },
	secondTeamRatio: { type: Number, required: true },
	isOpen: { type: Boolean, required: true, default: true },
	win: { type: String, default: '' },
	winRation: { type: Number, default: 1 },
	bets: [
		{
			userId: { type: String, required: true },
			coins: { type: Number, required: true },
			team: { type: String, required: true },
		},
	],
})

export default model('Bet', schema)
