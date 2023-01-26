function calcCartPriceAndDelivery() {
	let cartWrapper = document.querySelector('.cart-wrapper');
	let priceElements = cartWrapper.querySelectorAll('.price__currency');
	let totalPriceEl = document.querySelector('.total-price');
	let deliveryCost = document.querySelector('.delivery-cost');
	let cartDelivery = document.querySelector('[data-cart-delivery]');

	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		let amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;

	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываем стоимость доставки
	if (priceTotal >= 30) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'თავისუფალია';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '5 ლ.';
	}
}
