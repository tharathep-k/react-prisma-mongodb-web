import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";

export default function UserCard() {
  return (
    <div className="w-[40vw] h-[10vh] border-2 border-orange-600 my-2 flex justify-evenly items-center">
      <div className="w-[10vw] h-[5vh] border border-black px-2 py-2">name</div>
      <div> : </div>
      <div className="w-[20vw] h-[5vh] border border-black px-2 py-2">
        email
      </div>
      <div className="w-[2.2vw] h-[2.2vh] mb-4">
        <img src={editIcon} alt="edit icon" />
      </div>
      <div className="w-[2vw] h-[2vh] mb-4">
        <img src={deleteIcon} alt="delete icon" />
      </div>
    </div>
  );
}
