async function enviarTasacion(data) {
    fetch('http://unema.es:5000/api/predict', data)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
         return data.json();
        }).then(update => {
        console.log(update);
        }).catch(e => {
        console.log(e);
        });
  }


  export {
    enviarTasacion
  }


