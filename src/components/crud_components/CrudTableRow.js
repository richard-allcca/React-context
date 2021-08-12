import React, { useContext } from "react";
import CrudContext from "../../context/CrudContext";

const CrudTableRow = ({ el }) => {
  let { name, constellation, id } = el;
  const { setdataToEdit, deleteData } = useContext(CrudContext);

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setdataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
