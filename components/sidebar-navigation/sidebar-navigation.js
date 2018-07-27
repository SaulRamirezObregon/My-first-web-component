

(function sidebarNavigationDefiniton(newElement){

'use strict';

class SidebarNavigation extends HTMLElement{
  constructor(){
    super();

    /* ----- ETIQUETA P SIDEBAR, Y ETIQUETAS PARA PINTAR LA INFORMACIÓN ----- */
    const tag = document.querySelectorAll('.hero');
    const show = document.querySelector('.show-content');
    const name = document.querySelector('.nombre');
    const identity = document.querySelector('.identidad');
    const universe = document.querySelector('.universo');
  }


  infoHero(id){
    const objectHeros = [
      {
        id:"spiderman",
        universe:"marvel",
        identity:"peter parker"
      },
      {
        id:"batman",
        universe:"dc",
        identity:"bruce wayne"
      },
      {
        id:"goku",
        universe:"universo 7",
        identity:"son goku"
      }
    ];
    return objectHeros.filter(hero => hero.id === id.toLowerCase());
  }


  connectedCallback () {
   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[rel="import"]').import;
   const template = templateImport.querySelector('#sidebar-navigation');
   const instance = template.content.cloneNode(true);
   const options = instance.querySelector('.sectionbar');

   let heroObject = {};
   shadowRoot.appendChild(instance);

   //obtención de la opció clickeada
   options.addEventListener('click', (e) =>{

   if(e.target.innerHTML != "Heroes"){
     heroObject = this.infoHero(e.target.innerHTML);
   }

   });

   this.addEventListener('click', (event)=>{
     const element = event.target;
     this.dispatchEvent(new CustomEvent('navigation-active', {
       bubbles:true,
       composed:false,
       detail:{
         elemento:element,
         heroe:heroObject
       }
    }));
  });
  }
}

newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
