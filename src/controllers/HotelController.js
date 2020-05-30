import Hotel from '../models/Hotel'

class HotelController{

    async index(req, res){
        const { municipio } = req.body;

        let hoteis = await Hotel.find({ municipio});

        return res.json(hoteis);

    } 
    async store(req,res){
        const arquivo = req.file;
        console.log(arquivo);
        console.log(req.body);
        return res.json({ok: true});
    }

    index(req,res){ //recuperar varios
            return res.json({retorno: false});
    }

    show (req,res){ //recuperar um especifico
            return res.json({retorno: false});
    }

    async store(req,res){
        const { nome, uf , municipio, endereco, qtdeAptos, valorDiaria } = req.body;
       
        let hotel = await Hotel.findOne({ nome });
        
        if(! hotel){
              hotel = await Hotel.create({
              nome, 
              uf ,
              municipio,
              endereco, 
              qtdeAptos, 
              valorDiaria
            });
        }    
        return res.json(hotel);

        }
    async update(req, res){
        const { hotel_id, nome, uf , municipio, endereco, qtdeAptos, valorDiaria } = req.body;
        
        let hotel = await Hotel.updateOne({_id: hotel_id}, {
            nome, 
            uf , 
            municipio, 
            endereco, 
            qtdeAptos, 
            valorDiaria,
        });

        return res.json(hotel);
    }
    }

export default new HotelController;
