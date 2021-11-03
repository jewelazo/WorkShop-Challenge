export const getHome1=(id)=>{
    return fetch(`https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties/${id}`).then(
    (result) => result.json()
  );

}

export const getHome2=(id)=>{
    return fetch(`https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties_alternative/${id}`).then(
    (result) => result.json()
  );

}