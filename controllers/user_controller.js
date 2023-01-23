module.exports.sign_out = (req,res)=>{
    req.logout((err)=>{//req#logout requires a callback function
        if(err){console.log(err);return;}
    });//passport provide this func in req when it do serialize, this func do deserialize
    return res.redirect('/signin');
}