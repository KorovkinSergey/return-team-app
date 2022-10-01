import { model, Schema } from 'mongoose'

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String },
	coins: {type: Number, required: true},
  bets: [
    {
      id: { type: String, required: true },
      win: { type: String, required: true },
      bet: { type: Number, default: 0 },
      result: { type: String, default: '' },
    }
  ]
})

export default model('User', schema)
