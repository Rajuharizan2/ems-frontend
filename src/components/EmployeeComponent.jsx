import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate, useNavigation } from 'react-router-dom';

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setError] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  
  const navigator = useNavigate();


  function saveEmployee(e){
    e.preventDefault();

    if(validateForm()){
      const employee = {firstName, lastName, email};
      
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator("/employees");
      });
    }



  }

  function validateForm(){
    let valid = true;

    const errorCopy = {...errors};

    if(firstName.trim()){
      errorCopy.firstName = '';
    }else{
      errorCopy.firstName = 'First name is required...';
      valid = false;
    }

    if(lastName.trim()){
      errorCopy.lastName = '';
    }else{
      errorCopy.lastName = "Last name is required...";
      valid = false;
    }

    if(email.trim()){
      errorCopy.email = '';
    }else{
      errorCopy.email = 'Email is required...';
      valid = false;
    }
    setError(errorCopy);

    return valid;
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className='text-center'>Add Employee</h2>
          <div className="card-body">
            
            <form onSubmit={saveEmployee}>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  placeholder='Employee First Name...' 
                  name='firstName' 
                  value={firstName} 
                  className={`form-control ${errors.firstName ? 'is-invalid': '' }` }
                  onChange={(e)=>setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  placeholder='Employee Last Name...' 
                  name='lastName' 
                  value={lastName} 
                  className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                  onChange={(e)=>setLastName(e.target.value)}
                  autoComplete="family-name"
                />
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">Email Id</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder='Employee Email Id...' 
                  name='email' 
                  value={email} 
                  className={`form-control ${errors.email ? 'is-invalid': ''}`}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>

              <button className='btn btn-success' type='submit'>Submit</button>
            </form>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default EmployeeComponent