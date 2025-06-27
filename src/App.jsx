// import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const { 
    register, 
    handleSubmit,
    formState: {isSubmitting , errors }
  } = useForm();

  const delay=(d) =>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve();
      }, d*1000);
    });
  }
  const onSubmit =  async (data) => {
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let res = await r.text();
    console.log(data,res);
  }
  return (
    <>
    {isSubmitting && <div className="loading">Submitting...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            {...register("username", { required: true, minLength: 2, maxLength: 20 })}
            id="username"
          /> <br />
          {errors.username && <span>This field is required and must be 2-20 characters.</span>} <br />
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            {...register("password", { required: true, minLength: 6, maxLength: 100 })}
            id="password"
          /> <br />
          {errors.password && <span>This field is required and must be 6-100 characters.</span>} <br />
          <input disabled={isSubmitting} type="submit" value="Login" />
          {errors.form && <span className="error">{errors.form.message}</span>}
        </form>
      </div>
    </>
  )
}

export default App
