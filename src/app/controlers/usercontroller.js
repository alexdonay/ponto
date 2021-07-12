const User = require('../models/user')
class usercontroller{

    async findbyid(id){
        const user = await User.findAll({
            raw:true,
            nest:true,
            where:{id:id}})
        return user
    }


    async findbyname(username){
        const users = await User.findAll({
            raw:true,
            nest:true,
            where:{user:username}})
        return users
    }
    async select(req,res){
        const user = await User.findAll({
            raw:true,
            nest : true
        })
      
        
    return user

    }
    async create(user, password){
        await User.create({user: user, password: password})
    }
    async update(id, password){
        await User.update({password: password},{where:{id:id}})
    }
    async destroy(id){
        User.destroy({
            where:{
                id: [id]
            }
        })
    }
} 
module.exports = new usercontroller