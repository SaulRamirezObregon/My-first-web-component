

(function showContentDefiniton(newElement){

'use strict';

class ShowContent extends HTMLElement{

 static get observedAttributes() {return ['informacion-heroe']; }

  constructor(){
    super();
    this.templateImport = document.querySelector('link[href="./components/show-content/show-content.html"]').import;
  }

  connectedCallback () {

   let shadowRoot = this.attachShadow({mode: 'open'});
   const template = this.templateImport.querySelector('#show-content');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const template = this.templateImport.querySelector('#show-content').content;
    const content = template.querySelector('.content');
    /*JSON.parse(), convierte en object*/
    const objectHero = JSON.parse(this.getAttribute('informacion-heroe'));
    console.log(content);
    this.createCardHero(content);
  }

  createCardHero(elemento){
    const content = document.createElement("div");
    const tagPHeroe = document.createElement("p");
    const tagPUniverso = document.createElement("p");
    const tagPIdentidad = document.createElement("p");
    content.appendChild(tagPHeroe);
    content.appendChild(tagPUniverso);
    content.appendChild(tagPIdentidad);
    content.setAttribute('class',"card-heroe");
    tagPHeroe.setAttribute('class',"heroe-nombre");
    tagPUniverso.setAttribute('class',"heroe-universo");
    tagPIdentidad.setAttribute('class',"heroe-identidad");
    elemento.appendChild(content);
  }

}


newElement.define('show-content', ShowContent);

})(window.customElements);
