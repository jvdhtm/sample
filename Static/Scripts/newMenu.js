$(document).ready(function () {
    $('body').on('click','.cart--js',function(e){
        $('.navmenu__firstlevel').find('a').removeClass('active');
        $('.navmenu__secondlevel').removeClass("is-open");
        $('.modal__loggedin--js').removeClass("active");
        $('.showmenu--small-menu').parent().children('ul').removeClass('active');
        $('.kundvagn--js').toggleClass('active');
    });

    $('body').on('click','.showmenu--js',function(e){
        $('.navmenu__firstlevel').find('a').removeClass('active');
        $('.kundvagn--js').removeClass('active');
        $(this).toggleClass('active');
        $('.navmenu__secondlevel').toggleClass("is-open");
        if ($(window).width() < 992) {
            $(this).parent().children('ul').toggleClass("active");
            $(this).parent().children('.navmenu__firstlevel--icon').toggleClass("active");
            return false;
        }
        else{
            $('.showmenu--small-menu').parent().children('ul').removeClass('active');
            $('.modal__loggedin--js').removeClass("active");
        }
    });
    $('body').on('click','.showmenu--small-menu',function(e){
        $('.navmenu__firstlevel').find('a').removeClass('active');
        $(this).toggleClass('active');
        $(this).parent().children('ul').toggleClass("active");
        $('.navmenu__secondlevel').removeClass("is-open");
        $('.kundvagn--js').removeClass('active');
        $('.modal__loggedin--js').removeClass("active");
        $(this).parent().children('.navmenu__firstlevel--icon').toggleClass("active");
        return false;
    });
    

    
    $('body').on('click','.clientarea--js',function(e){
        event.preventDefault();
        $(".modal-dialog .popup").hide();
        $(".popup--login").show();
        $(".popup--register").show();
    });
    
    $('body').on('click','.clientarea--loggedin--js',function(e){
        event.preventDefault();
        $('.navmenu__firstlevel').find('a').removeClass('active');
        $('.showmenu--small-menu').parent().children('ul').removeClass('active');
        $('.navmenu__secondlevel').removeClass("is-open");
        $('.kundvagn--js').removeClass('active');
        $('.modal__loggedin--js').toggleClass('active');
        
    });
    $('body').on('click','main',function(e){
        $('.navmenu__secondlevel').removeClass('is-open');
    });
     $('body').on('click','.open__menu--js',function(e){
        $(this).toggleClass("active");
        $('.navbar__od--menu').toggleClass("open");
    });
    
    $('body').on('mouseover','.nav__item--js',function(e){

       var target = $(this).attr('target');
       var tag = $(this).parents('.submenu--container').attr('tag');
       $(this).parent().find('.nav__item--js').removeClass('active')
       $(this).addClass('active');
      $(this).parents('.submenu__col').next().find('.submenu--container').removeClass('active');
      $(this).parents('.submenu__col').next().next().find('.submenu--container').removeClass('active');
      $(this).parents('.submenu__col').next().find('[data-target="'+tag+'__'+target+'"]').addClass('active');
    });


    /*
    $(window).scroll(function(){
        if ($(window).scrollTop() >=  $('.header').height()) {
            $('.header').addClass('fixed-header');
        }
        else {
            $('nav').removeClass('fixed-header');
        }
    });
    */
});

