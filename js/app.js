

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

$(document).ready(function() {
    var values = [
      { value: 11, text: 'K+' },
      { value: 9, text: '' },
      { value: 35, text: '' }
    ]; // Valores finais e textos correspondentes
  
    var duration = 2000; // Duração da animação em milissegundos
  
    function animateValue(element, targetValue, text) {
      $({ count: 0 }).animate({ count: targetValue }, {
        duration: duration,
        step: function() {
          $(element).text(Math.round(this.count) + text);
        },
        complete: function() {
          $(element).text(targetValue + text);
        }
      });
    }
  
    $('.count').each(function(index) {
      var targetValue = values[index].value;
      var text = values[index].text;
      animateValue(this, targetValue, text);
    });
  });
  
  
  

 