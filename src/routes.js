const Router = require('express')
const routes = new Router()
const feriadocontroler = require('./app/controlers/feriadocontroler')
const Empresacontroler = require('./app/controlers/empresacontroler')
const empregadocontroler =require('./app/controlers/empregadocontroler')
const pontocontroler =require('./app/controlers/pontocontroler')
const passport = require('passport')
const user = require('./app/models/user')
const usercontroller = require('./app/controlers/usercontroller')
const session = require('express-session')
require('./auth')(passport)
const xls = require('./servicexls')
const bcrypt = require('bcryptjs')



bcrypt.hashSync('nomedomeuis')
async function auth (req,res,next){
    if(await req.isAuthenticated())return next()
    res.redirect('/login')

}


routes.post('/export',(req,res)=>{
let data = req.body.data
let entrada = req.body.entrada
let entradaintervalo = req.body.entradaintervalo
let saidaintervalo = req.body.saidaintervalo
let saida = req.body.saida
let hrtrabalhada = req.body.hrtrabalhada
let hrnormal = req.body.hrnormal
let hr50 = req.body.hr50
let hr100 = req.body.hr100
let hrnoturna = req.body.hrnoturna
let falta = req.body.falta
let justificativa = req.body.justificativa
let dados = [data,entrada,entradaintervalo,saidaintervalo,saida,hrtrabalhada,hrnormal,hr50,hr100,hrnoturna,falta,justificativa]

xls(dados,dados[0].length)
res.send('Arquivo Gerado com Sucesso '+ dados[0].length)
})


