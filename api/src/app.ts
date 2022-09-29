import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(express.static('public'))
        dotenv.config()
    }

    private database (): void {
        const uri = process.env.MONGO_URI!

        mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        }, () => {
          console.log('Banco esta ON')
        })
      }
    
    private routes (): void {}



}


export default new App().express