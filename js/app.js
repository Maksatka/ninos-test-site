// -------- Скрол вниз главной страныцы ---------//
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: "smooth"
	})
}

const button = document.querySelector('#btn');
const footer = document.querySelector('#section');
button.value = 'pit';

button.addEventListener('click', function () {
	scrollTo(section);

});

let send = document.querySelector('.btn-send');

send.addEventListener('click', function(e) {
e.preventDefault();
console.log('work');
 if (send) {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Sended message!',
		text: 'Added to cart success!',
		showConfirmButton: false,
		timer: 2500,
	  })
 }
})

