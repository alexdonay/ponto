const Feriado = require('../models/modferiado')
class Feriadocontroler{
    async select(req,res){
        const feriado = await Feriado.findAll({
            raw:true,
            nest : true
        })
      
        
    return feriado

    }
    async create(data1, descricao1){
        await Feriado.create({data: data1, descricao: descricao1})
    }
    async destroy(id){
        Feriado.destroy({
            where:{
                id: [id]
            }
        })
    }
    async count(){
       const total = Feriado.count()
        return await total
    }
    async update(){
        await feriado.update({},{where:{}})
    }
}
module.exports =new Feriadocontroler