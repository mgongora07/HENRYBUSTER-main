import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginwithgoogle } = useAuth();
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
      await login(user.email, user.password);
      navigate("/");
      user.sendEmailVerification();
    } catch (error) {
      //console.log(error.message);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await loginwithgoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <main className='container main'>
        <article className='grid'>
          <div>
            <hgroup>
              <h1>Login</h1>
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
                  Login
                </button>
              </div>
            </form>
            <div>
              <button onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
          </div>
          <div></div>
        </article>
      </main>
    </>
  );
};

export default Login;
