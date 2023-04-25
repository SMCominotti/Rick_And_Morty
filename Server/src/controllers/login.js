const users = require('../utils/users');

const login= (req, res)=>{
    const{email, password} = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password ) // email y password son los que recibi por query

   // return userFound
   //  res.status(200).json({access:true})
   // : res.status(200).json({access:false}) //deberia ser 404 pero la consigna dice 200
//}

    // tambien lo podria poner con if asi:
    if(userFound) return res.status(200).json({access:true}) 
    return res.status(404).json({access:false})
 } // hay que tratar de no usar else cuando no es necesario, es mala practica




module.exports= {
    login
};