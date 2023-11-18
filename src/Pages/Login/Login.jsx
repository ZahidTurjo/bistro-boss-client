import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const from= location.state?.from?.pathname || '/'
  
    const {login}=useContext(AuthContext)
useEffect(()=>{
    loadCaptchaEnginge(3); 
},[])

    const handleLogin=(e)=>{
     
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password= form.password.value;
        const captcha= form.captcha.value;
        console.log(email,password);
        if (validateCaptcha(captcha)==true) {
            alert('Captcha Matched');
            login(email,password)
        .then(result=>{
            // console.log(result.user);
            Swal.fire({
                title: "succesfully logged in",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from,{replace:true})
        })
       
        .catch(error=>{
            console.log(error.message);
        })
            
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
        
          <input type="text" name="captcha" placeholder="captcha" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
       
          <input className="btn btn-primary" type="submit" value="Login" />
        
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <div className='divider'></div>
      
      <p className='text-center my-7'>new Here? go to <span className='text-blue-500'><Link to="/signup">SignUp</Link></span></p>
    
    </div>
  </div>
  
  </div>

</div>
    );
};

export default Login;