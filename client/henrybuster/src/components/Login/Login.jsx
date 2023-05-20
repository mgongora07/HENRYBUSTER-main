import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import {
  useUserStore,
  fetchUsers,
  getUserById,
  registerUser,
  updateUser,
  setCurrentUser
} from "../../redux/users.js";
import { app, db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  //const state = useUserStore.getState();
  const users = useSelector((state) => state.users);
 // const getUserById = useSelector(state.getUserById);
 // const registerUser = useSelector(state.registerUser);

  //const setUserStore = useUserStore((state) => state.setUser);
  //const getUserById = useUserStore((state) => state.getUserById);
  //const registerUser = useUserStore((state) => state.registerUser);

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
      const result = await loginwithgoogle();
      const user = result.user;
      if (user !== null) {
        const userData = {
          id: user.uid,
          username: user.displayName,
          email: user.email,
          admin: false,
          phoneNumber: user.phoneNumber,
          //photoURL: user.photoURL,
          // otros detalles del usuario
        };
    
        setUser(userData);
        const userDb = dispatch(getUserById("1"));
            console.log(userDb);
        if (!userDb) {
          const userDoc = doc(db, "users", user.uid);
          await setDoc(userDoc, userData);
          console.log("here");
          dispatch(registerUser(userData));
        }
      }
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
