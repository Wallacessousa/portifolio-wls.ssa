const imgs = document.getElementById("img"); // pra pegar o Id=img
const img = document.querySelectorAll("#img img"); // pra pegar elemento de imagem dentro do id img.

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = 'translateX(${-idx * 500}px)';
}

setInterval(carrossel, 1800);

// ======================== MENU BAR =======================
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  } 
// ======================== MENU BAR =======================


// ========================= SLICK =========================
  $(function(){
    $(".whatch-slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow:$(), // Button Back <=
      nextArrow:$(), // Button Next =>
      autoplay: true,
      autoplaySpeed: 500,
    });

  })
// ========================= SLICK =========================


// ===================== SLICK MOBILE ======================
$(function(){
  $(".whatch-slider-mobile").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:$(), // Button Back <=
    nextArrow:$(), // Button Next =>
    autoplay: true,
    autoplaySpeed: 300,
  });

})
// ====================== SLICK MOBILE =====================



// ===================== SLIDE LAPTOP ======================

$(function(){
  $(".laptop-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:$(), // Button Back <=
    nextArrow:$(), // Button Next =>
    autoplay: true,
    autoplaySpeed: 700,
    fade: true,
    cssEase: 'linear'
    });
  });

