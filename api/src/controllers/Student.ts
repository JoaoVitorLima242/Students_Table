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

    if (!name || !city || !street || !houseNr || !uf || !distric || !picture) {
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

      const data = await StudentSchema.list(Number(page), Number(limit), search.toString())
      return res.json({ error: null, data })
    } catch (error) {
      return res.status(400).json({error: true, message: error.message})
    }
  }

  public async getStudentById (req: Request, res: Response): Promise<Response> {
    try {
      const {
        id
      } = req.params

      const data = await StudentSchema.findOne({_id: id})
      if (!data) {
        res.status(400).json({error: true, message: 'Estudante não encontrado!'})
      }

      return res.json({ error: null, data })
    } catch (error) {
      return res.status(400).json({error: true, message: error.message})
    }
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
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

    const studentInstace = await StudentSchema.findOne({_id: req.params.id})

    if (!studentInstace) {
      res.status(400).json({error: true, message: 'Estudante não encontrado!'})
    }

    if (!name || !city || !street || !houseNr || !uf || !distric || !picture) {
      return res.status(400).json({ error:true, message:'Campos obrigatórios vázios.' })
    }

    const student = {
      name: name && name,
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
    }


    try {
      const updateStudent = await StudentSchema.findOneAndUpdate({ _id: studentInstace._id }, {$set: student}, {new: true})
      return res.json({ error: null, message: 'Estudante criado com sucesso!' })
    } catch (error) {
      res.status(400).json(error)
    }
  }

  public async deleteStudent (req: Request, res: Response): Promise<Response> {
    const {
      id
    } = req.params

    try {
      await StudentSchema.deleteOne({ _id: id })
      return res.json({ error: null, message: 'Estudante removido com sucesso!' })
    } catch (error) {
      return res.status(400).json({error: true, message: error.message})
    }
  }

}

export default new StudentControllers()
