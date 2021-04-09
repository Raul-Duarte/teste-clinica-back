// import * as Yup from 'yup'

import ServicosSolicitados from '../model/ServicosSolicitados'
import Servicos from '../model/Servicos'


class ServicosSolicitadosController {
    async store(req, res) {
        
        const servico = await Servicos.findOne({ where: { id: req.body.servicos_id } })

        if (!servico) {
            return res.status(401).json({ error: 'Servico not found' })
        }

        const { id, user_id, servicos_id } = await ServicosSolicitados.create(req.body)

        return res.json({
            id,
            user_id,
            servicos_id
        })
    }

    async index(req, res) {
        const data = await ServicosSolicitados.findAll()
        return res.json(data)
    }
}

export default new ServicosSolicitadosController()