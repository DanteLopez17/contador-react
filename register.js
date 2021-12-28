/* Opcion 1 es la que utiliza React
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js");
}

opcion 2*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./serviceWorker.js");
}
