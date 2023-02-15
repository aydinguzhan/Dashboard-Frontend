const btn = document.createElement('template');
btn.innerHTML = `
<div class="btn-area">
<button class="btn">Start</button>
<button class="btn">Start</button>
<button class="btn">Start</button>
</div>
`
class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode : "open"});
        this.shadowRoot.appendChild(btn.content.cloneNode(true));

    }
}

window.customElements.define("buton-component", Button)