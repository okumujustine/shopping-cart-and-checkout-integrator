
const afriOpenCartButton = document.querySelector('.snipcart-add-item-2');
var shoppingCartModal = document.createElement("dialog");
var btn = document.createElement("button");

function showShoppingCartModal() {
    document.body.appendChild(shoppingCartModal)
    shoppingCartModal.innerHTML = '<div>all in one div which is crazy</div>';
    shoppingCartModal.showModal();
}

afriOpenCartButton.addEventListener('click', function () {
    showShoppingCartModal()
})

// btn.addEventListener('click', function () {
//     myDialog.value = "";
//     myDialog.close();
// })