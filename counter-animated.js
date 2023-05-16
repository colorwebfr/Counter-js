//Counter 
function counter_bs() {
    $(document).ready(function () {
        const elPos = parseInt($('.counter').offset().top);
        const heightScreen = parseInt($(window).height());
        $(window).scroll(function () {
            let scrollY = parseInt($(window).scrollTop());
            if (scrollY >= elPos - heightScreen) {
                $('.counter').each(function () {
                    let $this = $(this),
                    countTo = $this.attr('data-count');
                    $({ countNum: $this.text() }).animate(
                        {
                        countNum: countTo
                        },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                });
            }
        });
    });
}
