

module.exports.signUp = (req,res)=>{
    return res.render('signUp',{title:'Sign Up'})
}

module.exports.signIn = (req,res)=>{
    return res.render('signIn',{title:'Sign In'})
}