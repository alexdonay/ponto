const Ponto = require('../models/modeponto')
const Funcionario = require('../models/modempregado')
class Pontocontroler{
    async select(req,res){
        const ponto = await Ponto.findAll({
            raw:true,
            nest : true
        })
      
        
    return ponto

    }
    async selectponto(idfunc,competencia){
        const pontos = await Ponto.findAll({
            raw:true,
            nest : true,
            
            where:{
                idfunc:idfunc

            },
            Attributes: ['competencia'], group: ['competencia'],
            
        })
      
        
    return pontos

    }
    async selectponto1(idfunc,competencia){
        const pontos = await Ponto.findAll({
            raw:true,
            nest : true,
            
            where:{
                idfunc:idfunc,
                competencia:competencia

            },
            
            order:['data']
        })
      
        
    return pontos

    }
    async create(idfunc, data,entrada,entradaintervalo,saidaintervalo,saida,hrtrabalhada,hrnormal,hr50,hr100,hrnoturna,falta,justificativa,competencia){
        const pontos = await Ponto.create({idfunc:idfunc, data:data,entrada:entrada,entradaintervalo:entradaintervalo,saidaintervalo:saidaintervalo,saida:saida,hrtrabalhada:hrtrabalhada,hrnormal:hrnormal,hr50:hr50,hr100:hr100,hrnoturna:hrnoturna,falta:falta,justificativa:justificativa,competencia:competencia})
    }
    async destroy(id){
        Ponto.destroy({
            where:{
                id: [id]
            }
        })
    }
    async count(){
       const total = Ponto.count()
        return await total
    }
    async update(id,entrada,entradaintervalo,saidaintervalo,saida,hrtrabalhada,hrnormal,hr50,hr100,hrnoturna,falta,justificativa){
        await Ponto.update({entrada:entrada,entradaintervalo:entradaintervalo,saidaintervalo:saidaintervalo,saida:saida,hrtrabalhada:hrtrabalhada,hrnormal:hrnormal,hr50:hr50,hr100:hr100,hrnoturna:hrnoturna,falta:falta,justificativa:justificativa},{where:{id:id}})
    }
}
module.exports =new Pontocontroler