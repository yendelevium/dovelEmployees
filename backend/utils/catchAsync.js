// Wrapper function for handling errors
module.exports = func =>{
    return (req,res,next)=>{
        func(req,res,next)
            .catch(err=>next(err))
    }
}