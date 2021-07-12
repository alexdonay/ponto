//const { where } = require('sequelize/types')
const database = require('../../config/database')
const Funcionario = require('../models/modempregado')
const empresacontroler = require('./empresacontroler')
const empresa = require('./empresacontroler')
class Funcionariocontroler{
    async select(req,res){
        const funcionario = await Funcionario.findAll({
            raw:true,
            nest : true
        })
        
        
    return funcionario

    }
    async selectid(id){
        const [wherefuncionario] = await Funcionario.findAll({
            where: { id: id},
            include:['empresa'],
            raw:true,
            nest : true
        })
        
    return wherefuncionario
    }


    async create(nome,cnpj, cpf,ctps,idempresa,segjustificativa,segentrada,segentradainter,segsaidainter,segsaida,terjustificativa,terentrada,terentradainter,tersaidainter,tersaida,quajustificativa,quaentrada,quaentradainter,quasaidainter,quasaida,quijustificativa,quientrada,quientradainter,quisaidainter,quisaida,sexjustificativa,sexentrada,sexentradainter,sexsaidainter,sexsaida,sabjustificativa,sabentrada,sabentradainter,sabsaidainter,sabsaida,domjustificativa,domentrada,domentradainter,domsaidainter,domsaida){
        await Funcionario.create({nome:nome, cnpj:cnpj, cpf:cpf, ctps:ctps, idempresa:idempresa, segjustificativa:segjustificativa, segentrada:segentrada, segentradainter:segentradainter, segsaidainter:segsaidainter, segsaida:segsaida, terjustificativa:terjustificativa, terentrada:terentrada, terentradainter:terentradainter, tersaidainter:tersaidainter, tersaida:tersaida, quajustificativa:quajustificativa, quaentrada:quaentrada, quaentradainter:quaentradainter, quasaidainter:quasaidainter, quasaida:quasaida, quijustificativa:quijustificativa, quientrada:quientrada, quientradainter:quientradainter, quisaidainter:quisaidainter, quisaida:quisaida, sexjustificativa:sexjustificativa, sexentrada:sexentrada, sexentradainter:sexentradainter, sexsaidainter:sexsaidainter, sexsaida:sexsaida, sabjustificativa:sabjustificativa, sabentrada:sabentrada, sabentradainter:sabentradainter, sabsaidainter:sabsaidainter, sabsaida:sabsaida, domjustificativa:domjustificativa, domentrada:domentrada, domentradainter:domentradainter, domsaidainter:domsaidainter, domsaida:domsaida})
    }
    async destroy(id){
        Funcionario.destroy({
            where:{
                id: [id]
            }
        })
    }
    async count(){
        total = Funcionario.count()
        return await total
    }

     
    async update(
        _id,
        nome,
        cpf,
        ctps,
        idempresa,
        segjustificativa,
        segentrada,
        segentradainter,
        segsaidainter,
        segsaida,
        terjustificativa,
        terentrada,
        terentradainter,
        tersaidainter,
        tersaida,
        quajustificativa,
        quaentrada,
        quaentradainter,
        quasaidainter,
        quasaida,
        quijustificativa,
        quientrada,
        quientradainter,
        quisaidainter,
        quisaida,
        sexjustificativa,
        sexentrada,
        sexentradainter,
        sexsaidainter,
        sexsaida,
        sabjustificativa,
        sabentrada,
        sabentradainter,
        sabsaidainter,
        sabsaida,
        domjustificativa,
        domentrada,
        domentradainter,
        domsaidainter,
        domsaida)
        {
           await Funcionario.update({nome:nome, cpf:cpf, ctps:ctps, idempresa:idempresa, segjustificativa:segjustificativa, segentrada:segentrada, segentradainter:segentradainter, segsaidainter:segsaidainter, segsaida:segsaida, terjustificativa:terjustificativa, terentrada:terentrada, terentradainter:terentradainter, tersaidainter:tersaidainter, tersaida:tersaida, quajustificativa:quajustificativa, quaentrada:quaentrada, quaentradainter:quaentradainter, quasaidainter:quasaidainter, quasaida:quasaida, quijustificativa:quijustificativa, quientrada:quientrada, quientradainter:quientradainter, quisaidainter:quisaidainter, quisaida:quisaida, sexjustificativa:sexjustificativa, sexentrada:sexentrada, sexentradainter:sexentradainter, sexsaidainter:sexsaidainter, sexsaida:sexsaida, sabjustificativa:sabjustificativa, sabentrada:sabentrada, sabentradainter:sabentradainter, sabsaidainter:sabsaidainter, sabsaida:sabsaida, domjustificativa:domjustificativa, domentrada:domentrada, domentradainter:domentradainter, domsaidainter:domsaidainter, domsaida:domsaida},{where:{id:_id}})
            
    
   
            
     
     
    }
    
   
}
module.exports =new Funcionariocontroler