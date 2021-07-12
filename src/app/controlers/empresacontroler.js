const Empresa = require('../models/modempresa')
class Empresacontroler{
    async select(req,res){
        const empresa = await Empresa.findAll({
            raw:true,
            nest : true
        })
        
        
    return empresa

    }
    async create(razao_social, cnpj){
        await Empresa.create({razao_social: razao_social, cnpj: cnpj})
    }
    async destroy(id){
        Empresa.destroy({
            where:{
                id: [id]
            }
        })
    }
    async count(){
        total = Empresa.count()
        return await total
    }
    async update(){
        await Empresa.update({},{where:{}})
    }
}
module.exports = new Empresacontroler