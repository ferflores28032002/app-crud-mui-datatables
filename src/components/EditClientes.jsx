import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForms } from "../hooks/useForms";
import { useClientes } from "../store/slices/hooks/useClientes";

export const EditClientes = () => {
  const {
    setFormState,
    formState,
    onInputChange,
    onResetForm,
    name,
    numeroDocumento,
    telephone,
    direction,
  } = useForms({ name: "", direction: "", numeroDocumento: "", telephone: "" });
  const { clientForId, editClientes } = useClientes();

  const navigate = useNavigate();
  const { id } = useParams();

  const searchClient = async () => {
    const { name, direction, numeroDocumento, telephone} = await clientForId(id);
    setFormState({name, direction, numeroDocumento, telephone});
  };

  useEffect(() => {
    searchClient();
  }, [id]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (id) {
      editClientes({ ...formState, id });
      navigate("/");
    }
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
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};
