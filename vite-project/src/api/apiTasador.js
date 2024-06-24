import { useContext } from "react";
import GeneralContext from "../utils/GeneralContext"


async function enviarTasacion(data) {

    const { 
        tasar,
        setTasar
       } = useContext(GeneralContext);

    fetch('http://unema.es:5000/api/predict', data)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
        return data.json();
        }).then(update => {
        console.log(update);
        setTasar(update)
        }).catch(e => {
        console.log(e);
        });
        

  }



  export {
    enviarTasacion
  }


