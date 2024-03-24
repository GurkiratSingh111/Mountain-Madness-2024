import { FaWindowClose } from "react-icons/fa";

export default function CustomModal(props) {
  return (
      <div className= "border-black border-4 bg-opacity-50 backdrop-blur-sm flex flex-col rounded-md p-2 absolute z-10 text-white w-[300px]">
      <FaWindowClose
        className=" text-2xl rounded-full self-end cursor-pointer"
        onClick={props.closeModal}
      />
      {props.children}
    </div>);
}
