import { useState} from "react";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "",email: "", password: "", birthdate: ""});
  const [error, setError] = useState(false);
  const [used, setUsed] = useState()
  const [success, setSuccess] = useState(false);
  const [confirm, setConfirm] = useState();
  const postRegister = (form) => {
    //this fetch post information contained in form variable
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(form);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/register/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }
  
  const validateEmail = (email) => {
    //This fetch checks if email is in use by asking the backend
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({email: email});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/validate/", requestOptions)
      .then(response => response.json())
      .then(result => setUsed(result.email_in_use))
      .catch(error => console.log('error', error));
      }
      
  const handleSubmit = (e) => {
    /*this function ask if form is well filled
    redirects to login if is ok
    show error if its wrong*/
    if (form.name !== "" && testemail === true && testpassword === true && form.password !== "" &&  form.password === confirm && form.birthdate !== "" && used === false) {
      postRegister(form);
      setError(false)
      setSuccess(true);
      console.log(form)
      setTimeout(()=>{
        navigate('/login');
      }, 2000)
    } else {
      setError(true);
    }
    e.preventDefault();
  };
  const onChangeName = (e) => {
    setForm({...form, name: e.target.value});    
  }
  
  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };
  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };
  const onChangeBirthdate = (e) => {
    setForm({ ...form, birthdate: e.target.value})
  }
  
  //regex for entering valid email and passwords
  const regexemail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const testemail = regexemail.test(form["email"]);
  const regexpassword = /^(?=.*[A-Z])(?=.*[!@#$&*.+-_])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
  const testpassword = regexpassword.test(form["password"]);
  
  //next chunk of code evaluates if
  //each input on form is valid
  //and paint the input of red or green
  
  let green = "form-control form-control-lg border-4 border-success"
  let red = "form-control form-control-lg border-4 border-danger"
  let colorName = "";
  if (form["name"] !== "") {
    colorName = green;
  } else {
    colorName = red;
  }
  let colorEmail = "";
  if (testemail === true) {
    validateEmail(form.email);
    colorEmail = green;
  } else colorEmail = red;
  
  let colorPassword = "";
  if (testpassword === true) {
    colorPassword = green;
  } else {
    colorPassword = red;
  }
  let colorConfirm = "";
  if (form["password"] !== "" &&  form["password"] === confirm) {
    colorConfirm = green;
  } else {
    colorConfirm = red;
  }
  let colorBirthdate = "";
  if (form["birthdate"] !== "") {
    colorBirthdate = green;
  } else {
    colorBirthdate = red;
  }
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
                                    Register
                                  </p>
        
                                  <form
                                    className="mx-1 mx-md-4"
                                    onSubmit={handleSubmit}
                                  >
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="name submit"
                                          id="form3Example4c"
                                          className={colorName}
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          onChange={onChangeName}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example4c"
                                        >
                                          Name
                                        </label>
                                      </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="email submit"
                                          id="form3Example3c"
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          className={colorEmail}
                                          onChange={onChangeEmail}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example3c"
                                        >
                                          Your Email <b>(enter a valid one)</b>
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
                                          className={colorPassword}
                                          onChange={onChangePassword}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example4c"
                                        >
                                          Password <b>(numbers, uppercase and lowercase. 8 or more characters)</b>
                                        </label>
                                      </div>
                                    </div>
        
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="password"
                                          id="form3Example4cd"
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          className={colorConfirm}
                                          onChange={onChangeConfirm}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example4cd"
                                        >
                                          Repeat your password
                                        </label>
                                      </div>
                                    </div>
  
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <div className="form-outline flex-fill mb-0">
                                        <input
                                          type="date"
                                          id="birthday"
                                          //This must be replaced, its not OK
                                          style={{boxShadow: "inset 0 0 0 #ddd"}}
                                          className={colorBirthdate}
                                          onChange={onChangeBirthdate}
                                        />
                                        <label
                                          className="form-label"
                                          htmlFor="form3Example4cd"
                                        >
                                          Birthdate
                                        </label>
                                      </div>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-lg">
                                        Register
                                      </button>
                                    </div>
                                  </form>
                                  {success && <h2 className="text-success text-center">Sucess!</h2>}
                                  {error && <h5 className="text-danger text-center">Error at filling form</h5>}
                                  {used && <h5 className="text-danger text-center">Email in use</h5>}
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