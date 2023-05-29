import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import {
  useUserStore,
  fetchUsers,
  getUserById,
  registerUser,
  updateUser,
  setCurrentUser,
} from "../../redux/users.js";
import { app, db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const { user, login, loginwithgoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [userlogin, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...userlogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await login(userlogin.email, userlogin.password);
      const user = result.user;

      if (user !== null) {
        const userData = {
          id: user.uid,
          email: user.email,
          admin: false,
        };
        setUser(userData);
        const userDb = await dispatch(getUserById(user.uid));

        if (!userDb) {
          await dispatch(registerUser(userData));
        }
      }
      navigate("/");
      userlogin.sendEmailVerification();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const result = await loginwithgoogle();
      const user = result.user;
      if (user !== null) {
        const userData = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          admin: false,
          phoneNumber: user.phoneNumber,
        };

        setUser(userData);
        const userDb = await dispatch(getUserById(user.uid));

        if (!userDb) {
          await dispatch(registerUser(userData));
        }
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!userlogin.email) setError("Please enter your email");
    try {
      await resetPassword(userlogin.email);
      setError("We sent you an email with a link to reset password");
    } catch (error) {
      setError(error.message);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <main className={style.main}>
        <article className={style.grid}>
          <div>
            <hgroup>
              <h1>Login</h1>
              {error && <h2 className={style.error}>{error}</h2>}
            </hgroup>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  autoComplete="E-mail"
                  required
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="******"
                  aria-label="Password"
                  autoComplete="current-password"
                  id="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button type="submit" className={style.contrastButton}>
                  Login
                </button>
                <a href="#!" onClick={handleResetPassword}>
                  Forgot Password?
                </a>
              </div>
            </form>
            <div>
              <button className={style.googleButton} onClick={handleGoogleSignIn}>
                Login with Google
              </button>
            </div>
          </div>
          <div>
            <Link to="/register">Sign up</Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default Login;
