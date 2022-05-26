// [1,2,3,4]
function calcularPromedio(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }

  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}
