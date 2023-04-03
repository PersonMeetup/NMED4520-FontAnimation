// Sourced from https://webtips.dev/webtips/javascript/how-to-clamp-numbers-in-javascript
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// On load, do this...
function init() {
	/* Intro Events */
	enterView({
		selector: ".intro__collide",
		offset: 0.35,
		progress: (el, progress) => {
			el.style.gap = `${10 * (1 - progress)}em`;

			const end = el.querySelector(".intro--end");
			end.style.transform = `translateY(${-0.8 * progress}em)`;
		},
	});

	enterView({
		selector: ".intro__fall",
		offset: 0.3495,
		progress: (el, progress) => {
			const theIntro = document.getElementById("intro__the");

			theIntro.style.top = `${10 * (progress * 100)}px`;
			theIntro.style.opacity = 1 - progress;
			theIntro.style.rotate = `${40 * progress}deg`;
		},
	});

	/* Fall Events */
	enterView({
		selector: ".fall",
		offset: 1,
		progress: (el, progress) => {
			const theFall = document.getElementById("fall__the");

			theFall.style.top = `${-15 + progress * 160}vh`;
			theFall.style.rotate = `${-1.5 + 2 * progress}turn`;

			if (progress >= 0.75 || progress === 0) {
				theFall.style.opacity = 0;
			} else {
				theFall.style.opacity = 1;
			}
		},
	});
}

init();
