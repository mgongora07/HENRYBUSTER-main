import { useState } from "react";
//import { Navbar } from "../../components";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
//import "./register.css";
import {
  useUserStore,
  fetchUsers,
  getUserById,
  registerUser,
  updateUser,
  setCurrentUser,
} from "../../redux/users.js";
import { useDispatch } from "react-redux";

const Register = () => {
  const [user, setUser] = useState({
    namecomplete:"",
    username:"",
    email: "",
    phonenumber: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    //console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    //console.log(user);
    try {
      const userCredential = await signup(user.email, user.password);
      const user2 = userCredential.user;
      const userData = {
        id: user2.uid,
        username: user.username,
        name: user.namecomplete,
        phoneNumber: user.phonenumber,
        email: user.email,
        admin: false,
        // otros detalles del usuario
      };
      dispatch(registerUser(userData));
      navigate("/");
      //await verifyEmail();
    } catch (error) {
      //console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <main className='container main'>
        <article className='grid'>
          <div>
            <hgroup>
              <h1>Sign in</h1>
              {error && <h2>{error}</h2>}
            </hgroup>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  name='namecomplete'
                  placeholder='Name'
                  aria-label='Name'
                  autoComplete='Name'
                  required
                  id='namecomplete'
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type='text'
                  name='email'
                  placeholder='E-mail'
                  aria-label='E-mail'
                  autoComplete='E-mail'
                  required
                  id='email'
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  aria-label='Username'
                  autoComplete='Username'
                  required
                  id='username'
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='phonenumber'
                  placeholder='Phone Number'
                  aria-label='Phone Number'
                  autoComplete='Phone Number'
                  required
                  id='phonenumber'
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  placeholder='******'
                  aria-label='Password'
                  autoComplete='current-password'
                  id='password'
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button type='submit' className='contrast'>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </article>
      </main>
    </>
  );
};

export default Register;
