import { FaWindowClose } from "react-icons/fa";

export default function CustomModal(props) {
  return (
      <div className= " translate-y-1/2 border-black border-4 bg-white fixed top-36 flex flex-col rounded-md p-2 z-20 text-white w-[300px]">
      <FaWindowClose
        className=" text-2xl rounded-full self-end cursor-pointer"
        onClick={props.closeModal}
      />
      {props.children}
    </div>);
}
