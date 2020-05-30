import Usuario from '../models/Usuario'

class SessionController{

    async index(req,res){
            let usuarios = await Usuario.find();
            return res.json(usuarios);
    }

    async store(req,res){
        const { email, nome } = req.body;

        let usuario = await Usuario.findOne({email});
        if (!usuario){
            usuario = await Usuario.create({email});
        }

        return res.json(usuario);

        }
    }

export default new SessionController;
