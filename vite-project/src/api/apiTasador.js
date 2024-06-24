async function enviarTasacion(data) {
    fetch('', data)
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



 /*  const tasacionArray = {'surface': '',
                            'bedrooms', '', 
                            restrooms, '',
                            'apiKeyInput', 'test_5ghbr8UdgVwCLyp4VdGjhHVziFm4dcV0b974Xtni'}

  const data = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(tasacionArray),
      };


    const tasacionArrayEnviar = await enviarTasacion(data)

    */