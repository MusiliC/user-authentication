import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from './redux/actions/userActions';



function Login() {

 const [state, setState] = useState({  
   email: "",
   password: "",
 });

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const user = useSelector((state) => state.users)
 console.log(user);


 const {  email, password } = state;

  const handleInputChange = (e) => {
    setState((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(loginUser(state))
   console.log("Log in successful");
  //  navigate("/profile")
  }

  return (
    <div>
      <div className="container-lg ">
        <div className="text-center mt-4 display-6">Log in</div>
        <div className="row justify-content-center p-3">
          <div className="col-lg-4 border border-dark rounded p-3 ">
            <form action="">
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
            <div className="mt-2">
              <strong>
                <Link to="/register">Create Account?</Link>
              </strong>
            </div>
            <div className="text-center  my-3">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login