import { Request, Responde } from 'express'
import shortId from 'shortid'

export class URLcontroller {
    public async shorten(req: Request, res: Response): Promise<void>{
const {originURL} = req.body
const hash = shortId.generate()






// verificaçao de url4
// criar o hash para url1
// salvar url no banco3
// retornar url q salvou 2

 }
}