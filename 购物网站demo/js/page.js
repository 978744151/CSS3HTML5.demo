/*
* @Author: Marte
* @Date:   2017-10-10 17:28:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-22 15:40:26
* 函数参考购物网站H5购物网站.md
*/

$(function () {
    // 首先获取屏幕高度
    var screenHeight = $(window).height();
    // 执行一次后不再执行
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    $('.next').click(function () {
        $.fn.fullpage.moveSectionDown();
    })
    // 初始化fullpage
    $('#fullpage').fullpage({
        // 显示侧边导航
        navigation: true,
        // 滚到这一屏后的回调函数
        afterLoad: function (anchorlink, index) {
            if (index == 2 && flag1 == false) {
                flag1 = true
                // 进入第二屏，开始执行动画
                $('.two-search-wrap').show().animate({
                    marginLeft: 0
                }, 1200)
                // 动画执行后让沙发显示
                $('.two-search-wrap').fadeIn(function () {
                    $('.two-search-wrap').hide();
                    $('.two-search-copy').show().animate({
                        bottom: 450,
                        marginLeft: 200,
                        width: 150
                    })
                    $('.two-sofa').show(800);
                })
            }
            if (index == 5) {
                // 手显示后鼠标显示
                $('.five-hand').show().animate({
                    bottom: 0
                }, 800, function () {
                    $('.five-mouse-active').show()
                })

            }
            // 如果在第7页 星星出现
            if (index == 7) {
                $('.seven-star').slideDown()
            }
            if (index == 8) {
                // $('.eight-a').hover(function(){
                //     $('.eight-btn2').toggle()
                // })
                $('.eight-a').mouseenter(function () {
                    $('.eight-btn2').show();
                }).mouseleave(function () {
                    $('.eight-btn2').hide()
                })
                $(document).mousemove(function (event) {
                    var x = event.clientX;
                    var y = event.clientY + 50;


                    if (y < screenHeight - $('.eight-hand').height()) {
                        y = screenHeight - $('.eight-hand').height()
                    }
                    $(".eight-hand").css({
                        top: y,
                        left: x
                    })
                })
                $('.eight-again').click(function () {
                    $.fn.fullpage.moveTo(1)

                    $('img, .move').attr('style', '');
                    flag1 = false;
                    flag2 = false;
                    flag3 = false;
                    flag4 = false;

                })
            }
        },
        // 滚动前的回调函数
        onLeave: function (index, nextIndex, direction) {
            $('.next').fadeOut();
            // 当第二页到第三页时
            if (index == 2 && nextIndex == 3) {
                // 沙发距离下面250px
                $('.two-only-sofa').show().animate({
                    bottom: -(screenHeight - 250),
                    width: 207,
                    marginLeft: -125
                }, 800, function () {
                    $('main-btn-white').fadeIn();
                    $('.main-size-white').fadeIn()
                })
            }
            // 从第三页到第四页
            if (index == 3 && nextIndex == 4 && flag2 == false) {
                flag2 = true;
                $('.two-only-sofa').hide();
                $('.three-rotate-sofa').show().animate({
                    bottom: -(screenHeight - 240),
                    marginLeft: -145
                }, 1000, function () {
                    $(this).hide()
                    $('.four-rotate-sofa').show();
                    $('.four-car-wrap').animate({
                        left: '100%'
                    }, 1000, function () {
                        $('.four-txt,.four-add').fadeIn(1000)
                    })
                })
            }
            if (index == 4 && nextIndex == 5 && flag4 == false) {
                flag4 == true;

                $('.five-sofa').show().animate({
                    bottom: 100,
                    marginLeft: -250
                }, 800, function () {
                    $('.five-order').animate({
                        bottom: 365
                    })
                    $('.five-words').show().fadeIn(1000)
                })
            }
            // 当第5页到第6页时候运行函数
            if (index == 5 && nextIndex == 6 && flag3 == false) {
                flag3 = true;
                $('.five-sofa').stop(true).animate({
                    bottom: -(screenHeight - 460),
                    width: 40
                }, 800, function () {
                    $(this).hide();
                })
                $('.six-box').animate({
                    marginLeft: -210,
                }, 800, function () {
                    $(this).animate({
                        bottom: 5
                    }, 800, function () {
                        $('.six-add').fadeIn();
                        $('.section6').animate({
                            backgroundPositionX: '100%'
                        }, 2000, function () {
                            $('.six-man').show().animate({
                                bottom: 117,
                                width: 252
                            }, 500, function () {
                                $('.six-man').animate({
                                    transform: 'none',
                                    right: 568,
                                    marginRight: 0
                                }, 400, function () {
                                    $('.six-door').fadeIn(function () {
                                        $('.six-woman').fadeIn(function () {
                                            $('.six-get').fadeIn();
                                            $('.six-words').show().animate({
                                                marginLeft: -100
                                            }, 500)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        }
    })
})