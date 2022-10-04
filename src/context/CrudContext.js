import { createContext, useEffect, useState } from "react";
import { helperHttp } from "../helpers/helperHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
   const [ db, setDb ] = useState(null);
   const [ dataToEdit, setdataToEdit ] = useState(null);
   const [ error, setError ] = useState(null);
   const [ loading, setLoading ] = useState(false);

   let api = helperHttp();
   let url = "http://localhost:5000/santos";

   useEffect(() => {
      setLoading(true);
      helperHttp()
         .get(url)
         .then((res) => {
            // console.log(res);
            if (!res.err) {
               setDb(res);
               setError(null);
            } else {
               setError(res);
               setDb(null);
            }
            setLoading(false);
         });
   }, [ url ]);

   // =================================================================
   //? CREATE
   // =================================================================
   const createData = (data) => {
      data.id = Date.now();

      let options = {
         body: data,
         headers: { "content-type": "application/json" },
      };

      api
         .post(url, options)
         // .post(url, { body: data })
         .then((res) => {
            console.log(res);
            if (!res.err) {
               setDb([ ...db, res ]); // lo que tiene db y le agrega la q viene en res
            } else {
               setError(res);
            }
         });
   };

   // =================================================================
   //? UPDATE
   // =================================================================
   const updateData = (data) => {
      let endpoint = `${url}/${data.id}`;
      // console.log(endpoint);
      let options = {
         body: data,
         headers: { "content-type": "application/json" },
      };

      api.put(endpoint, options).then((res) => {
         // console.log(res);
         if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
         } else {
            setError(res);
         }
      });
   };

   // =================================================================
   //? DELETE
   // =================================================================
   const deleteData = (id) => {
      let isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

      if (isDelete) {
         let endpoint = `${url}/${id}`;
         let options = {
            headers: { "content-type": "application/json" },
         };
         api.del(endpoint, options).then((res) => {
            if (!res.err) {
               let newData = db.filter((el) => el.id !== id);
               setDb(newData); //agregamos contenido filtrando el id del parametro
            } else {
               setError(res);
            }
         });
      } else {
         return;
      }
   };

   const data = {
      db,
      dataToEdit,
      error,
      loading,
      createData,
      updateData,
      deleteData,
      setdataToEdit,
   };

   return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
