const passport = require('passport')
const session = require('express-session')
const autorizacao = require('./auth')(passport)
var moment = require('moment');
moment().format(); 
require('./app/database')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
var path2 = require('path');
var fs = require('fs')
let helpers = require('handlebars-helpers')();
let Handlebars = require("handlebars");
app.set('view engine','handlebars')
app.use(express.static(path2.join(__dirname,'./public')));
app.use(express.static(path2.join(__dirname,'./views')));
const handlebars = require('express-handlebars');
const { stringify } = require('querystring');
const { DATE } = require('sequelize');
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.use(session({
  secret:'asdfasdfasdfas',
  resave:'false',
  saveUninitialized:false,
  cookie:{maxAge: 30 * 60 * 1000}
}))
app.use(passport.initialize())
app.use(passport.session())
const routes = require('./routes')
app.use(routes)
app.use(express.json)
Handlebars.registerHelper('moment', require('helper-moment'));
Handlebars.registerHelper('ifvalue', function (conditional, options) {
  if (options.hash.value === conditional) {
    return options.fn(this)
  } else {
    return options.inverse(this);
  }
});
Handlebars.registerHelper('dateFormat', require('handlebars-dateformat'))
Handlebars.registerHelper('trimString', function(passedString) {
  var theString = JSON.stringify(passedString).slice(1,11)
  return new Handlebars.SafeString(theString)
});
Handlebars.registerHelper('horasNormais', function(entrada, entradainter, saidainter, saida) {

  
  //let manha = moment().startOf('day').add(moment(entradainter,'hh:mm').diff(moment(entrada,'hh:mm'),'minutes'), 'minutes').format('hh:mm')
  //let tarde = moment().startOf('day').add(moment(saida,'hh:mm').diff(moment(saidainter,'hh:mm'),'minutes'), 'minutes').format('hh:mm')
  
  let manha = moment(entradainter,'hh:mm').diff(moment(entrada,'hh:mm'),'minutes')
  let tarde = moment(saida,'hh:mm').diff(moment(saidainter,'hh:mm'),'minutes')
  let total = (manha+tarde)
  
  
  
  return new Handlebars.SafeString(converterhr(total))
});
Handlebars.registerHelper("somnormal", function(array) {
  let total = 0

  for(i=0;i<=array.length;i++){

  
  let horas =((array[i].hrnormal).slice(0,2)*1)
   
  let minutos =((array[i].hrnormal).slice(3,5))*1
    total  = horas+minutos+total
    
      
    }    
    let h = Math.trunc(total/60)
    let m = total-(h*60)
      if(h<10){
        h='0'+h
      }
        if(m<10){
          m='0'+m
      }
      console.log(array.length) 
      return m+':'+h
      
  });

console.log('logado em http://localhost:3333/')


app.listen(3333)

function converterhr(horas){

let hora = Math.trunc(horas/60)
if (hora<10){
  hora = '0'+hora
}
let minuto = horas-(hora*60)
if(minuto<10){
minuto = '0'+minuto
}

let hrstring = hora+':'+minuto
console.log(hrstring)
return hrstring

}