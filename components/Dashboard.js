const template = document.createElement('template')
template.innerHTML = `
<div class= "container">
  
  
  <div style = " font-size : 16px; padding: 26px ">
    <h1></h1>  
    <p></p>
  </div>
  <div class="imgContainer">
    <img width : "100px" src = "../public/img/Logo.png"/>
  </div>

</div>
<style>
.container{
  padding : .1em;
  background: #6425FE;
  color: white;
  display: flex ;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; 
  border-radius : 14px;
  font-family: 'Roboto', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.imgContainer{
  display: flex;
  width: 90% ;
  justify-content: flex-end; 
  align-items: center; 
  padding:14px;
  margin-bottom:1em;
  
}
`
class Dashboard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    const h1 =  this.shadowRoot.querySelector("h1");
    const paragraf = this.shadowRoot.querySelector("p")
    const container = this.shadowRoot.querySelector(".container");
    if (this.getAttribute("background") == 'purple') {
        container.style.background ="#6425FE";
        container.style.color = "white";
        h1.style.color ="white";
        paragraf.style.color = "white";
        container.style.border ="1px solid #6425FE"; 
    }        
    if(this.getAttribute("background") == 'white'){
      container.style.background ="white";
      container.style.color = "#6425FE";
      h1.style.color ="#6425FE";
      paragraf.style.color = "#6425FE";
      container.style.border ="1px solid #6425FE";
      }
      else{
        container.style.background ="#6425FE";
        container.style.color = "white";
        h1.style.color ="white";
        paragraf.style.color = "white";
        container.style.border ="1px solid #6425FE";
      }
    

    h1.innerText = this.getAttribute("title");
    paragraf.innerText = this.getAttribute("subtext");


  }

}
window.customElements.define("dashboard-component", Dashboard)