import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputErrorMessage from "../components/InputMessageError";

import LoginInput from "../components/LoginInput";
import validateLogin from "../components/validator/validate-login";

const initialLogin = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(initialLogin);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    // console.log(e);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const result = validateLogin(input);
      console.dir(result);
      if (result) {
        return setError(result);
      }
      setError({});

      navigate("/showlist");
    } catch (error) {
      console.log(error);
      alert("Login false !!");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="w-[40vw] h-[40vh] border-2 border-black flex flex-col items-center justify-center">
        <form
          className="flex flex-col items-center gap-6"
          onSubmit={handleSubmit}
        >
          <div>Login</div>
          <div className="flex flex-col gap-1">
            <div>
              <LoginInput
                name="email"
                type="text"
                placeholder="Email"
                value={input.email}
                onChange={handleChangeInput}
              />
              {error.email && <InputErrorMessage message={error.email} />}
            </div>
            <div>
              <LoginInput
                name="password"
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChangeInput}
              />
            </div>
            {error.password && <InputErrorMessage message={error.password} />}
          </div>
          <button className="bg-green-600 text-white w-[68px] h-[36px] rounded-md ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
