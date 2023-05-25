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
  setCurrentUser
} from "../../redux/users.js";
import { app, db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {


   const { user, login, loginwithgoogle, resetPassword } = useAuth();
   const navigate = useNavigate();

  /* useEffect(() => {
     if (user) {
       navigate("/");
     } else {
       navigate("/login");
     }
   }, [navigate, user]);*/

   if (user) {
     return <Navigate to='/' />;
   }

  const dispatch = useDispatch();
  //const state = useUserStore.getState();
  const users = useSelector((state) => state.users);
 // const getUserById = useSelector(state.getUserById);
 // const registerUser = useSelector(state.registerUser);

  //const setUserStore = useUserStore((state) => state.setUser);
  //const getUserById = useUserStore((state) => state.getUserById);
  //const registerUser = useUserStore((state) => state.registerUser);

   const [userlogin, setUser] = useState({
     email: "",
     password: "",
   });

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    //console.log(name, value);
    setUser({ ...userlogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    //console.log(user);
    try {
      await login(userlogin.email, userlogin.password);
      navigate("/");
      userlogin.sendEmailVerification();
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
        const userDb = await dispatch(getUserById(user.uid));
          //console.log(userDb);
     
        if (!userDb) {
          //console.log("here");
          //const userDoc = doc(db, "users", user.uid);
          //console.log(userDoc);
          //await setDoc(userDoc, userData);
          
          await dispatch(registerUser(userData));
          //console.log(save);
        }
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

const handleResetPassword = async () => {
  if(!userlogin.email) setError("Please enter your email");
  try {
   await resetPassword(userlogin.email);
   setError("We sent you an email with a link to reset password")
  } catch (error) {
    setError(error.message);
  }
}

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
                  <a href="#!" onClick={handleResetPassword}>Forgot Password?</a>
                </div>
              </form>
              <div>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
              </div>
            </div>
            <div>
              {" "}
              <Link to='/register'>Sign up</Link>
            </div>
          </article>
        </main>
      </>
    );

};

export default Login;
