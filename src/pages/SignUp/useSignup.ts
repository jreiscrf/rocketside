import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser, setAuthenticated } from "../../stores/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../services/firebase";

const useSignup = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const addUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Congratulations!! Account created successfully"),
          dispatch(setUser(value.user.providerData));
        dispatch(setAuthenticated(true));
      })
      .catch((error) => console.log(error));
  };

  return {
    email,
    password,
    dispatch,
    addUser,
  };
};

export default useSignup;
