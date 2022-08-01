import React from "react";
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (!values.password) errors.password = 'Required'; 
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors; 
    }
  });
  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="label">Email:</label>
        <input id="emailField" className="txtbox" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" className="error">{formik.errors.email}</div> : null }
        <label className="label">Password:</label>
        <input id="pswField" className="txtbox" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" className="error">{formik.errors.password}</div> : null }
        <div className="button">
          <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
