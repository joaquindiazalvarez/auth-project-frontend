import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({email:"", password:""})
    const [problem, setProblem] = useState(false)
    const postLogin = (form) => {

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
                navigate('/birthday')}
            else{
                if (result.error === "email") setProblem("email");
                else if (result.error === "password") setProblem("password");
            }
        })
          .catch(error => console.log(error, "error"))
    }
    const handleSubmit = (e) => {
        postLogin(form)
        e.preventDefault()
    };
    const onChangeEmail = (e) => {
        setForm({ ...form, email: e.target.value });
      };
    const onChangePassword = (e) => {
        setForm({ ...form, password: e.target.value });
      };

    return(
            <div>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                  <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                          <div
                            className="card text-black"
                            style={{ borderRadius: "25px" }}
                          >
                            <div className="card-body p-md-5">
                              <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Login
                                  </p>
        
                                  <form
                                    className="mx-1 mx-md-4"
                                    onSubmit={handleSubmit}
                                  >


                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="email submit"
                                          id="form3Example3c"
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          className="form-control form-control-lg"
                                          onChange={onChangeEmail}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example3c"
                                        >
                                          Your Email 
                                        </label>
                                      </div>
                                    </div>
        
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="password"
                                          id="form3Example4c"
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          className="form-control form-control-lg"
                                          onChange={onChangePassword}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example4c"
                                        >
                                          Password 
                                        </label>
                                      </div>
                                    </div>
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
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid"
                                    alt="Sample"
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          );
}