

(function showContentDefiniton(newElement){

'use strict';

class ShowContent extends HTMLElement{

 static get observedAttributes() {return ['informacion-heroe']; }

  constructor(){
    super();
    this.templateImport = document.querySelector('link[href="./components/show-content/show-content.html"]').import;
    this.shadow = "";
  }

  connectedCallback () {
    let shadowRoot = this.attachShadow({mode: 'open'});
    const template = this.templateImport.querySelector('#show-content');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    this.shadow = shadowRoot;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const divcontent =this.shadow.querySelector('.heroes');
    /*JSON.parse(), convierte en object*/
    const objectHero = JSON.parse(this.getAttribute('informacion-heroe'));
    this.cardHero(divcontent,objectHero);
  }

  cardHero(elemento,objeto){
    const content = document.createElement("div");
      const tagPHeroe = document.createElement("p");
      const tagPUniverso = document.createElement("p");
      const tagPIdentidad = document.createElement("p");
      const buttonRemove = document.createElement("button");
      content.appendChild(tagPHeroe);
      content.appendChild(tagPUniverso);
      content.appendChild(tagPIdentidad);
      content.appendChild(buttonRemove);
      content.setAttribute('class',"card-heroe");
      tagPHeroe.setAttribute('class',"heroe-nombre");
      tagPUniverso.setAttribute('class',"heroe-universo");
      tagPIdentidad.setAttribute('class',"heroe-identidad");
      buttonRemove.setAttribute('class',"heroe-remove")
      buttonRemove.innerHTML ='remover';
      tagPHeroe.innerHTML = objeto.id;
      tagPUniverso.innerHTML = objeto.universe;
      tagPIdentidad.innerHTML = objeto.identity;
      this.setBackground(objeto.id,content);
      elemento.appendChild(content);

      //content.setAttribute('background-image', objeto.id==='spiderman')
      buttonRemove.addEventListener('click', e => elemento.removeChild(content));
  }

  setBackground(hero,elemento){
    switch (hero) {
      case "spiderman":
        elemento.style.backgroundImage = "url('https://res.cloudinary.com/teepublic/image/private/s--2xP864oV--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1503225337/production/designs/1837393_1.jpg')";
        break;
      case "batman":
        elemento.style.backgroundImage = "url('http://www.baltana.com/files/wallpapers-12/Batman-Logo-HD-Wallpapers-32997.jpg')";
        break;
      case "goku":
        elemento.style.backgroundImage = "url('http://cdn2.gamedots.mx/media/gd/styles/gallerie/public/images/2015/04/dragonballkanjiturtle_0.jpg')";
        break;
    }
  }
}


newElement.define('show-content', ShowContent);

})(window.customElements);
