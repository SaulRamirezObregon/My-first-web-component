function readJSONFrom(url){
  return fetch(url)
    .then(response => response.json())
    .then(infoHeros);
}
//test
function infoHeros(data){
  const objectHeros = data.map(heros=>{
    if(heros.hasOwnProperty("id")){
      return {
        nombre : heros.id,
        universo: heros.universe,
        identidad: heros.identity
      }
    }
  })
  viewInfoHero(objectHeros,"batman");
}

function viewInfoHero(data,id){
  data.forEach(hero => {
    switch(id){
      case "spiderman":
        hero.nombre == id ? console.log(hero.nombre+" "+hero.universo+" "+hero.identidad):"";
        break;
      case "batman":
        hero.nombre == id ? console.log(hero.nombre+" "+hero.universo+" "+hero.identidad):"";
        break;
      case "goku":
        hero.nombre == id ? console.log(hero.nombre+" "+hero.universo+" "+hero.identidad):"";
        break;
    }
  })
}

readJSONFrom("http://localhost:3000/heroes");
