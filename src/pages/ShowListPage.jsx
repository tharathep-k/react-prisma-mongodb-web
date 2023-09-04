import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../components/slice/auth-slice";
import UserCard from "../user/UserCard";

export default function ShowListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogout = async () => {
    await dispatch(logout()).unwrap();
    navigate("/");
  };
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-2">
      <div className="w-full flex justify-between">
        <button className="bg-red-500 text-white w-[68px] h-[36px] rounded-md invisible">
          Logout
        </button>
        <div className="flex flex-col">
          <label for="search">searchbar</label>
          <input
            id="search"
            name="search"
            type="text"
            className="w-[40vw] h-[36px] pl-4 border border-black rounded-lg"
            placeholder="Search by email"
          />
        </div>
        <button
          onClick={handleOnLogout}
          className="bg-red-500 text-white w-[68px] h-[36px] rounded-md mr-4 mt-2"
        >
          Logout
        </button>
      </div>
      <div className="w-[50vw] h-[90vh] border-2 border-blue-600 flex flex-col items-center">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
