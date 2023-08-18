// Constante con nombre para la API con su url json
const API = "https://japceibal.github.io/emercado-api/cats_products/101.json";

    // Evento DOM para llamar el fetch json 
  document.addEventListener("DOMContentLoaded", async () => {

    // constante de respuestas para la api
    // llamamos al elemento container por su id
  const response = await fetch(API);
  const json = await response.json();
  const container = document.getElementById("container");

    	// Llamamos los productos dentro del json 
      // y vamos agregando palabras claves a los elementos dentro del arreglo productos
    let products = json.products;
    for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    let name = products[i].name;
    let description = products[i].description;
    let cost = products[i].cost;
    let currency = products[i].currency;
    let soldCount = products[i].soldCount;
    let image = products[i].image;


    // Creamos elemento div para agregar mas elementos dentro de un html con estilos
    const divs = document.createElement("div");
    divs.innerHTML = `
      <div class="">
          <div class="text-bg-dark me-sm-3 pt-5 px-3 pt-md-5 px-md-5">
              <div class="my-2 py-2">

                    <div class="d-flex shadow justify-content-between ">
                      <div class="d-flex">
                        <img src="${image}" class="p-2" width="250px">
                        <div class="ms-3">
                          <p class="h2 fw-normal">${name} - ${currency} ${cost}</p>
                          <p>${description}</p>
                        </div>   
                      </div>   
                      <small class="me-3 mt-2"> ${soldCount} vendidos</small>
                    </div>
              </div>
          </div>
      </div>
          `;
          container.appendChild(divs);
  }
});
