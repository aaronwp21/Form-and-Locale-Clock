import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Results from './Results';

const userSchema = yup.object().shape({
  username: yup.string().min(2).max(20).required(),
  email: yup.string().email().max(50).required(),
  age: yup.number().integer().positive().required()
}).required();

function Form() {
  const [results, setResults] = useState({
    username: '',
    email: '',
    age: 0,
    submitted: false
  });

  const {register, formState: {errors}, reset, handleSubmit} = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema)
  });
  
  const onSubmit = (data) => {
    setResults({
      username: data.username.toLowerCase().trim(),
      email: data.email,
      age: data.age,
      submitted: true
    })
  };

  return (
    <>
      <form className='main-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input {...register("username")} type="text" name='username' id='username' />
        <label style={errors.username? {display: 'initial'} : {display: 'none'}} htmlFor="username" className='error-label'>
          {errors.username ? errors.username.message : ''}
        </label>
  
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="text" name='email' id='email' />
        <label style={errors.email? {display: 'initial'} : {display: 'none'}} htmlFor="email" className='error-label'>
          {errors.email ? errors.email.message : ''}
        </label>
  
        <label htmlFor="age">Age</label>
        <input {...register("age")} type="text" name='age' id='age' />
        <label style={errors.age? {display: 'initial'} : {display: 'none'}} htmlFor="age" className='error-label'>
          {errors.age ? (errors.age.type === "typeError" ? 'Please enter a number' : errors.age.message) : ''}
        </label>
  
        <div className='btn-wrapper'>
          <button type='submit'>Submit</button>
          <button type='reset' onClick={reset}>Reset</button>
        </div>
      </form>

      {results.submitted ? <Results username={results.username} email={results.email} age={results.age} /> : ''}
    </>
  )
}

export default Form