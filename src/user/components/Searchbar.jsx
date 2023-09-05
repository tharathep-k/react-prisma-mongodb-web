import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { searchEmail } from "../slice/user-slice";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchEmail({ value: search }));
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label for="search">searchbar</label>
      <input
        id="search"
        name="search"
        type="text"
        value={search}
        onChange={handleOnChange}
        className="w-[40vw] h-[36px] pl-4 border border-black rounded-lg"
        placeholder="Search by email"
      />
    </div>
  );
}
