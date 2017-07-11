$(".menu-button").click(function () {
    $("nav").slideToggle();
})

$("nav a").click(function () {
    if ($(".menu-button").css('display') == 'inline-block')
    {
        $("nav").slideUp();
    }
})

/* Smooth Scrolling */
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('.flyIn').bind('inview', function (event, visible) {
    if (visible === true) {
        $(this).addClass('animated fadeInUpBig');
    }
});

$('.flyInFast').bind('inview', function (event, visible) {
    if (visible === true) {
        $(this).addClass('animated fadeIn');
    }
});

function OnBegin() {
    $('.contact-name').val('');
    $('.contact-email').val('');
    $('.contact-message').val('');
    $('.contact-name').focus();
    $('#submit').html('<i class="icon icon-spinner icon-pulse"></i>');
}

function OnSuccess() {
    $('.contact-name').val('');
    $('.contact-email').val('');
    $('.contact-message').val('');
    $('#message').fadeIn();
    $('#submit').html('GET IN TOUCH');
}

$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("textarea#message").val();

        var valid = true;

        if (name == "") {
            valid = false;
            $("#name").focus().addClass('error');
            return false;
        }

        if (email == "") {
            valid = false;
            $("#email").focus().addClass('error');
            return false;
        }

        if (message == "") {
            valid = false;
            $("#message").focus().addClass('error');
            return false;
        }

        if (valid) {
            OnBegin();
            var dataString = 'name='+ name + '&email='+ email + '&message='+ message;

            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "/sendmail.php",
                data: dataString,
                cache: false,
                success: function(result){
                    OnSuccess();
                    $("#message").show('400');
                }
            });
        }
        
    });
});


 jQuery(function($) {
    $('#about').waypoint(function() {
        $('#skill_c').circliful();
        $('#skill_php').circliful();
        $('#skill_html').circliful();
        $('#skill_css').circliful();
        $('#skill_js').circliful();
        this.destroy();
    },{
        triggerOnce: true,
        offset: '50%'
    });

});

