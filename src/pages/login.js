import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../App";
import { Input } from "../components/input.js"
import { Wrapper } from "../components/div_wrapper.js"

export const Login = () =>{
    const { setToken } = useContext(tokenContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({email:"", password:""})
    const [problem, setProblem] = useState(false)
    const postLogin = (form) => {
        /*this fetches post information and login, setting token 
        in session storage and in tokenContext*/
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(form);
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch(process.env.REACT_APP_BACKEND_URL + "/auth/login/", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.token){
                sessionStorage.setItem("token", result.token)
                setToken(result.token)
                navigate('/birthday')}
            else{
                if (result.error === "email") setProblem("email");
                else if (result.error === "password") setProblem("password");
            }
        })
          .catch(error => console.log(error, "error"))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        postLogin(form)
    };
    const onChangeEmail = (e) => {
        setForm({ ...form, email: e.target.value });
      };
    const onChangePassword = (e) => {
        setForm({ ...form, password: e.target.value });
      };

    return(
      <Wrapper text="Login">
        <form
          className="mx-1 mx-md-4"
          onSubmit={handleSubmit}
        >
          <Input color="form-control form-control-lg" onChange={onChangeEmail} text="Your Email" type="email submit"/>
          <Input color="form-control form-control-lg" onChange={onChangePassword} text="Password" type="password"/>
          
          {problem && problem === "email" && <h5 className="text-danger">Wrong email</h5>}
          {problem && problem === "password" && <h5 className="text-danger">Wrong password</h5>}
          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </Wrapper>);
}