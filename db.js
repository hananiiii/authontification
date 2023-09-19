const mongoose =require("mongoose");

module.exports=()=>{
    const connectionParms ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
          mongoose.connect(process.env.DB,connectionParms);
          console.log('connected to database successfully')
    } catch(error){
           console.log(error);
           console.log("could not connect to database")
    }
}