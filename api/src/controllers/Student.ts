import { Request, Response } from 'express'
import StudentSchema from '../models/Student'
import Token from '../helpers/token'
import { StudentStorage } from '../helpers/storage'

type StudentRequest = {
    name: string;
    picture: string;
    street: string
    houseNr: string
    complement: string
    distric: string
    uf: string
    city: string    
}

class StudentControllers {
  public async createStudent (req: Request, res: Response): Promise<Response> {
    const {
      name,
      picture,
      city,
      street,
      houseNr,
      uf,
      distric,
      complement,
    }: StudentRequest = req.body

    let file: Express.Multer.File
    console.log(req.file)

    if (req.file) {
      file = req.file
    }

    if (name === undefined || city === undefined || street === undefined || houseNr === undefined || uf === undefined || distric === undefined || picture === undefined) {
      return res.status(400).json({ error:true, message:'Preencha todos os campos.' })
    }

    try {

      const Student = new StudentSchema({
        name,
        address: {
          city,
          street,
          houseNr,
          uf,
          distric,
          complement,
        },
        picture: file.path
      })

      try {
        const newStudent = await Student.save()
        res.json({ error: null, msg: 'Estudante criado com sucesso!', data: newStudent })
      } catch (error) {
        return res.status(400).json(error)
      }
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

export default new StudentControllers()
