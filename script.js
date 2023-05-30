function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function (text) {
    let element;
    if (this.selector.startsWith('.')) {
        element = document.createElement('div');
        element.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith('#')) {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
    }
    element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
    `;
    element.textContent = text;
    document.body.appendChild(element);
};

const domElement1 = new DomElement('.block', '100px', '200px', 'red', '20px');
domElement1.createElement('Text for .block');

const domElement2 = new DomElement('#best', '150px', '300px', 'blue', '24px');
domElement2.createElement('Text for #best');
