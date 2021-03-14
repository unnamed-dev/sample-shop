!(function () {
  "use strict";
  // 即時関数の中にコードを書いていく (HTMLの準備を待たずに実行...?)
  console.log("hogeeeee_1");
  //alert('javascript');

  if (document.querySelector(".nav-menu")) {
    // 要素 コピー(モバイル用にメニュー部分の要素をコピー)
    var mobile_nav = document.querySelector(".nav-menu").cloneNode(true);
    // コピーした要素に classを追加 (class 一括編集)
    mobile_nav.className = "mobile-nav d-lg-none";

    // 最後尾 追加
    document.querySelector("body").appendChild(mobile_nav);

    // body要素の 先頭 追加(モバイル用 Toggle メニュー アイコン)
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );

    // body要素の 最後尾 追加(モバイル用 メニュー 背景透過)
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="mobile-nav-overly"></div>'
    );
    // document.body.insertAdjacentHTML('beforeend','<div id="hoge" class="mobile-nav-overly"></div>');

    // var parent = document.querySelector("body");
    // const elementBtn = '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>';
    // parent.insertBefore(elementBtn, parent.firstChild);

    // 没のやつ
    // var mobile_nav = document.querySelector(".nav-menu").cloneNode().classList.add("mobile-nav d-lg-none");
    // var mobile_nav = document.querySelector(".nav-menu").cloneNode(true).classList.add( "mobile-nav", "d-lg-none");
    // var mobile_nav = document.querySelector(".nav-menu").cloneNode(true).className("mobile-nav d-lg-none");
    // var mobile_nav = document.querySelector(".nav-menu").cloneNode(true).classList = "mobile-nav d-lg-none";
    // clone あと分割作戦
    // mobile_nav.classList.add( "mobile-nav", "d-lg-none");

    // Toggle 押下時の処理
    document
      .querySelector(".mobile-nav-toggle")
      .addEventListener("click", function () {
        //
        document.body.classList.toggle("mobile-nav-active");

        // if (document.querySelector(".mobile-nav-toggle i").classList.contains("icofont-navigation-menu")) {
        //   document.querySelector(".mobile-nav-toggle i").classList.toggle("icofont-navigation-menu icofont-close");
        // }

        // モバイル用 表示・非表示 切り替え (モバイル用 Toggle メニュー アイコン)
        document
          .querySelector(".mobile-nav-toggle i")
          .classList.toggle("icofont-navigation-menu");

        // モバイル用 表示・非表示 切り替え (モバイル用 Toggle メニュー閉じる アイコン)
        document
          .querySelector(".mobile-nav-toggle i")
          .classList.toggle("icofont-close");

        // モバイル用 メニュー 背景透過 表示・非表示 切り替え
        // document.getElementById("hoge").classList.toggle("mobile-nav-overly");
        // document.querySelector(".mobile-nav-overly").classList.toggle("mobile-nav-overly");
        if (
          document.querySelector(".mobile-nav-overly").style.display == "block"
        ) {
          //非表示
          document.querySelector(".mobile-nav-overly").style.display = "none";
        } else {
          //表示
          document.querySelector(".mobile-nav-overly").style.display = "block";
        }
      });

    // Toggle押下後、Toggle メニュー閉じる押下以外の場合の処理  んー　なんか違うかも
    // Toggle押下後、メニュー選択時、メニュー非表示　でもない　それはまた別の処理っぽい
    // Toggle押下後、メニュー選択時、メニュー以外を選択した時に、画面復帰 、、、明示的に背景透過 をクリックしたら　画面復帰の方が良さげ？
    // Toggle押下後、メニュー選択時、背景透過 をクリックしたら画面復帰
    document.addEventListener("click", function (e) {
      //
      // console.log("hogeeeee");
      //
      // var container = $(".mobile-nav, .mobile-nav-toggle");
      // var container = document.querySelectorAll(".mobile-nav, .mobile-nav-toggle");

      document
        .querySelectorAll(".mobile-nav, .mobile-nav-toggle")
        .forEach(function (el, i) {
          // if (e.target.contains(el)){
          //   //
          //   console.log("hogeeeee一致: " + i);
          // } else {
          //   //
          //   console.log("hogeeeee不一致: " + i);
          // }
          // if (e.target.matches(el.className)){
          //   //
          //   console.log("hogeeeee一致: " + i);
          // } else {
          //   //
          //   console.log("hogeeeee不一致: " + i);
          // }
        });

      // if (container.matches(e.target)) {
      //   //
      //   console.log("hogeeeee一致");
      // } else {
      //   //
      //   console.log("hogeeeee不一致");
      // }
    });
  }

  document.querySelectorAll(".mobile-nav a").forEach(function (el, i) {
    el.addEventListener("click", function () {
      //
      //
      if (document.body.classList.contains("mobile-nav-active")) {
        console.log("hogeeeee: " + i);
        //
        document.body.classList.toggle("mobile-nav-active");
        // モバイル用 表示・非表示 切り替え (モバイル用 Toggle メニュー アイコン)
        document
          .querySelector(".mobile-nav-toggle i")
          .classList.toggle("icofont-navigation-menu");
        // モバイル用 表示・非表示 切り替え (モバイル用 Toggle メニュー閉じる アイコン)
        document
          .querySelector(".mobile-nav-toggle i")
          .classList.toggle("icofont-close");

        // モバイル用 メニュー 背景透過 表示・非表示 切り替え
        if (
          document.querySelector(".mobile-nav-overly").style.display == "block"
        ) {
          //非表示
          document.querySelector(".mobile-nav-overly").style.display = "none";
        } else {
          //表示
          document.querySelector(".mobile-nav-overly").style.display = "block";
        }
      }

      //
      //
    });
  });

  // carousel
  /** 
  var myCarousel = document.querySelector('#carouselExampleInterval')
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: true
    })
  **/

  // toggle 押下処理
  // document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
  //   document.querySelector('.offcanvas-collapse').classList.toggle('open')
  // });

  //
  window.addEventListener("load", function () {
    // HTMLや画像など他の全てのデータの読み込みが完了した時に実行される...?
    console.log("hogeeeee_2");

    // 初期処理
    aos_init();
    swiper_init();

    // 読み込み時に TOP戻りアイコン fade class 設定
    icon_scroll_fade();

    // 読み込み時に 作品集(ポートフォリオ)を読み込んでおく
    var grid = new Muuri(".portfolio-container");

    var flters = document.querySelectorAll("#portfolio-flters li");
    flters.forEach(function (item) {
      // フィルタ選択のクリックイベントを各要素分 繰り返し割り当て
      item.addEventListener("click", function () {
        // 以下はクリック時の処理

        // 「filter-active」classの付け替え
        var reFlters = document.querySelectorAll("#portfolio-flters li");
        reFlters.forEach(function (element) {
          element.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        // フィルタ実施
        grid.filter(this.dataset.filter);
        
      });
    });

    /** 
    // フィルタ条件 クリック・選択した時
    // var target = document.querySelector('#portfolio-flters li');
    var target = document.querySelectorAll('#portfolio-flters li');
    target.addEventListener('click', function() {
      console.log('hogeeeee_3');
      // クリックされた時の処理を書く
      document.querySelectorAll("#portfolio-flters li").classList.remove("filter-active");
      this.classList.add("filter-active");

      grid.filter(this.dataset.filter);

      aos_init();
    });
    **/
  });

  // hoge
  // window.addEventListener('load', function() {
  //   aos_init();
  // });

  // scroll アイコン(back-to-top)
  window.addEventListener("scroll", function () {
    // console.log("縦スクロール：" + window.scrollY);
    icon_scroll_fade();
  });

  // hoge
  function icon_scroll_fade() {
    //
    if (window.scrollY > 100) {
      // console.log("縦スクロール ●●●●●：" + window.scrollY);
      //TOP戻りアイコン 不要となるclass事前に削除
      document.querySelector(".back-to-top").classList.remove("fadeout");
      //TOP戻りアイコン 表示 を設定
      document.querySelector(".back-to-top").classList.add("fadein");
    } else {
      // console.log("縦スクロール ▲▲▲▲▲：" + window.scrollY);
      //TOP戻りアイコン 不要となるclass事前に削除
      document.querySelector(".back-to-top").classList.remove("fadein");
      //TOP戻りアイコン 非表示 を設定
      document.querySelector(".back-to-top").classList.add("fadeout");
    }
  }

  // hoge
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  // hoge
  function swiper_init() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
})();
