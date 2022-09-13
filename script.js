//images Toggle on product-details Page

let image1 = document.querySelector('#img1')
  	let image2 = document.querySelector('#img2')
  	let image3 = document.querySelector('#img3')
  	let image4 = document.querySelector('#img4')
  	let mainimage = document.querySelector('#mainImage')

  	image1.addEventListener('click' , ()=>{
  		mainimage.src='images/levis2.jpg';
  	})
  	image2.addEventListener('click' , ()=>{
  		mainimage.src='images/levis3.jpg';
  	})
  	image3.addEventListener('click' , ()=>{
  		mainimage.src='images/levis4.jpg';
  	})
  	image4.addEventListener('click' , ()=>{
  		mainimage.src='images/levis1.jpg';
  	}) 

//Menu Button Toggle

const mobile_nav = document.querySelector('.menu-nav');
const nav_header = document.querySelector('.header')
const toggleNavbar = () => {
	nav_header.classList.toggle('active')
}
mobile_nav.addEventListener('click' , () => toggleNavbar())