routes.get('/selectferiado', auth,(req,res)=>{
    let feriados = feriadocontroler.select()
    let numero = feriadocontroler.count()
}),
 routes.post('/gravafer',auth, async (req,res)=>{
  
 await  feriadocontroler.create(req.body.data, req.body.descricao)
    feriadocontroler.select().then(function(feriados){
    res.render('feriados', {feriados : feriados})
    })
    res.redirect('/feriados')
})
 routes.get('/excluiferiado:id',auth, (req,res)=>{
    feriadocontroler.destroy(req.params.id)
    feriadocontroler.select().then(function(feriados){
        res.render('feriados', {feriados : feriados})
        
    })
      res.redirect('/feriados')
   
})
 routes.get('/feriados', auth,function(req,res){
    feriadocontroler.select().then(function(feriados){
        
        res.render('feriados', {feriados : feriados})
        
        
    })
})
 routes.post('/feriados', auth,function(req,res){
    res.redirect('/feriados')
        
})
routes.post('/gravaempresa', auth,async (req,res)=>{
    
    await Empresacontroler.create(req.body.razao_social, req.body.cnpj)
    Empresacontroler.select().then(function(empresas){
       res.render('empresas',{empresas: empresas})
       
   })
   
})
routes.get('/excluiempresa:id',auth, (req,res)=>{
    Empresacontroler.destroy(req.params.id)
    Empresacontroler.select().then(function(empresas){
        res.render('empresas', {empresas : empresas})
        
    })
   
   
})
routes.get('/empresas',auth, async function(req,res){
    Empresacontroler.select().then(async function(empresas){
       res.render('empresas', {empresas : empresas})
        
    })
})
routes.post('/gravaempregado',auth, async (req,res)=>{
    
    await empregadocontroler.create(req.body.nome, req.body.cnpj, req.body.cpf, req.body.ctps, req.body.idempresa, req.body.segjustificativa, req.body.segentrada, req.body.segentradainter, req.body.segsaidainter, req.body.segsaida, req.body.terjustificativa, req.body.terentrada, req.body.terentradainter, req.body.tersaidainter, req.body.tersaida, req.body.quajustificativa, req.body.quaentrada, req.body.quaentradainter, req.body.quasaidainter, req.body.quasaida, req.body.quijustificativa, req.body.quientrada, req.body.quientradainter, req.body.quisaidainter, req.body.quisaida, req.body.sexjustificativa, req.body.sexentrada, req.body.sexentradainter, req.body.sexsaidainter, req.body.sexsaida, req.body.sabjustificativa, req.body.sabentrada, req.body.sabentradainter, req.body.sabsaidainter, req.body.sabsaida, req.body.domjustificativa, req.body.domentrada, req.body.domentradainter, req.body.domsaidainter, req.body.domsaida)
    
    empregadocontroler.select().then(function(empregados){
       res.render('empregados',{empregados: empregados})
        
   })
   
   res.redirect('/empregados')
})
routes.get('/empregados',auth,async function(req,res){



    Empresacontroler.select().then(async function(empresas){
        
        res.render('empregados', {empresas:empresas})
        
    })
})
routes.post('/empregados', auth, function(req,res){
   
        res.render('empregados')
        
    


})
routes.get('/excluifuncionario:id',auth, (req,res)=>{
    empregadocontroler.destroy(req.params.id)
    empregadocontroler.select().then(function(empregados){
         res.render('empregados', {empregados : empregados})
        
    })
  
      
    
})
routes.get('/consultafuncionario:id',auth,async (req,res)=>{
   
    await empregadocontroler.selectid(req.params.id).then(function(empregados){
            res.render('consultaempregado', {empregados : empregados})
        
                
        
    })
    
     
    
})
routes.post('/atualizafunc',auth, async(req,res)=>{
  await empregadocontroler.update(
        req.body.id,
        req.body.nome,
        req.body.cpf,
        req.body.ctps,
        req.body.idempresa,
        req.body.segjustificativa,
        req.body.segentrada,
        req.body.segentradainter,
        req.body.segsaidainter,
        req.body.segsaida,
        req.body.terjustificativa,
        req.body.terentrada,
        req.body.terentradainter,
        req.body.tersaidainter,
        req.body.tersaida,
        req.body.quajustificativa,
        req.body.quaentrada,
        req.body.quaentradainter,
        req.body.quasaidainter,
        req.body.quasaida,
        req.body.quijustificativa,
        req.body.quientrada,
        req.body.quientradainter,
        req.body.quisaidainter,
        req.body.quisaida,
        req.body.sexjustificativa,
        req.body.sexentrada,
        req.body.sexentradainter,
        req.body.sexsaidainter,
        req.body.sexsaida,
        req.body.sabjustificativa,
        req.body.sabentrada,
        req.body.sabentradainter,
        req.body.sabsaidainter,
        req.body.sabsaida,
        req.body.domjustificativa,
        req.body.domentrada,
        req.body.domentradainter,
        req.body.domsaidainter,
        req.body.domsaida


        ).then(function(empregados){
            res.render('consultaempregado', {empregados : empregados})
        
                
        
    })
       
       // res.render('consultaempregado')
    
})
routes.get('/ponto', auth, async(req,res) =>{
    res.render('ponto')
})
routes.get('/pesquisa', auth, async(req,res)=>{
    empregadocontroler.select().then(function(empregados){
        res.render('pesquisaempregado', {empregados : empregados})
    })
   
})
routes.get('/incluiponto:id',auth, async(req,res)=>{
     let feriados = await feriadocontroler.select()
     let pontos = await pontocontroler.selectponto(req.params.id)
     
     empregadocontroler.selectid(req.params.id).then(function(empregados){
     
        res.render('ponto', {empregados : empregados, feriados: feriados, pontos:pontos} )
     
       
     })
    
   
    
})
routes.post('/gravaponto',auth,async(req,res)=>{
   let str =''
   
    for(i=0;i<req.body.ultimodia;i++){
    
        
        
       pontocontroler.create(
           req.body.idfunc,
           req.body.data[i],
           req.body.entrada[i],
           req.body.eintervalo[i],
           req.body.sintervalo[i],
           req.body.saida[i],
           req.body.hrtrabalhadas[i],
           req.body.hrnormais[i],
           req.body.hr50[i],
           req.body.hr100[i],
           req.body.hrnoturna[i],
           req.body.faltas[i],
           req.body.justifica[i],
           req.body.competencia
           )
      
        
        
    }   

    
    res.redirect('/consulta/'+req.body.idfunc+'/'+req.body.competencia)
  

})
routes.get('/incluiponto:id',auth, async(req,res)=>{
    let feriados = await feriadocontroler.select()
    empregadocontroler.selectid(req.params.id).then(function(empregados){
       res.render('ponto', {empregados : empregados, feriados: feriados} )
    
     
     
   
  
    })   
})
routes.get('/consultaponto:id',auth,async (req,res)=>{
    let dados = await empregadocontroler.selectid(req.params.id)
    
    await pontocontroler.selectponto(req.params.id).then(function(pontos){
    
    res.render('consultaponto', {pontos : pontos,dados:dados})
    })
})
routes.get('/consulta/:id/:mes/:ano',auth, async(req,res) =>{
    let dados = await empregadocontroler.selectid(req.params.id)
    
    let competencia=req.params.mes+'/'+req.params.ano
    let hrnormais=0
    let hrtrabalhadas=0
    let hr50=0
    let hr100=0
    let hrfaltas=0
    let hrnoturnas=0
    await pontocontroler.selectponto1(req.params.id,competencia).then(function(ponto){
     
        for(y=0;y<ponto.length;y++){
        
        
        hrnormais = hrnormais+parsetominutos(ponto[y].hrnormal)
        hrtrabalhadas =hrtrabalhadas+parsetominutos(ponto[y].hrtrabalhada)
        hr50 = hr50+parsetominutos(ponto[y].hr50)
        hr100 =hr100+parsetominutos(ponto[y].hr100)
        hrfaltas = hrfaltas+parsetominutos(ponto[y].falta)
        hrnoturnas = hrnoturnas+parsetominutos(ponto[y].hrnoturna)
       
      
       }
        
       res.render('consulta',
       {
            ponto:ponto,
            dados:dados, 
            competencia:competencia,
            hrnormais:parsetohoras(hrnormais),
            hrtrabalhadas:parsetohoras(hrtrabalhadas),
            hr50:parsetohoras(hr50),
            hr100:parsetohoras(hr100),
            hrfaltas:parsetohoras(hrfaltas),
            hrnoturnas:parsetohoras(hrnoturnas)

        })
    })
})
routes.post('/updateponto',auth, async(req,res)=>{
    for (let i = 0; i < req.body.id.length; i++) {
        pontocontroler.update(req.body.id[i],req.body.entrada[i],req.body.entradaintervalo[i],req.body.saidaintervalo[i],req.body.saida[i],req.body.hrtrabalhada[i],req.body.hrnormal[i],req.body.hr50[i],req.body.hr100[i],req.body.hrnoturna[i],req.body.falta[i],req.body.justificativa[i],
    );
    
        
    }
    res.send('Ponto Atualizado')
    
})
routes.post('/excluirponto',auth, async(req,res)=>{
    for (let i = 0; i < req.body.id.length; i++) {
        pontocontroler.destroy(req.body.id[i])

    
        
    }
    res.send('Excluído')
    
})
routes.get('/login',async(req,res)=>{
    if(req.query.fail){
        res.render('/login',{message:"Senha ou Usuário inválido"})
        
    }
    else{
      res.render('login')
      
    }
})

