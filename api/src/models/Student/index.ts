import { Schema, model } from 'mongoose'

// Types
import { StudentInterface } from './index.d'

const StudentSchema = new Schema<StudentInterface>({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  addres: { 
    stress: { type: String },
    houseNr: {type: String},
    complement: {type: String},
    distric: {type: String},
    uf: {type: String},
    city: {type: String},
    cep: {type: String}
  }
},
{
  timestamps: true
})

export default model<StudentInterface>('Student', StudentSchema)
