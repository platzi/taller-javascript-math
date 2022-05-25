const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);
  
  console.log({ price, discount });
  
  if (!price || !discount) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }

  if (discount > 100) {
    pResult.innerText = 'Ajá, ya quisieras, no te vamos dar plata, PAGA!';
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
