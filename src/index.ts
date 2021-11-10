import express from 'express'

const api = express()

api.use('/test', (req: Resquest, res: Response) => {
res.json({sucess: true })
});


api.listen(5000, () => console.log('Express listening'));


