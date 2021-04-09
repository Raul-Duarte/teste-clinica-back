import Servicos from "../model/Servicos";

class ServicosControllers {
    async index(req, res) {
        const datas = await Servicos.findAll()
        return res.json(datas)
    }
}

export default new ServicosControllers