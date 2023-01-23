
const Users = require('../models/users');

module.exports.home= (req,res)=>{
    return res.render('home.ejs',{title:"Home"});
}

module.exports.signUp = (req,res)=>{
     if(req.isAuthenticated()){
    return res.redirect('/');
  }
    return res.render('signUp',{title:'Sign Up'})
}

module.exports.signIn = (req,res)=>{
    //if user is authenticated than user will not access signup/signin page
    if(req.isAuthenticated()){
        return res.redirect('/');
      }
    return res.render('signIn',{title:'Sign In'})
}

module.exports.create_account = async (req,res)=>{
    // console.log(req.body);
   try {
        const user = await Users.findOne({email:req.body.email});

         if(!user){//we have to create an document in Users model for this user in mongodb
            if(req.body.password == req.body["confirm-password"]){//valid(follow variable rules) variable work with dot notation work on

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

// //create session or create login time
// module.exports.create_session_by_local_auth = async (req,res)=>{
//   if(req.isAuthenticated()){
//     return res.redirect('/home');
//   }
//   return res.redirect('back');
// }



module.exports.go_to_home = async (req,res)=>{
 
    return res.redirect('/');
  

}