import { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import Loader from "./../crud_helpers/Loader";
import Message from "./../crud_helpers/Message";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);
  return (
    <div>
      <h2> CRUD API con Context</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            bgColor="#dc3545"
            msg={`Error ${error.status}: ${error.statusText} `}
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;

// Notas.
// CrudProvider: lo usamos el el "app.js" para poder usar el contexto aqui
// useContext: no puede ser usado en el mismo archivo que donde usamos <Name.Provider></Name.Provider>
// Solucion: user el <Name.Provider></Name.Provider> como envoltura del componente o archivo que usa el context
