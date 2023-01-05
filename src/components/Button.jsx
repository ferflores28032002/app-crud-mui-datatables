import { HiOutlineUserPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Button = ({ title, handleClick, ruta }) => {
  return (
    <Link
      to={ruta}
      className="px-2 lg:px-4 py-3 w-28 lg:w-32 rounded-lg text-white text-sm bg-purple-500 hover:bg-purple-700 flex gap-1 justify-center"
      onClick={handleClick}
    >
      <HiOutlineUserPlus className="text-xl" />
      {title ? title : "Boton"}
    </Link>
  );
};
