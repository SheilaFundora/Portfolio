const baseUrl = process.env.NEXT_PUBLIC_API_HOST;

export const fetchData = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }${ endpoint }`;
    console.log(JSON.stringify( data ))

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}


export const fetchValidateToken = ( endpoint, method = 'POST' ) => {
  const url = `${ baseUrl }${ endpoint }`;
  const token = localStorage.getItem('token') || ''; //recibiendo el token del localStorage

  return fetch( url, {
    method,
    headers: {
      'Content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });
}
