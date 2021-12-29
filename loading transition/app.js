/**
 * Creating loader div
 */
const _createLoader = () => {
  let _body = document.body;
  let _loaderdiv = document.createElement("div");
  _loaderdiv.id = "loader";
  _loaderdiv.className = "loader";
  _body.appendChild(_loaderdiv);
  for (let i = 0; i < 5; i++) {
    let _loadernesteddiv = document.createElement("div");
    _loadernesteddiv.id = `loadertile${i}`;
    _loadernesteddiv.className = "loadertile";
    document.getElementById("loader").appendChild(_loadernesteddiv);
  }
};
/**
 * Function for working functionality
 */
const _workerfunction = () => {
  let _loader = document.getElementById("loader");
  _loader.className = "loader loader--active";
  setTimeout(() => {
    _loader.classList = "loader";
  }, 5000);
};

_createLoader();
document
  .getElementById("workingclick")
  .addEventListener("click", _workerfunction);
