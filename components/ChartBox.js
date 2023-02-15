const chartbox = document.createElement("template");
class ChartBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode : "open"});
        this.shadowRoot.appendChild(chartbox.content.cloneNode(true));
    }
}

window.customElements.define("chart-component",ChartBox);