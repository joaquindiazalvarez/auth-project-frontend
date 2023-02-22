import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/input.js'
import { Wrapper } from '../components/div_wrapper.js'

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
    e.preventDefault();
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
  if (testemail === true && setUsed===false) {
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
      <Wrapper text="Register">
        <form
          className="mx-1 mx-md-4"
          onSubmit={handleSubmit}
        >
          <Input color={colorName} onChange={onChangeName} text="Name" type="name submit"/>
          <Input color={colorEmail} onChange={onChangeEmail} text="Your Email(enter a valid one)" type="email submit"/>
          <Input color={colorPassword} onChange={onChangePassword} text="Password (numbers, uppercase and lowercase. 8 or more characters)" type="password"/>
          <Input color={colorConfirm} onChange={onChangeConfirm} text="Repeat your password" type="password"/>
          <Input color={colorBirthdate} onChange={onChangeBirthdate} text="Birthdate" type="date"/>

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
      </Wrapper>);
}