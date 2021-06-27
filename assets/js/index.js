// Мобильное меню
let burgerBtn = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");

const openMenu = function() {
    burgerBtn.classList.toggle("header__burger--active");
    headerNav.classList.toggle("header__nav--active");
}

burgerBtn.addEventListener("click", openMenu);

$("nav").on("click", "a", function(event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var idc = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(idc).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({ scrollTop: top }, 400);
});
$(window).scroll(function() {
    var $sections = $('section');
    $sections.each(function(i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var idn = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a').parent(".header__nav-item--active").removeClass('header__nav-item--active');
            $('a[href="#' + idn + '"]').parent(".header__nav-item").addClass('header__nav-item--active');
        }
    });
});