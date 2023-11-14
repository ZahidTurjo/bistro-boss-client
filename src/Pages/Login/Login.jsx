import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const captchaRef=useRef(null)
    const[disabled,setDisabled]=useState(true)
    const {login}=useContext(AuthContext)
useEffect(()=>{
    loadCaptchaEnginge(3); 
},[])

    const handleLogin=(e)=>{
     
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password= form.password.value;
        
        console.log(email,password);
        login(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
       
    
        
    }
    const captchaValidate=()=>{
        const captcha =captchaRef.current.value;
        console.log(captcha);
        if (validateCaptcha(captcha)==true) {
           alert('Captcha Matched');
            setDisabled(false)
        }
   
        else {
           alert('Captcha Does Not Match');
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
        
          <input type="text" ref={captchaRef} name="captcha" placeholder="captcha" className="input input-bordered" required />
          <button onClick={captchaValidate}>validate</button>
        </div>
        <div className="form-control mt-6">
       
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        
        </div>
      </form>

      <p className='text-center my-7'>new Here? go to <span className='text-blue-500'><Link to="/signup">SignUp</Link></span></p>
    </div>
  </div>
  </div>
</div>
    );
};

export default Login;