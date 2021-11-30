import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'
import { URLModel } from '../database/model/URL'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        // Verifica se a URL existe
        if (url) {
            // Informa que a URL já existe no DB
            res.json('URL already exists in DB')
            // res.json(url)
            return
        }
        // Senão Cria o hash para a URL
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // Salva a URL no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        // Retorna a URL
        res.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        // Pegar o hash da URL
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })
        // Encontrar a URL original pelo hash
        if (url) {
            // Redirecionar para a URL original a partir dos dados do DB
            res.redirect(url.originURL)
            return
        }
        // Caso a URL não exista retorna o erro
        res.status(400).json({ error: 'URL not found' })
    }
}