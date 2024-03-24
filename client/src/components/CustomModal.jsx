import { FaWindowClose } from "react-icons/fa";

export default function CustomModal(props) {
  return (
      <div className= " border-black border-4 bg-white flex flex-col rounded-md p-2 z-20 text-black w-[500px]">
      <FaWindowClose
        className=" text-2xl rounded-full self-end cursor-pointer"
        onClick={props.closeModal}
      />
      {props.children}
    </div>);
}
