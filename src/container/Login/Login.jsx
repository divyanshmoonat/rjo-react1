import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  if (user.isLoggedIn) {
    navigate("/");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const credentails = {
      username: "mor_2314",
      password: "83r5^_",
    };
    dispatch(loginUser(credentails));
  };
  return (
    <div className="login-container">
      <h2>Please enter your credentails below to login</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default Login;
