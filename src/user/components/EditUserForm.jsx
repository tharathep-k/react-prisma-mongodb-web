import { useState } from "react";
import { useDispatch } from "react-redux";
import InputErrorMessage from "../../components/InputMessageError";

import validateEditUser from "../../components/validator/validate-edituser";
import { editUser } from "../slice/user-slice";
import EditUserInput from "./EditUserInput";

const initialEditUser = {
  email: "",
  password: "",
  confirmpassword: "",
};

export default function EditUserForm({ id, onClose }) {
  const [input, setInput] = useState(initialEditUser);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateEditUser(input);
      if (result) {
        return setError(result);
      }

      const data = { ...input, id };
      console.log(data);

      await dispatch(editUser(data)).unwrap();
      setError({});
      alert("Edit complete !!");
      onClose();
      window.location.reload();
    } catch (error) {
      alert("Incorrect !!");
    }
  };

  return (
    <div className="h-[21rem] mt-2 flex flex-col gap-4 ">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
        <div>
          <EditUserInput
            name="email"
            type="text"
            value={input.email}
            placeholder="Email"
            onChange={handleOnChangeInput}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <div>
          <EditUserInput
            name="password"
            type="password"
            value={input.password}
            placeholder="Password"
            onChange={handleOnChangeInput}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div>
          <EditUserInput
            name="confirmpassword"
            type="password"
            value={input.confirmpassword}
            placeholder="Confirm password"
            onChange={handleOnChangeInput}
          />
          {error.confirmpassword && (
            <InputErrorMessage message={error.confirmpassword} />
          )}
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-green-600 text-white w-[68px] h-[36px] rounded-md ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
