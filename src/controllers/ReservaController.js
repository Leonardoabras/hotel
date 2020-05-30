import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController{


    async index(req, res){
        const {responsavel } = req.body;
        let reservas = await Reserva.find({ responsavel });
        return res.json(reservas);
    }
    
    async store(req, res){
        const { usuario_id } = req.headers; 
        const { dataInicial, dataFinal, qtdeHospedes } = req.body; 
        const { hotel_id } = req.params;

        Usuario.findById( usuario_id ).catch((err) => {
            return res.status(401).json({ mensagem: "Usuario não autorizado!"});
        });

        Hotel.findById(hotel_id).catch((err) => {
            return res.status(400).json({ mensagem: "Hotel Inválido! "});
        });



        //validando se o hotel existe
        let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial,
                                             dataFinal, qtdeHospedes }); 
        await reserva.populate('responsavel').populate('hotel').execPopulate;
        
        return res.json(reserva);
    
    } //responsavel por criar um novo item, fazendo o mesmo papel do insert no SQL
}
        export default new ReservaController;