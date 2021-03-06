import React from 'react'
import './App.css'

function Form(props){

const { values, submit, change, disabled, errors } = props
const onSubmit = (e) => {
    e.preventDefault()
     const { email, password } = { values }
     const user = { email: {email}, password: {password}}
    submit(user)
}
const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}

return (
    <form className='container' onSubmit={onSubmit}>
        <h2>Log In</h2>
        <div className='input container'>
            <div className='inputRow'>
                <label for='Username'>Email</label>
                <input
                    value={values.Username}
                    onChange={onChange}
                    name='Username'
                    type='text'
                />
            </div>
            <div className='inputRow'>
                <label for='Password'>
                    Password
                </label>
                <input
                    value={values.Password}
                    onChange={onChange}
                    name='Password'
                    type='password'
                />
            </div>
        

        <div className='submitRow'>
            <input
                className='agreeSubmit'
                type='checkbox'
                name='signinTos'
                checked={values.signinTos}
                onChange={onChange}
            />
        <label for='signinTos'>
            Even though I still can't be bothered to read the  <a href='./home'> terms of service </a> I'll still check this box so we can move on.
        </label>
        </div>
        </div>
        <div className='errors'>
            {errors.Username}
            {errors.Password}
        </div>        
        <button name='submitButton' className='btn' disabled={disabled} >Submit</button>
    </form>
)}
export default Form
