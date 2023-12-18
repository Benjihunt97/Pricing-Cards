$(document).ready(() => {

    $('button').click((e) => {

        $(e.target).parent().siblings().hide(400);

    });

    // input ball
    $('.move-ball').click((e) => {
        if ($(e.target).is(':checked')) {
            $('.ball').animate({
                'left': '60%',
            }, 400);
            $('.ball').addClass('light-scheme');
            $('.bar').addClass('dark-scheme');
            $('.card').addClass('dark-scheme');
            $('button').addClass('light-scheme');
        } else {
            $('.ball').animate({
                'left': '0.25rem'
            }, 400);
            $('.ball').removeClass('light-scheme');
            $('.bar').removeClass('dark-scheme');
            $('.card').removeClass('dark-scheme');
            $('button').removeClass('light-scheme');
        }
    });

});
