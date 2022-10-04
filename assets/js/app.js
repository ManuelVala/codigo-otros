const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); // query llama a una clase no id
const $l = document.querySelector('.location');



function displayUser(username) {
  //$n.textContent = 'cargando...';
  let promesa = fetch(`${baseEndpoint}/${username}`,{ 
    method:"GET"}); //await no es necesario, fetch debe de llamar a BaseEndpoind
  //console.log(data);
  promesa.then((response)=>{
    response.json().then((e)=>{
      $n.innerText = `${e.name}`; // se corrigen Backtiks / propiedad innertext
      $b.innerText = `${e.blog}`; //. "" "" / ""
      $l.innerText = `${e.location}`; // "" ""  / ""
    }).catch((error)=>{ //  la funcion cacha el error 
      handleError(error);
    });
  }).catch((error)=>{
    handleError(error);
  });
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Drayoz algo salió mal: ${err}` // error personalizado
}

displayUser('stolinski');