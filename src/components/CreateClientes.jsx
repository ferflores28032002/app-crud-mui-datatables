import { Link, useNavigate } from "react-router-dom";
import { useForms } from "../hooks/useForms";
import { useClientes } from "../store/slices/hooks/useClientes";
import { HiUsers } from "react-icons/hi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const CreateClientes = () => {
  const {
    formState,
    onInputChange,
    onResetForm,
    setFormState,
    name,
    numeroDocumento,
    direction,
    telephone,
  } = useForms({ name: "", numeroDocumento: "", telephone: "", direction: "" });
  const { addClientes } = useClientes();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    addClientes(formState);
    navigate("/");
  };

  return (
    <div className="flex relative justify-center  items-center min-h-screen">
      <Link
        to="/"
        className="absolute animate-pulse text-4xl text-purple-500 left-2 lg:left-10 top-6 lg:top-10"
      >
        <BsFillArrowLeftCircleFill />
      </Link>
      <form
        onSubmit={handlesubmit}
        className="w-[30rem] border p-10 shadow-2xl rounded-xl"
      >
        <div className="text-5xl text-purple-500 flex justify-center">
          <HiUsers />
        </div>
        <input
          className="mt-4 w-full rounded border-gray-300 focus:outline-1 border-1 text-sm placeholder:text-sm"
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={onInputChange}
        />

        <input
          className="mt-4 w-full rounded border-gray-300 focus:outline-1 border-1 text-sm placeholder:text-sm"
          type="text"
          placeholder="Numero Documento"
          name="numeroDocumento"
          value={numeroDocumento}
          onChange={onInputChange}
        />
        <input
          className="mt-4 w-full rounded border-gray-300 focus:outline-1 border-1 text-sm placeholder:text-sm"
          type="tel"
          placeholder="Telephone"
          name="telephone"
          value={telephone}
          onChange={onInputChange}
        />
        <input
          className="mt-4 w-full rounded border-gray-300 focus:outline-1 border-1 text-sm"
          type="text"
          placeholder="Direction"
          name="direction"
          value={direction}
          onChange={onInputChange}
        />

        <div className="block mt-4">
          <button className="py-3 text-sm w-full rounded-lg bg-purple-500 text-white font-semibold text-center">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};
