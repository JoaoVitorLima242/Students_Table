import { Request, Response } from 'express'

// Models
import StudentSchema from '../models/Student'

type StudentRequest = {
    name: string;
    picture: string;
    street: string
    houseNr: string
    complement: string
    distric: string
    uf: string
    city: string
    cep: string 
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
      cep
    }: StudentRequest = req.body

    if (name === undefined || city === undefined || street === undefined || houseNr === undefined || uf === undefined || distric === undefined || picture === undefined) {
      return res.status(400).json({ error:true, message:'Preencha todos os campos.' })
    }

    try {

      const newStudent = await new StudentSchema({
        name,
        picture,
        address: {
          city,
          street,
          houseNr,
          uf,
          distric,
          complement,
          cep
        }
      }).save();

      try {
        res.json({ error: null, msg: 'Estudante criado com sucesso!' })
      } catch (error) {
        return res.status(400).json(error)
      }
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  public async getStudents (req: Request, res: Response): Promise<Response> {
    try {
      const {
        limit=10,
        page=0,
        search
      } = req.query

      const data = await StudentSchema.list(Number(page), Number(limit), search)
      return res.json({ error: null, data })
    } catch (error) {
      return res.status(400).json({error: true, message: error.message})
    }
  }

}

export default new StudentControllers()
