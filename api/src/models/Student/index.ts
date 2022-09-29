import { Schema, model } from 'mongoose'

import { StudentInterface } from './index.d'

const UserSchema = new Schema<StudentInterface>({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  addres: { 
    stress: { type: String },
    houseNr: {type: String},
    complement: {type: String},
    distric: {type: String},
    uf: {type: String},
    city: {type: String}
  }
},
{
  timestamps: true
})

export default model<StudentInterface>('Student', UserSchema)
