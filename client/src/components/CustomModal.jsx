import { FaWindowClose } from "react-icons/fa";

export default function CustomModal(props) {
  return (
      <div className="bg-[#343a47] bg-opacity-50 backdrop-blur-sm flex flex-col rounded-md p-2 absolute z-10 text-white w-[300px]">
      <FaWindowClose
        className=" text-2xl rounded-full self-end cursor-pointer hover:text-red-600"
        onClick={() => {
          props.setTrigger(false);
        }}
      />
      {props.children}
    </div>);
}
