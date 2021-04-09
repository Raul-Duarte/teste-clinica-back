import User from "../model/User";

class ServicosControllers {
    async index(req, res) {
        const datas = await User.findAll()
        return res.json(datas)
    }
}

export default new ServicosControllers