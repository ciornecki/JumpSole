const burgerIcon = document.querySelector('.burger-icon')
const mobileDropdown = document.querySelector('.mobile-dropdown')
const dropdownLinks = document.querySelectorAll('.dropdown-link')
const mnavList = document.querySelector('.mobile-nav .nav-list')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	mnavList.classList.toggle('active')
})

mobileDropdown.addEventListener('click', () => {
	mobileDropdown.classList.toggle('active')
	if (mobileDropdown.classList.contains('active')) {
		dropdownLinks.forEach(el => {
			el.classList.add('active')
		})
	} else {
		dropdownLinks.forEach(el => {
			el.classList.remove('active')
		})
	}
})

const desktopDropdown = document.querySelector('.nav-list .desktop-dropdown')
const dropdownMenu = document.querySelector('.dropdowns-menu')
const navbar = document.querySelector('.navbar')

desktopDropdown.addEventListener('click', () => {
	dropdownMenu.classList.toggle('active')
	navbar.classList.toggle('active')
})

window.onscroll = () => {
	dropdownMenu.classList.remove('active')
	navbar.classList.remove('active')
	mnavList.classList.remove('active')
}

/* draggable slider */

const slider = document.querySelector('.carousel-imgs')
const arrowIcon = document.querySelectorAll('.header-carousel i')

/* const firstImg = document.querySelector('.carousel-imgs img')

let imgWidth = firstImg.clientWidth + 10

console.log(imgWidth)

arrowIcon.forEach(icon => {
	icon.addEventListener('click', () => {
		if (icon.id == 'left') {
			slider.scrollLeft -= imgWidth
		} else {
			slider.scrollLeft += imgWidth
		}
	})
}) */ // arrows skip

let isDragging = false,
	prevPageX,
	prevScrollLeft

const dragStart = e => {
	isDragging = true
	prevPageX = e.pageX || e.touches[0].pageX
	prevScrollLeft = slider.scrollLeft
}

const dragging = e => {
	if (!isDragging) return
	e.preventDefault()
	let posDelta = (e.pageX || e.touches[0].pageX) - prevPageX
	slider.scrollLeft = prevScrollLeft - posDelta
}

const dragStop = () => {
	isDragging = false
}

slider.addEventListener('mousedown', dragStart)
slider.addEventListener('mousemove', dragging)
slider.addEventListener('mouseup', dragStop)

slider.addEventListener('touchstart', dragStart)
slider.addEventListener('touchmove', dragging)
slider.addEventListener('touchend', dragStop)
