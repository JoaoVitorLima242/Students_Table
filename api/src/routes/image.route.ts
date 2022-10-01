import multer from "multer";
import path from 'path'
import { Router } from 'express'

// Controllers
import ImageController from '../controllers/Image'
import { ImageStorage } from "../helpers/storage";
// Helpers

const routes = Router()

const upload = multer({ storage: ImageStorage })

routes.post('/', upload.single('picture'), ImageController.uploadImage)

export default routes