import express from 'express'
import { URLcontroller } from './controller/URLcontroller';

const api = express()

const urlController = new URLcontroller()
api.post("/shorten", urlController.shorten)


api.listen(5000, () => console.log('Express listening'));


