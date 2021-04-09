import * as Yup from 'yup'

import User from '../model/User'

class SessionController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            password_hash: Yup.string(6).required(),

        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation Faaaaaails" })
        }

        const {name, password_hash} = req.body
        const user = await User.findOne({
            where: {
                name,
                password_hash
            }
        })
        if(!user){
            return res.status(401).json({error:'User not found'})
        }

        const {id,provider} = user
        return res.json({
           user:{
            id,
            name,
            provider
           },
        })
    }
}

export default new SessionController