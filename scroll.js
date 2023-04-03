window.onload = function () {
	// Sourced from https://webtips.dev/webtips/javascript/how-to-clamp-numbers-in-javascript
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

	const theIntro = document.getElementById("intro__the");
	const theFall = document.getElementById("fall__the");

  // On load, do this...
  function init() {
		/* Intro Events */
    enterView({
      selector: ".intro__collide",
      offset: 0.4,
      progress: (el, progress) => {
        const end = el.querySelector(".intro--end");
				end.style.transform = `translateY(${(-3.97) * (progress * 100)}px)`;
      },
    });

		enterView({
      selector: ".intro__fall",
      offset: 0,
			enter: (el) => {
				theIntro.style.position = "relative";
			},
      progress: (el, progress) => {
				theIntro.style.top = `${(10) * (progress * 100)}px`;
				theIntro.style.opacity = 1 - progress;
      },
    });

		/* Fall Events */
		enterView({
      selector: ".fall",
      offset: 1,
      progress: (el, progress) => {
				theFall.style.top = `${(-5) + (progress * 65)}em`;
				if ((progress === 1) || (progress === 0)) {
					theFall.style.opacity = 0;
				} else {
					theFall.style.opacity = 1;
				}
      },
    });
  }

  init();
};
