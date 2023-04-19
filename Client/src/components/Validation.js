const validate = (form) => {
  //recive el formulario q quiere validar
  const errors = {};

  if(!form.email){
  errors.email= "Por favor, completa este campo";
  }
  if (form.email.length > 35){
  errors.email="No puede superar los 35 caracteres";
  }
  if (!/\S+@\S+\.\S+/.test(form.email)){
  errors.email="Email invalido";
  } else {
         errors.email= '';
}
      
  const passwordRegex = /^(?=.*\d).{6,10}$/ // Expresión regular para verificar la contraseña
  
  if (!passwordRegex.test(form.password)) { // Si la contraseña no cumple con la expresión regular
  errors.password= 'Su contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres';
  } else{
        errors.password='';
  }
  return errors;
}
  



  export default validate
  