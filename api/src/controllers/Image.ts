import { Request, Response } from "express"

class IamgeController {
    public async uploadImage (req: Request, res: Response): Promise<void> {
        try {
            const imageUrl = process.env.API_URL + 'img/' + req.file.filename
            
            res.json({ error: null, imageUrl: imageUrl})
        } catch (err) {
            res.json({ error: true, message: err.message})
        }
    }
}

export default new IamgeController()