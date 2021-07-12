const bcrypt = require ('bcryptjs')
const localstrategy = require('passport-local').Strategy

bcrypt.hashSync('nomedomeuis')
const usuarioscontroller = require('./app/controlers/usercontroller')
module.exports = function(passport){
    passport.serializeUser((users,done)=>{
       
        done(null,users[0].id)

    })
    
    passport.deserializeUser((id,done)=>{
          
        try {
          done(null,id)
        } catch (err) {
            console.log(err)
            return done(err,null)
            
        }
    })
    passport.use(new localstrategy({

        usernameField:'user',
        passwordField:'password'
    },
    async function(username,password,done) {
      
        try {
            const user =await  usuarioscontroller.findbyname(username)
            console.log('aqui')
            if(!user){ 
                
            return done(null, false)}
            const isvalid = bcrypt.compareSync(password,user[0].password)
            if(!isvalid){ 
            console.log('não é válido')
            console.log(user[0])
            return done(null,user[0].password)
            }
            else{
                console.log('é valido')
                return done(null,user)
            }
             
        } catch (err) {
            console.log(err)
            return done(err,false)
        }
        
    }))
    
}