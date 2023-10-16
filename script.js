$(function () {
    // mv
    $(".slider")
        // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
        .on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
        })
        // 通常のオプション
        .slick({
        autoplay: true, // 自動再生ON
        fade: true, // フェードON
        infinite: true, // 無限ループ
        arrows: false, // 矢印OFF
        speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
        autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
        pauseOnFocus: false, // フォーカスで一時停止OFF
        pauseOnHover: false, // マウスホバーで一時停止OFF
        })
        .on({
            // スライドが移動する前に発生するイベント
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                // 表示されているスライドに"add-animation"のclassをつける
                $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
                // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
                $(".slick-slide", this).eq(currentSlide).addClass("remove-animation")
            },
            // スライドが移動した後に発生するイベント
            afterChange: function () {
                // 表示していないスライドはアニメーションのclassを外す
                $("remove-animation", this).removeClass("remove-animation add-animation");
            },
        });

    // reserve
    $(".reserve").on("mouseover", function() {
        $(".reserve-info").css("left","100px")
    });
    $(".reserve").on("mouseleave", function() {
        $(".reserve-info").css("left","-300px")
    });

    // menu
    $(window).on("scroll", function () {
        const open = $(".open");
        const height = $(window).height();
        if ($(this).scrollTop() > height - 200) {
            open.css("color","#a16900");
        } else {
            open.css("color","#eee");
        }
    });
    function isBackgroundWhite(element) {
        const backgroundColor = element.css("background-color");
        return backgroundColor === "rgb(255,255,255)" || backgroundColor === "#ffffff";
    }

    // contents
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.wrapper', { delay: 200 });
    // autoplay
    $(".autoplay").slick({
        dots: true, // ドットインジケーターの表示
        slidesToShow: 3, // 表示するスライド数
        slidesToScroll: 1, // １スクロールで動くスライド数
        autoplay: true, // 自動再生ON
        autoplaySpeed: 2000, // 自動再生速度4000ミリ秒
        variableWidth: true,
    });   
});