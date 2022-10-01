import { Request, Response } from 'express'
import StudentSchema from '../models/Student'
import Token from '../helpers/token'
import { StudentStorage } from '../helpers/storage'

type StudentRequest = {
    name: string;
    picture: string;
    address: {
        street: string
        houseNr: string
        complement: string
        distric: string
        uf: string
        city: string    
    };
}

class StudentControllers {
  public async createStudent (req: Request, res: Response): Promise<Response> {
    const {
      name,
      address
    }: StudentRequest = req.body

    let file: Express.Multer.File

    if (req.file) {
      file = req.file
    }

    if (name === undefined || address === undefined ) {
      return res.status(400).json({ error:true, message:'Preencha todos os campos.' })
    }

    try {

      const Student = new StudentSchema({
        name,
        address,
        picture: file.path
      })

      try {
        const newStudent = await Student.save()
        res.json({ error: null, msg: 'Estudante criado com sucesso!', data: newStudent })
      } catch (error) {
        return res.status(400).json(error)
      }
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new StudentControllers()
