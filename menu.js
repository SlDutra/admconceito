$(document).ready(function() {
    // Scroll suave
    $('nav a').on('click', function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Menu responsivo
    let btnMenu = document.getElementById('btn-abrir-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block'; // Mostra o overlay
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none'; // Esconde o overlay
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none'; // Esconde o overlay
    });

    // Validação do formulário
    $('form').on('submit', function(event) {
        let valid = true;
        $(this).find('input, textarea').each(function() {
            if ($(this).val() === '') {
                valid = false;
                $(this).css('border', '1px solid red');
            } else {
                $(this).css('border', '');
            }
        });
        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Formulário enviado com sucesso!');
            $(this).trigger('reset'); // Reseta o formulário
        }
    });

    // Animações em seções ao rolar
    $(window).on('scroll', function() {
        $('.especialidades-box').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('animate');
            }
        });
    });

    // Slider de serviços
    $('.servicos-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Ativar as setas
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Próximo</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
