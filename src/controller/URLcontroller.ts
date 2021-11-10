import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLcontroller {
    public async shorten(req: Request, res: Response): Promise<void> {
const { originURL } = req.body
const hash = shortId.generate()
const shortURL = `${config.API_URL}/${hash}`


Responde.json({ originURL, hash, shortURL })
 }
 public async redirect(req: Request, res: Response): Promise<void>{
const {hash} = req.params

const url = {
originURL: 'https://cloud.mongodb.com/v2/618bee84e7a2782ce9adbc9d#clusters/connect?clusterId=bootcamps-eduzz',
hash: 
}

 }
}