let url = new URL(window.location.href);
let orderId = url.searchParams.get("orderId");
let confirmOrderId = document.getElementById('orderId');
confirmOrderId.innerHTML = orderId;

console.log(orderId);
console.log(url);
console.log(confirmOrderId);