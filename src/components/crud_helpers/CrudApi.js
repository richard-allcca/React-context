import { useContext } from "react";
import CrudContext from "../../context/CrudContext";

import CrudForm from "../crud_components/CrudForm";
import CrudTable from "../crud_components/CrudTable";
import Loader from "./Loader";
import Message from "./Message";

export const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext); //! fixme
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
