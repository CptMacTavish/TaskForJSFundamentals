const colorBtnList = document.querySelectorAll('.color');
const shoesList = document.querySelectorAll('.shoe');
const bgList = document.querySelectorAll('.gradient');
const outPrice = document.querySelector('#outprice');
const sizeOptionList = document.querySelectorAll('.size-shoe');
const selectList = document.querySelector('.size-list');
const quantity = document.querySelector('.quantity');

quantity.value = 1;

let price = 170;
let quantityValue = 1;
let sizeValue = 1;

colorBtnList.forEach((btn) => {
        btn.addEventListener('click', changeCard);
});
selectList.addEventListener('input', changePriceGivenSize);
quantity.addEventListener('input', changePriceGivenQuantity);

function changeCard(event) {
    const selectedColor = event.target.attributes.color.value;

    colorBtnList.forEach((btn) => {
        btn.classList.toggle('active', btn === event.target);
    });
    
    shoesList.forEach((shoe) => {
        const shoeColor = shoe.attributes.color.value;
        shoe.classList.toggle('show', shoeColor === selectedColor);
    });

    price = event.target.dataset.price;
  console.log(price)
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
    
}

function changePriceGivenSize() { 
    sizeValue = selectList.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}

function changePriceGivenQuantity() {
    quantityValue = quantity.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}