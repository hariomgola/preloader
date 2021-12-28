const preloader = () => {
  /**
   * Creating the body
   */
  const _createbody = () => {
    let _body = document.body;
    let _bodydiv = document.createElement("div");
    _bodydiv.id = "body";
    _bodydiv.className = "body";
    let _span = document.createElement("span");
    _span.id = "main";
    let _basediv = document.createElement("div");
    _basediv.className = "base";
    _basediv.id = "base";

    // Implementing the body DOM
    _body.appendChild(_bodydiv);
    document.getElementById("body").appendChild(_span);
    document.getElementById("body").appendChild(_basediv);
    // Implementing the main span dom
    for (let i = 0; i < 4; i++) {
      let _nullspan = document.createElement("span");
      _nullspan.id = `mainspan${i}`;
      document.getElementById("main").appendChild(_nullspan);
    }
    // Implementing the base dom
    let _nullspan = document.createElement("span");
    _nullspan.id = "basespan";
    document.getElementById("base").appendChild(_nullspan);
    let _facediv = document.createElement("div");
    _facediv.className = "face";
    document.getElementById("base").appendChild(_facediv);
  };
  /**
   * Creating the Background
   */
  const _backbody = () => {
    let _body = document.body;
    let _longfazersdiv = document.createElement("div");
    _longfazersdiv.id = "longfazers";
    _longfazersdiv.className = "longfazers";

    // Implemeting the body dom
    _body.appendChild(_longfazersdiv);
    for (let i = 0; i < 4; i++) {
      let _nullspan = document.createElement("span");
      _nullspan.id = `longspan${i}`;
      document.getElementById("longfazers").appendChild(_nullspan);
    }
  };
  /**
   * Creating text
   */
  const _bodytext = () => {
    let _body = document.body;
    let _h1 = document.createElement("h1");
    _h1.id = "text";
    _h1.innerHTML = "Created and developer by @hariomgola (github)";
    _body.appendChild(_h1);
  };
  const startpreLoader = () => {
    _createbody();
    _bodytext();
    setTimeout(() => {
      _backbody();
    }, 50);
  };
  startpreLoader();
};

preloader();
