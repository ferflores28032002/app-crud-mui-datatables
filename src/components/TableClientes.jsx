import MUIDataTable from "mui-datatables";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useClientes } from "../store/slices/hooks/useClientes";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export const TableClientes = () => {
  const columns = [
    "name",
    "numeroDocumento",
    "direction",
    "telephone",
    {
      name: "_id",
      label: "actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="text-lg flex gap-2 justify-start items-center">
              <Link
                className="text-purple-500 p-2 border-2 border-purple-500 hover:bg-purple-500 rounded hover:text-white"
                to={`/edit/${value}`}
              >
                <FaEdit />
              </Link>
              <button className="text-gray-500 p-2 border-2 border-gray-400 hover:bg-gray-300 rounded">
                <IoEyeSharp />
              </button>
            </div>
          );
        },
      },
    },
  ];
  const [dele, setDele] = useState([]);
  const { loadClientes, clientes, deletesAllsClientes } = useClientes();

  useEffect(() => {
    loadClientes();
  }, []);

  const DeleteRow = (deletes) => {
    deletesAllsClientes(dele);
  };

  const options = {
    filterType: "checkbox",
    fixedHeader: true,
    responsive: "standard",
    onRowClick: (rowData, rowMeta) => {
      // console.log(rowData, rowMeta);
    },
    onRowSelectionChange: (currentSelect, allSelected) => {
      const result = allSelected.map((item) => {
        return clientes.at(item.index);
      });
      const selectedIds = result.map((item) => {
        return item._id;
      });
      setDele(selectedIds);
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <div>
        <Tooltip
          title={"Delete"}
          cursor="pointer"
          style={{ marginRight: "10px" }}
        >
          <div onClick={() => DeleteRow(selectedRows)} color="error">
            <MdDelete style={{ fontSize: "1.5rem", cursor: "pointer" }} />
          </div>
        </Tooltip>
      </div>
    ),
  };
  return (
    <div className="container border my-10 shadow-2xl mx-auto overflow-hidden">
      <MUIDataTable
        title={"Lista de Clientes del sistema"}
        data={clientes}
        columns={columns}
        options={options}
      />
    </div>
  );
};