routes.post('/login',passport.authenticate('local',{
    successRedirect:'index',
    failureRedirect: 'login?fail=true'
}))   
 
routes.get('/index', async(req,res)=>{res.render('./index')})
routes.get('/usuarios', async(req,res)=>{ 
let usuarios = await usercontroller.select()

res.render('usuarios',{usuarios:usuarios}

)})
routes.get('/excluiusuario:id',async(req,res)=>{
    usercontroller.destroy(req.params.id)
    res.redirect('/usuarios')
})
routes.post('/gravasenha', async(req,res)=>{
    if(req.body.senha == req.body.confsenha){
    usercontroller.create(req.body.login,bcrypt.hash(req.body.senha,10))
    res.send('senha gravada com sucesso')
    
    }
})
routes.get('/cadastrarusuario',async(req,res)=>{
    res.render('cadastrarusuario')
})
routes.get('/alterausuario:id',async(req,res)=>{
    let usuario = await usercontroller.findbyid(req.params.id)
    
    console.log(usuario[0].user)
    res.render('alterarsenha', {usuario:usuario[0].user, id:req.params.id})
})
routes.post('/alterasenha',async(req,res)=>{
   
    if(req.body.senha==req.body.confsenha){
        console.log('aqui')
        usercontroller.update(req.body.id,await bcrypt.hash(req.body.senha,10))
      res.redirect('/usuarios')
    }else{
     res.render({message:'As senhas não combinam'})
    }
})
function parsetohoras(horas){
    let h = Math.trunc(horas/60)
    let m = horas-(h*60)
    if(h<10){
      h='0'+h
    }
    if(m<10){
      m='0'+m
    }
  return(h+':'+m)
}
  function parsetominutos(valor){
        
        let horas = valor.slice(0,2)*60
        
        let minutos = valor.slice(3,5)*1
        
        
        return (horas+minutos)
}
    


module.exports = routes
