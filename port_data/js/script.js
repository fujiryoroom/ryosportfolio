// グラフの作成
var pieData = {
  labels: ["", ""],
  series: [75, 20],
};

var pieOptions = {
  width: "100%",
  height: "150px",
};

new Chartist.Pie(".pie-chart_1", pieData, pieOptions);

var pieData = {
  labels: ["", ""],
  series: [70, 30],
};

var pieOptions = {
  width: "100%",
  height: "150px",
};

new Chartist.Pie(".pie-chart_2", pieData, pieOptions);

var pieData = {
  labels: ["", ""],
  series: [70, 40],
};

var pieOptions = {
  width: "100%",
  height: "150px",
};

new Chartist.Pie(".pie-chart_3", pieData, pieOptions);

// ページトップにスクロール
$("#page-top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 500);
  return false;
});

// スライドメニュー
const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".main-nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
});

// ハンバーガー
$(".btn-menu").click(function () {
  $(this).toggleClass("active");
});

// ふわっと
function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});
