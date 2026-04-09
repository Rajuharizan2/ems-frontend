import React, { useState } from 'react'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleFirstName(e){
    setFirstName(e.target.value);
  }

  function handleLastName(e){
    setLastName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function saveEmployee(e){
    e.preventDefault();
    const employee = {firstName, lastName, email};
    console.log(employee);
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
                {/* Added 'htmlFor' and matched it with input 'id' */}
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  placeholder='Employee First Name...' 
                  name='firstName' 
                  value={firstName} 
                  className='form-control' 
                  onChange={handleFirstName}
                  autoComplete="given-name"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  placeholder='Employee Last Name...' 
                  name='lastName' 
                  value={lastName} 
                  className='form-control' 
                  onChange={handleLastName}
                  autoComplete="family-name"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">Email Id</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder='Employee Email Id...' 
                  name='email' 
                  value={email} 
                  className='form-control' 
                  onChange={handleEmail}
                  autoComplete="email"
                />
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