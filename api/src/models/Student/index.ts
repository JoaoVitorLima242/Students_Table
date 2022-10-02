import { Schema, model, Model } from 'mongoose'

// Types
import { StudentInterface } from './index.d'

interface StudentModel extends Model<StudentInterface> {
  list(page: any, limit: any, search: any): {
    total: any
    page: any
    limit: any
    students: StudentInterface[]
  }
}

const StudentSchema = new Schema<StudentInterface | StudentModel>({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  address: { 
    street: { type: String },
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

StudentSchema.statics.list = function list(page: number, limit: number, search: string){
  return new Promise(resolve => {
    let query = {};

    if (search) {
      const searchQuery = [
        {name: { $regex: search, $options: "i" }}
      ];
      query = { $or: searchQuery }
    }
    
    
    let queryPromise = this.find(query)
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(limit)
      .exec()

    this.countDocuments(query, (err, count) => {
      queryPromise.then((students: StudentInterface) => {
        if(!students) return resolve(null);
        return resolve({
        total: count,
        page: page,
        limit,
        students
        });
      })
    })
  })
}

const Student: StudentModel = model<StudentInterface, StudentModel>('Student', StudentSchema)

export default Student
