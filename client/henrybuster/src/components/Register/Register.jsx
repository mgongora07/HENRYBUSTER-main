import { useState } from "react";
//import { Navbar } from "../../components";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
//import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

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
      await signup(user.email, user.password);
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
