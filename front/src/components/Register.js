import React,{useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useNavigate} from 'react-router-dom';
import { createUser } from './redux/actions/userActions';


//import { useNavigate } from "react-router-dom";



function Register() {

  const [state, setState] = useState({
    username: "",
    phone:"",
    email: "",    
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state) => state.users)
  console.log(user);
   

  const {username, phone, email, password} = state;
    

   const handleInputChange = (e) => {
     setState((v) => ({ ...v, [e.target.name]: e.target.value }));
   };

     const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(createUser(state))
       console.log(user.user.username + "welcome to the system");
       navigate('/profile')
       
     };


  return (
    <div>
      <div className="container-lg">
        <div className="text-center mt-4 display-6">Create Account</div>
        <div className="row justify-content-center my-3 p-3">
          <div className="col-lg-4 border border-dark rounded p-4">
            <form action="">
              <label htmlFor="email" className="form-label">
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
                onChange={handleInputChange}
              />
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                type="number"
                name="phone"
                className="form-control"
                value={phone}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={handleInputChange}
              />

              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={handleInputChange}
              />
            </form>
            <div className="text-center  my-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register