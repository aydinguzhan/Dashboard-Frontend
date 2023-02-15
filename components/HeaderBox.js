const box = document.createElement("template");
box.innerHTML= `
<div class="box">
<img src="" alt="">
<div class="box-text">
    <h4>Current Value</h4>
    <p>$203.53</p>
</div>
</div>
<style>
.box {
    margin: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 12px;
    font-weight : 600;
    font-family: 'Roboto', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
}

</style>
`
class HeaderBox extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({ mode : "open"});
        this.shadowRoot.appendChild(box.content.cloneNode(true));
        
        let container = this.shadowRoot.querySelector(".box");
        let img =  this.shadowRoot.querySelector("img");
        img.setAttribute("src",this.getAttribute("src"))
        container.style.background = this.getAttribute("color")
        container.style.color = this.getAttribute("textcolor");
        container.style.width = this.getAttribute("width");
        container.style.minWidth= this.getAttribute("minwidth");
        container.style.height = this.getAttribute("height");
        container.style.minHeight= this.getAttribute("minheight");
        container.style.padding = this.getAttribute("padding")
         

    }
}
window.customElements.define("box-component",HeaderBox);