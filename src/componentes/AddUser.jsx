import React, { useRef, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from "../context/User/UserContext";

const AddUser = () => {

    const navigate = useNavigate();

    const { getAddUser } = useContext(UserContext)

    const inputUser = useRef();
    const inputDisplayName = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    const du_adduser = () => {
        
        const add_inputUser = inputUser.current.value;
        const add_inputDisplayName = inputDisplayName.current.value;
        const add_inputEmail = inputEmail.current.value;
        const add_inputPassword = inputPassword.current.value;

        if(add_inputUser === '') {
            Swal.fire( 'Empty user field','Please verify it','error')
        }else if(add_inputDisplayName === '') {
            Swal.fire( 'Empty display name field','Please verify it','error')
        }else if(add_inputEmail === '') {
            Swal.fire( 'Empty email field','Please verify it','error')
        }else if(add_inputPassword === '') {
            Swal.fire( 'Empty password field','Please verify it','error')
        }else{

            getAddUser(add_inputUser, add_inputDisplayName, add_inputEmail, add_inputPassword)
            
            navigate('/');
        }
        
    }
  return (
    <div>
      <div className="row margin_0">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <div className="div_title_adduser">Create New User</div>
        <div className="form-floating mb-3">
            <input id="user" ref={inputUser} type="text" className="form-control" placeholder="User" />
            <label htmlFor="user">User</label>
        </div>
        <div className="form-floating mb-3">
            <input id="displayname" ref={inputDisplayName} type="text" className="form-control" placeholder="Display name" />
            <label htmlFor="displayname">Display name</label>
        </div>
          <div className="form-floating mb-3">
            <input
            ref={inputEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
            ref={inputPassword}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
              <button className="btn btn-success width_100 mb-3" onClick={du_adduser}>Add user</button>
          </div>
          <div className="form-floating">
              <Link className="btn btn-dark width_100" to={"/"}>Go back</Link>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AddUser;
