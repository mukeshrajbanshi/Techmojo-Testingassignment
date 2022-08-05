
import React, {useState} from 'react';

function Login() {
  const [loggedIn, setLoggedIn ]= useState(false);
  const [formdata, setFormData] = useState({
    emailId: "",
    passWord: ""
  })

  const [error, setError] = useState({
    emailId: "",
    passWord: ""
  });

  const handleChange = (e) => {
    let newFormData = {...formdata};
    switch(e.target.name){
      case 'emailId':
        newFormData['emailId'] = e.target.value;
        break;
      case 'passWord':
        newFormData['passWord'] = e.target.value;
        break;
      default:
        console.log('error');
        console.log(loggedIn);

    }
    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {...error};
    let isFormValid = true;


    if(formdata.emailId===""){
      newError['emailId'] = "Required";
      isFormValid = false;
    }
    else if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formdata.emailId))){
      newError['emailId'] = "Enter the email correctly";
      isFormValid = false;
    }
    else{
      newError['emailId'] = "";
    }

    if(formdata.passWord===""){
      newError['passWord'] = "Required";
      isFormValid = false;
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formdata.passWord))){
      newError['passWord'] = "Password requirements doesn't match";
      isFormValid = false;
    }
    else{
      newError['passWord'] = "";
    }
    setError(newError);

    if(isFormValid){
      setLoggedIn(true);
    }
  }

  return (
    <div>
      <div>
        <div>Login Form</div>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div >
            <input type="text" placeholder="Email Id"  name="emailId" value={formdata['emailId']} onChange={handleChange} />
            {error.emailId!=="" && <span>{error.emailId}</span>}
          </div>
          <br/>
          <br/>
          <div >
            <input type="password" placeholder="Password" name="passWord" value={formdata['passWord']} onChange={handleChange} />
          </div>
          <div >
            {error.passWord!=="" && <span>{error.passWord}</span>}
          </div>
          <br/>
          <br/>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

