import React, { useState } from 'react'
import validate from './Validation'
import './Form.css'

const Form = ({login}) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
//se inicializa como un objeto vacio.

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    login(form);
  }


  return (
     <div className="container">
        <form onSubmit={handleOnSubmit} className="login-form">
            <label htmlFor='email'>Email:</label>
            <input className='form-input' name='email' type='email' placeholder='Ingrese su mail' value={form.email} onChange={handleOnChange}  />
            {errors.email && <p>{errors.email}</p>} 
            <label htmlFor='password'>Password: </label>
            <input className='form-input' name='password' type='password' placeholder='Ingrese su contraseña' value={form.password} onChange={handleOnChange}  />
            {errors.password && <p>{errors.password}</p>}
            <button className='form-button' disabled={!form.email || !form.password || errors.email || errors.password}> Submit </button>
         </form>
        </div>
     )
}

//htmlFor referencia al input con el label. El Htmlfor de label tiene que ser igua al name del input
export default Form

//  {errors.email && <p>{errors.email}</p>}  si existe un error, mostramelo en un <p> 
