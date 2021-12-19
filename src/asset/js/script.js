// loading animation
window.onload = function () {
	const loadingAnimation = document.getElementById("js-loading");

	loadingAnimation.classList.add("is-loaded");

	document.getElementById("js-fv").classList.add("is-show");
};

// .js-fadein
function showElementAnimation() {
	/* js-fadeInの値をelementに代入 */
	const element = document.getElementsByClassName("js-fadeIn");
	/* 要素がなかったら処理をキャンセル */
	if (!element) return;

	/* 要素が出るタイミングの調整 */
	// 要素が200px（768px以下のウィンドウサイズでは40px）分過ぎたら表示させる
	const showTiming = window.innerHeight > 768 ? 200 : 40; // 表示させるwindowのコンテンツの高さ
	const scrollY = window.pageYOffset; // Y軸へのスクロール
	const windowH = window.innerHeight; // windowのコンテンツの高さ

	/* i(element)の数分だけ繰り返す */
	for (let i = 0; i < element.length; i++) {
		const elemClientRect = element[i].getBoundingClientRect(); // 要素の寸法と位置
		const elemY = scrollY + elemClientRect.top; // スクロール分と要素の一番高い部分との足し算
		/* 表示させるwindowの高さまでスクロールしたとき */
		if (scrollY + windowH - showTiming > elemY) {
			/* is-showを追加 */
			element[i].classList.add("is-show");
			/* スクロール分が表示させる高さより上に移動したとき */
		} else if (scrollY + windowH < elemY) {
			/* 上にスクロールして再度is-showを削除 */
			element[i].classList.remove("is-show");
		}
	}
}
showElementAnimation();
window.addEventListener("scroll", showElementAnimation);
