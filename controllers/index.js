
const Users = require('../models/users');

module.exports.signUp = (req,res)=>{
    return res.render('signUp',{title:'Sign Up'})
}

module.exports.signIn = (req,res)=>{
    return res.render('signIn',{title:'Sign In'})
}

module.exports.create_account = async (req,res)=>{
    console.log(req.body);
   try {
        const user = await Users.findOne({email:req.body.email});

         if(!user){//we have to create an document in Users model for this user in mongodb
            if(req.body.password == req.body["confirm-password"]){

                await  Users.create({
                    email:req.body.email,
                    password:req.body.password,
                    name:req.body.name
                });
                return res.redirect('/signin');
            }else{
             return res.redirect('/signup');              
            }
         }
         return res.redirect('/signin');

   } catch (error) {
    console.log(error,'while creating user account');
   }
}