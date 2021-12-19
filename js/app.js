
//function testWebP(callback) {
//	var webP = new Image();
//	webP.onload = webP.onerror = function () {
//		callback(webP.height == 2);
//	};
//	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//}
//testWebP(function (support) {
//	if (support === true) {
//		document.querySelector('html').classList.add('_webp');
//	} else {
//		document.querySelector('html').classList.add('_no-webp');
//	}
//});
//--------------------------------menu---------------------

function menuOpen () {
   let menuBody = document.querySelector('.icon-menu');
   let asideMenu = document.querySelector('.aside');
   let profileBody = document.querySelector('.profile');
   let profileOpen = document.querySelector('.profile-open');
   let overLay = document.querySelector('.overlay');
   

      lockScroll = () => {
      document.body.classList.add('_lock');
   }

   menuBody.addEventListener('click',function(e){
      menuBody.classList.add('active');
      profileOpen.classList.add('active');
      asideMenu.classList.add('active');
      overLay.classList.add('active');
      lockScroll();
   });

   profileOpen.addEventListener('click',function(e){
      profileBody.classList.add('active');
      profileOpen.classList.add('active');
      overLay.classList.add('active');
      lockScroll();
   })

   
}
menuOpen ();



function menuClose() {
   let menuBody = document.querySelector('.icon-menu');
   let asideMenu = document.querySelector('.aside');
   let profileBody = document.querySelector('.profile');
   let profileOpen = document.querySelector('.profile-open');
   let  overLay = document.querySelector('.overlay');

   unlockScroll = () => {
      document.body.classList.remove('lock');
   }

   overLay.addEventListener('click', function(e) {
      menuBody.classList.remove('active');
      asideMenu.classList.remove('active');
      overLay.classList.remove('active');
      
      unlockScroll();
   })

   overLay.addEventListener('click', function(e) {
      profileBody.classList.remove('active');
      profileOpen.classList.remove('active');
      overLay.classList.remove('active');
      unlockScroll();
   })
}
menuClose();

