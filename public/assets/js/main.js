/* ==============
 ========= js documentation ==========================

 * template name: Xfolio
 * version: 1.0
 * description: Personal Portfolio & CV Resume HTML5 Template
 * author: wowtheme7
 * author-url: https://themeforest.net/user/wowtheme7

    ==================================================

     01. preloader
     -------------------------------------------------
     02. custom cursor
     -------------------------------------------------
     03. scroll to top with progress
     -------------------------------------------------
     04. add active class to the current link
     -------------------------------------------------
     05. mobile menu
     -------------------------------------------------
     06. fixed header on scroll
     -------------------------------------------------
     07. follow cursor animated button
     -------------------------------------------------
     08. button text split animation
     -------------------------------------------------
     09. portfolio thumb
     -------------------------------------------------
     10. skill tab
     -------------------------------------------------
     11. add active class to the skill tab
     -------------------------------------------------
     12. skill two tab
     -------------------------------------------------
     13. add active to the pricing itemr
     -------------------------------------------------
     14. pricing tab
     -------------------------------------------------
     15. pricing four tab
     -------------------------------------------------
     16. testimonial slider
     -------------------------------------------------
     17. testimonial two slider
     -------------------------------------------------
     18. testimonial four slider
     -------------------------------------------------
     19. instagram feed slider
     -------------------------------------------------
     20. video popup
     -------------------------------------------------
     21. add active class to the service two items
     -------------------------------------------------
     22. service four accordion
     -------------------------------------------------
     23. add active class to the service five items
     -------------------------------------------------
     24. skill four progress
     -------------------------------------------------
     25. portfolio four slider
     -------------------------------------------------
     26. coming soon
     -------------------------------------------------
     27. toggle comment section
     -------------------------------------------------
     28. footer copyright year
     -------------------------------------------------
     29. add active class to the footer nav
     -------------------------------------------------
	 30. odometer counter
     -------------------------------------------------
     31. vanilla tilt animation
     -------------------------------------------------
	 32. nice select
     -------------------------------------------------
     33. register gsap
     -------------------------------------------------
     34. gsap null config
     -------------------------------------------------
     35. target section with gsap
     -------------------------------------------------
     36. smooth scroll
     -------------------------------------------------
     37. hero section animation
     -------------------------------------------------
     38. hero section two animation
	 -------------------------------------------------
     39. hero section three animation
     -------------------------------------------------
     40. hero section five animation
	 -------------------------------------------------
     41. banner animation	 
	 -------------------------------------------------
     42. about two animation	 
	 -------------------------------------------------
     43. about me animation	 
	 -------------------------------------------------
     44. scale items gsap animation	 
	 -------------------------------------------------
     45. parallax image with gsap 
	 -------------------------------------------------
     46. button bounce animation	 
	 -------------------------------------------------
     47. pulse text animation
	 -------------------------------------------------
     48. progress bar	 
	 -------------------------------------------------
     49. fade up, left, right, bottom animation
	 -------------------------------------------------
     50. title animation
	 -------------------------------------------------
     51. template options

    ==================================================
============== */

(function ($) {
	"use strict";

	jQuery(function () {
		let device_width = window.innerWidth;
		let initialScroll = $(window).scrollTop();

		/**
		 * ======================================
		 * 01. preloader
		 * ======================================
		 */
		if ($("#preloader").length) {
			$("#preloader").delay(1600).fadeOut();
			setTimeout(function () {
				$(".preloader-bg-one").css("transform", "translateY(-100%)");
				$(".preloader-bg-two").css("transform", "translateY(100%)");
				$(".txt-loading").css("opacity", 0);
			}, 1000);
		}

		/**
		 * ======================================
		 * 02. custom cursor
		 * ======================================
		 */
		if ($(".mouseCursor").length > 0) {
			function itCursor() {
				var myCursor = jQuery(".mouseCursor");
				if (myCursor.length) {
					if ($("body")) {
						const e = document.querySelector(".cursor-inner"),
							t = document.querySelector(".cursor-outer");
						let n,
							i = 0,
							o = !1;
						(window.onmousemove = function (s) {
							o ||
								(t.style.transform =
									"translate(" + s.clientX + "px, " + s.clientY + "px)"),
								(e.style.transform =
									"translate(" + s.clientX + "px, " + s.clientY + "px)"),
								(n = s.clientY),
								(i = s.clientX);
						}),
							$("body").on(
								"mouseenter",
								"button:not(.not-cursor), a:not(.not-cursor), .cursor-pointer",
								function () {
									e.classList.add("cursor-hover"),
										t.classList.add("cursor-hover");
								}
							),
							$("body").on(
								"mouseleave",
								"button, a, .cursor-pointer",
								function () {
									($(this).is("a", "button") &&
										$(this).closest(".cursor-pointer").length) ||
										(e.classList.remove("cursor-hover"),
										t.classList.remove("cursor-hover"));
								}
							),
							(e.style.visibility = "visible"),
							(t.style.visibility = "visible");

						// text view cursor
						$("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
							"mouseenter",
							function () {
								$(".mouseCursor").addClass("cursor-big");
							}
						);

						$("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
							"mouseleave",
							function () {
								$(".mouseCursor").removeClass("cursor-big");
							}
						);

						// no cursor
						$(".not-cursor").on("mouseenter", function () {
							$(".mouseCursor").addClass("not-cursor-outer");
						});

						$(".not-cursor").on("mouseleave", function () {
							$(".mouseCursor").removeClass("not-cursor-outer");
						});
					}
				}
			}
			itCursor();
		}

		/**
		 * ======================================
		 * 03. scroll to top with progress
		 * ======================================
		 */
		if ($(".progress-wrap").length > 0) {
			var progressPath = document.querySelector(".progress-wrap path");
			var pathLength = progressPath.getTotalLength();
			progressPath.style.transition = progressPath.style.WebkitTransition =
				"none";
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition =
				"stroke-dashoffset 10ms linear";
			var updateProgress = function () {
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress = pathLength - (scroll * pathLength) / height;
				progressPath.style.strokeDashoffset = progress;
			};
			updateProgress();
			$(window).scroll(updateProgress);
			var offset = 50;
			var duration = 1500;
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > offset) {
					$(".progress-wrap").addClass("active-progress");
				} else {
					$(".progress-wrap").removeClass("active-progress");
				}
			});
			$(".progress-wrap").on("click", function (event) {
				event.preventDefault();
				$("html, body")
					.stop()
					.css("scroll-behavior", "auto")
					.animate(
						{
							scrollTop: 0,
						},
						{
							duration: 1500,
							easing: "swing",
							complete: function () {
								$("html, body").css("scroll-behavior", "smooth");
							},
						}
					);
				return false;
			});

			if (initialScroll >= 50) {
				$(".progress-wrap").addClass("active-progress");
			}
		}

		/**
		 * ======================================
		 * 04. add active class to the current link
		 * ======================================
		 */

		function dynamicCurrentMenuClass(selector) {
			const currentPath = window.location.pathname.replace(/^\//, "");

			selector.find("li").removeClass("active");
			selector
				.find(".navbar__dropdown-label")
				.removeClass("navbar__item-active");

			let matchFound = false;

			selector.find("li").each(function () {
				if (matchFound) return;

				const anchor = $(this).find("a").first();
				let href = anchor.attr("href");

				if (!href || href === "#") return;

				href = href.replace(/^\//, "");

				if (
					href === currentPath ||
					(currentPath === "" && href === "index.html")
				) {
					$(this).addClass("active");
					matchFound = true;
				}
			});

			selector
				.find(".navbar__sub-menu .active")
				.parents("li")
				.addClass("active");
		}

		if ($("header").length) {
			dynamicCurrentMenuClass($("header"));
		}

		/**
		 * ======================================
		 * 05. mobile menu
		 * ======================================
		 */
		if ($(".mobile-menu").length > 0) {
			var mobileMenuContent = $(".navbar__menu").html();
			$(".mobile-menu__list").append(mobileMenuContent);

			$(".mobile-menu .navbar__dropdown-label").on("click", function () {
				$(this).parent().siblings().find(".navbar__sub-menu").slideUp(500);
				$(this)
					.parent()
					.siblings()
					.find(".navbar__dropdown-label")
					.removeClass("navbar__item-active");
				$(this).siblings(".navbar__sub-menu").slideToggle(500);
				$(this).toggleClass("navbar__item-active");
			});
		}

		$(".open-offcanvas-nav").on("click", function () {
			$(this).addClass("open-offcanvas-nav-active");
			$(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
			$(".nav-fade").each(function (i) {
				$(this).css("animation-delay", 0.25 * 1 * i + "s");
			});
			$(".mobile-menu").addClass("show-menu");
			$(".mobile-menu__wrapper").removeClass("nav-fade-active");
		});

		$(
			".close-mobile-menu, .mobile-menu__backdrop, .mobile-menu .navbar__item:not(.navbar__item--has-children) > a, .mobile-menu__social"
		).on("click", function () {
			$(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
			$(".mobile-menu").removeClass("show-menu");
			$(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
			$(".mobile-menu__wrapper").addClass("nav-fade-active");
			$(".mobile-menu .navbar__dropdown-label").removeClass(
				"navbar__item-active"
			);
			$(".mobile-menu .navbar__sub-menu").slideUp(0);
		});

		$(".navbar__item.navbar__item--has-children > a").on("click", function (e) {
			e.preventDefault();
		});

		$(window).on("resize", function () {
			// sidebar info
			$(".off-canvas").removeClass("off-canvas-active");
			$(".off-canvas-backdrop").removeClass("off-canvas-backdrop-active");

			// mobile menu
			$(".mobile-menu").removeClass("show-menu");
			$(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
			$(".mobile-menu__wrapper").addClass("nav-fade-active");
			$(".mobile-menu .navbar__dropdown-label").removeClass(
				"navbar__item-active"
			);
			$(".mobile-menu .navbar__sub-menu").slideUp(0);
			$(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
		});

		/**
		 * ======================================
		 * 06. fixed header on scroll
		 * ======================================
		 */
		$(window).on("scroll", function () {
			var scroll = $(window).scrollTop();
			if (scroll < 150) {
				$(".header").removeClass("sticky-header");
			} else {
				$(".header").addClass("sticky-header");
			}
		});

		if (initialScroll >= 100) {
			$(".header").addClass("sticky-header");
		}

		/**
		 * ======================================
		 * 07. follow cursor animated button
		 * ======================================
		 */
		if ($(".btn-anim").length > 0) {
			const ELEMENTS = $(".btn-anim");

			ELEMENTS.each(function () {
				const element = $(this);

				element.on("mouseenter", function (e) {
					const span = element.find("span");
					span.css({
						left: e.pageX - element.offset().left + "px",
						top: e.pageY - element.offset().top + "px",
					});
				});

				element.on("mouseleave", function (e) {
					const span = element.find("span");
					span.css({
						left: e.pageX - element.offset().left + "px",
						top: e.pageY - element.offset().top + "px",
					});
				});
			});
		}

		/**
		 * ======================================
		 * 08. button text split animation
		 * ======================================
		 */
		if ($(".btn-animated-text").length) {
			$(".btn-animated-text").each(function () {
				var $btn = $(this);
				var text = $btn.attr("data-text");
				$btn.empty();

				if (!text) return;

				for (var i = 0; i < text.length; i++) {
					var char = text[i] === " " ? "\u00A0" : text[i];
					var $span = $("<span></span>").attr("data-text", char).text(char);
					$btn.append($span);
				}
			});
		}

		/**
		 * ======================================
		 * 09. portfolio thumb
		 * ======================================
		 */

		if ($(".portfolio__single").length > 0) {
			$(".portfolio__single").first().find(".portfolio__thumb").show();

			$(".portfolio__single").on("mouseenter", function () {
				const $thumb = $(this).find(".portfolio__thumb");

				if (!$thumb.is(":visible")) {
					$(".portfolio__thumb").slideUp();
					$thumb.stop(true, true).slideDown();
				}
			});
		}

		/**
		 * ======================================
		 * 10. skill tab
		 * ======================================
		 */

		if ($(".skill").length > 0) {
			$(".skill__tab-single").hide();
			$(".skill__tab-single:first").show();

			$(".skill-tab-btn").on("click", function () {
				$(".skill-tab-btn").removeClass("active");
				$(this).addClass("active");
				$(".skill__tab-single").hide();
				var target = $(this).data("target");
				$(target).fadeIn(500);
				return false;
			});
		}

		/**
		 * ======================================
		 * 11. add active class to the skill tab
		 * ======================================
		 */
		if ($(".skill").length > 0) {
			$(".skill__tab").on("mouseover", function () {
				$(".skill__tab").removeClass("active");
				$(this).addClass("active");
			});
		}

		/**
		 * ======================================
		 * 12. skill two tab
		 * ======================================
		 */

		if ($(".skill-two").length > 0) {
			$(".skill-two__item").hide();
			$(".skill-two__item:first").show();

			$(".skill-tab-btn").on("click", function () {
				$(".skill-tab-btn").removeClass("active");
				$(this).addClass("active");
				$(".skill-two__item").hide();
				var target = $(this).data("target");
				$(target).fadeIn(500);
				return false;
			});
		}

		/**
		 * ======================================
		 * 13. add active to the pricing item
		 * ======================================
		 */
		$(".pricing__single").on("mouseover", function () {
			$(".pricing__single").removeClass("active");
			$(this).addClass("active");
		});

		/**
		 * ======================================
		 * 14. pricing tab
		 * ======================================
		 */

		if ($(".pricing__tab-btns").length > 0) {
			$(".pricing__tab-single").hide();
			$(".pricing__tab-single:first").show();

			$(".pricing-tab-btn").on("click", function () {
				$(".pricing-tab-btn").removeClass("pricing-active");
				$(this).addClass("pricing-active");
				$(".pricing__tab-single").hide();
				var target = $(this).data("target");
				$(target).fadeIn(500);
				return false;
			});
		}

		/**
		 * ======================================
		 * 15. pricing four tab
		 * ======================================
		 */

		if ($(".pricing-four").length > 0) {
			$(".pricing-four__item").hide();
			$(".pricing-four__item:first").show();

			$(".pr-tab-btn").on("click", function () {
				$(".pr-tab-btn").removeClass("active");
				$(this).addClass("active");
				$(".pricing-four__item").hide();
				var target = $(this).data("target");
				$(target).fadeIn(500);
				return false;
			});
		}

		/**
		 * ======================================
		 * 16. testimonial slider
		 * ======================================
		 */

		if ($(".testimonial__slider").length > 0) {
			const totalSlides = $(".testimonial__slider .swiper-slide").length;
			const enableLoop = totalSlides > 3;

			var testimonialSlider = new Swiper(".testimonial__slider", {
				slidesPerView: "auto",
				loop: enableLoop,
				speed: 6000,
				spaceBetween: 24,
				centeredSlides: true,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
			});
		}

		if ($(".testimonial__slider-rtl").length > 0) {
			const totalSlidesRtl = $(".testimonial__slider-rtl .swiper-slide").length;
			const enableLoopRtl = totalSlidesRtl > 3;
			var testimonialSliderRtl = new Swiper(".testimonial__slider-rtl", {
				slidesPerView: "auto",
				loop: enableLoopRtl,
				speed: 6000,
				spaceBetween: 24,
				centeredSlides: true,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
			});
		}

		/**
		 * ======================================
		 * 17. testimonial two slider
		 * ======================================
		 */

		if ($(".testimonial-two-slider").length > 0) {
			const totalSlidesTwo = $(".testimonial__slider-rtl .swiper-slide").length;
			const enableLoopTwo = totalSlidesTwo > 3;
			var testimonialTwoSlider = new Swiper(".testimonial-two-slider", {
				slidesPerView: "auto",
				loop: enableLoopTwo,
				speed: 1000,
				spaceBetween: 24,
				centeredSlides: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
			});
		}

		/**
		 * ======================================
		 * 18. testimonial four slider
		 * ======================================
		 */

		if ($(".testimonial-four").length > 0) {
			var testimonialFourSlider = new Swiper(".testimonial-four-slider", {
				loop: true,
				speed: 1000,
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0,
				effect: "fade",
				fadeEffect: {
					crossFade: true,
				},
				autoplay: {
					delay: 6000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".next-testimonial",
					prevEl: ".prev-testimonial",
				},
			});
		}

		/**
		 * ======================================
		 * 19. instagram feed slider
		 * ======================================
		 */

		if ($(".insta-feed__slider").length > 0) {
			const totalSlidesInsta = $(".insta-feed__slider .swiper-slide").length;
			const enableLoopInsta = totalSlidesInsta > 3;
			var InstaFeedSlider = new Swiper(".insta-feed__slider", {
				slidesPerView: "auto",
				loop: enableLoopInsta,
				speed: 6000,
				spaceBetween: 24,
				centeredSlides: true,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				},
			});
		}

		/**
		 * ======================================
		 * 20. video popup
		 * ======================================
		 */
		if (document.querySelector(".open-video-popup") !== null) {
			$(".open-video-popup").magnificPopup({
				disableOn: 768,
				type: "iframe",
				mainClass: "mfp-fade",
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
			});
		}

		/**
		 * ==============================================
		 * 21. add active class to the service two items
		 * ==============================================
		 */

		if ($(".service-two").length > 0) {
			$(".service__single").on("mouseover", function () {
				$(".service__single").removeClass("active");
				$(this).addClass("active");
			});
		}

		/**
		 * ======================================
		 * 22. service four accordion
		 * ======================================
		 */

		if ($(".service-four").length > 0) {
			$(".service-four__intro").on("click", function () {
				const $this = $(this);
				const $item = $this.next(".service-four__item");

				$(".service-four__item").not($item).slideUp();
				$(".service-four__intro").not($this).removeClass("active");

				$item.slideToggle();
				$this.toggleClass("active");
			});

			const $firstIntro = $(".service-four__intro").first();
			const $firstItem = $firstIntro.next(".service-four__item");

			$firstIntro.addClass("active");
			$firstItem.show();
		}

		/**
		 * ================================================
		 * 23. add active class to the service five items
		 * ================================================
		 */

		if ($(".service-five").length > 0) {
			$(".service-five__single").on("mouseover", function () {
				$(".service-five__single").removeClass("service-five__single-active");
				$(this).addClass("service-five__single-active");
			});
		}

		/**
		 * ======================================
		 * 24. skill four progress
		 * ======================================
		 */
		function progress_bar() {
			var speed = 30;
			var items = $(".skill-four__single");

			items.each(function () {
				var $this = $(this);

				$this.isInViewport(function (status) {
					if (status === "entered" && !$this.hasClass("animated")) {
						$this.addClass("animated");

						var progressBar = $this.find(".progress-bar");
						var progressValue = $this.find(".progress-value");
						var target = parseInt(progressBar.data("progress"), 10);
						var i = 0;

						var count = setInterval(function () {
							if (i <= target) {
								progressBar.css("width", i + "%");
								progressValue.text(i + "%");
								i++;
							} else {
								clearInterval(count);
							}
						}, speed);
					}
				});
			});
		}

		progress_bar();

		/**
		 * ======================================
		 * 25. portfolio four slider
		 * ======================================
		 */

		var portfolioFourSlider = new Swiper(".portfolio-four-slider", {
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
			effect: "fade",

			on: {
				init: function () {
					updateSlideNumbers(this);
				},
				slideChange: function () {
					updateSlideNumbers(this);
				},
			},
		});

		function updateSlideNumbers(swiper) {
			var wrapper = swiper.el.querySelector(".swiper-wrapper");

			if (!wrapper) return;

			var realSlides = wrapper.querySelectorAll(
				".swiper-slide:not(.swiper-slide-duplicate)"
			).length;

			var currentIndex = swiper.realIndex + 1;

			$(".current-slide-number").text(currentIndex);
			$(".full-slides-number").text(realSlides);
		}

		/**
		 * ======================================
		 * 26. coming soon
		 * ======================================
		 */
		if ($(".clock").length > 0) {
			const hourMarkersContainer = document.querySelector(".hour-markers");
			for (let i = 0; i < 12; i++) {
				const marker = document.createElement("div");
				marker.classList.add("hour-marker");
				const rotation = i * 30;
				marker.style.transform = `rotate(${rotation}deg) translateY(-216.25px)`;

				const hourText = document.createElement("span");
				hourText.textContent = i === 0 ? "12" : i;
				hourText.style.transform = `rotate(-${rotation}deg)`;
				marker.appendChild(hourText);

				hourMarkersContainer.appendChild(marker);
			}

			const hourHand = document.querySelector(".hour-hand");
			const minuteHand = document.querySelector(".minute-hand");
			const secondHand = document.querySelector(".second-hand");

			function setClock() {
				const now = new Date();
				const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
				const minutes = now.getMinutes() + seconds / 60;
				const hours = (now.getHours() % 12) + minutes / 60;

				const secondsDeg = (seconds / 60) * 360;
				const minutesDeg = (minutes / 60) * 360;
				const hoursDeg = (hours / 12) * 360;

				hourHand.style.transform = `rotate(${hoursDeg}deg)`;
				minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
				secondHand.style.transform = `rotate(${secondsDeg}deg)`;
			}

			setInterval(setClock, 50);
			setClock();

			const countdownElement = document.querySelector(".time-countdown");
			const dayElement = countdownElement.querySelector(".day");
			const hourElement = countdownElement.querySelector(".hour");
			const minuteElement = countdownElement.querySelector(".minute");
			const secondElement = countdownElement.querySelector(".second");

			const endDate = new Date();
			endDate.setDate(endDate.getDate() + 100);

			function updateCountdown() {
				const now = new Date();
				const timeRemaining = endDate - now;

				if (timeRemaining <= 0) {
					endDate.setDate(endDate.getDate() + 100);
				}

				const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

				dayElement.textContent = days;
				hourElement.textContent = hours < 10 ? `0${hours}` : hours;
				minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
				secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
			}

			setInterval(updateCountdown, 1000);
			updateCountdown();
		}

		/**
		 * ======================================
		 * 27. toggle comment section
		 * ======================================
		 */
		$(".comment-single").each(function () {
			$(this)
				.find(".reply-button button")
				.on("click", function () {
					var $currentComment = $(this).closest(".comment-single");
					$(".comment-single .reply-comment")
						.not($currentComment.find(".reply-comment"))
						.slideUp();
					$currentComment.find(".reply-comment").slideToggle();
					$(".comment-single .reply-button button")
						.not(this)
						.removeClass("active");
					$(this).toggleClass("active");
				});
		});

		/**
		 * ======================================
		 * 28. footer copyright year
		 * ======================================
		 */
		if ($("#copyrightYear").length > 0) {
			$("#copyrightYear").text(new Date().getFullYear());
		}

		/**
		 * ======================================
		 * 29. add active class to the footer nav
		 * ======================================
		 */

		$(".footer__list a").on("click", function () {
			$(".footer__list a").removeClass("active");
			$(this).addClass("active");
		});

		$(".footer-two__nav a").on("mouseover", function () {
			$(".footer-two__nav a").removeClass("footer-nav-active");
			$(this).addClass("footer-nav-active");
		});

		/**
		 * ======================================
		 * 30. odometer counter
		 * ======================================
		 */

		function isInViewport($el) {
			var rect = $el[0].getBoundingClientRect();
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();

			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= windowHeight &&
				rect.right <= windowWidth
			);
		}

		function triggerOdometer($el) {
			$el.html($el.data("odometer-final"));
			$el.addClass("odometer-done");
		}

		function checkAndTriggerOdometer() {
			$(".odometer").each(function () {
				var $this = $(this);
				if (!$this.hasClass("odometer-done") && isInViewport($this)) {
					triggerOdometer($this);
				}
			});
		}

		$(window).on("load scroll resize", function () {
			checkAndTriggerOdometer();
		});

		/**
		 * ======================================
		 * 31. vanilla tilt animations
		 * ======================================
		 */

		let btnTilt = document.querySelectorAll(".btn-anim");

		if (btnTilt) {
			VanillaTilt.init(document.querySelectorAll(".btn-anim"), {
				max: 25,
				speed: 3000,
				perspective: 200,
			});
		}

		let Vantilt = document.querySelectorAll(".van-tilt");

		if (Vantilt) {
			VanillaTilt.init(document.querySelectorAll(".van-tilt"), {
				max: 10,
				speed: 3000,
			});
		}
		/**
		 * ======================================
		 * 32. nice select
		 * ======================================
		 */
		$("select").niceSelect();

		/**
		 * ======================================
		 * 33. register gsap
		 * ======================================
		 */
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollSmoother,
			ScrollToPlugin,
			SplitText
		);

		/**
		 * ======================================
		 * 34. gsap null config
		 * ======================================
		 */
		gsap.config({
			nullTargetWarn: false,
		});

		/**
		 * ======================================
		 * 35. target section with gsap
		 * ======================================
		 */
		$('a[href^="#"]:not([href="#"])').on("click", function (event) {
			event.preventDefault();

			const target = $(this).attr("href");

			if ($(target).length) {
				gsap.to(window, {
					scrollTo: {
						y: $(target)[0],
						offsetY: 120,
					},
					duration: 1,
					ease: "sine.inOut",
				});
			}

			$("header").find("li").removeClass("active");
			const parentLi = $(this).closest("li");
			if (parentLi.length) {
				parentLi.addClass("active");
			}
		});

		/**
		 * ======================================
		 * 36. smooth scroll
		 * ======================================
		 */
		const smoother = ScrollSmoother.create({
			smooth: 1.35,
			effects: device_width < 1025 ? false : true,
			smoothTouch: false,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});

		/**
		 * ======================================
		 * 37. hero section animation
		 * ======================================
		 */

		if ($(".hero").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".hero",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});

				tl.to(".hero__thumb span", {
					scale: 1.2,
					rotate: -30,
					duration: 4,
				});
				tl.to(
					".hero__thumb-inner img",
					{
						y: "120px",
						duration: 4,
					},
					"<"
				);
				tl.to(
					".shape-one",
					{
						y: "240px",
						duration: 4,
					},
					"<"
				);
				tl.to(
					".shape-two",
					{
						y: "500px",
						duration: 4,
					},
					"<"
				);
			}
		}

		/**
		 * ======================================
		 * 38. hero section two animation
		 * ======================================
		 */

		if ($(".hero-two").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".hero-two",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});

				tl.to(".hero-two-thumb span", {
					scale: 1.2,
					duration: 4,
				});
				tl.to(
					".hero-two-thumb img",
					{
						y: "180px",
						duration: 4,
					},
					"<"
				);
			}
		}

		/**
		 * ======================================
		 * 39. hero section three animation
		 * ======================================
		 */

		if ($(".hero-three").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".hero-three",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});

				tl.to(".hero-three__intro h1", {
					scale: 1.6,
					duration: 5,
				});
				tl.to(
					".hero-three-thumb img",
					{
						y: "260px",
						duration: 5,
					},
					"<"
				);
			}
		}

		/**
		 * ======================================
		 * 40. hero section five animation
		 * ======================================
		 */

		if ($(".hero-five").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".hero-five",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});
				tl.to(".video-image", { scale: 1.5, duration: 4 });
				tl.to(
					".hero-five__thumb img",
					{
						scale: 1.2,
						y: "300px",
						duration: 4,
					},
					"<"
				);

				tl.to(
					".shape-three img",
					{
						y: "240px",
						duration: 4,
					},
					"<"
				);
				tl.to(
					".shape-four img",
					{
						scale: 1.7,
						duration: 4,
					},
					"<"
				);
			}
		}

		/**
		 * ======================================
		 * 41. banner animation
		 * ======================================
		 */
		if ($(".banner").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".banner",
						start: "top top",
						end: "+=20%",
						scrub: 1,
						pin: false,
					},
				});
				tl.to(".banner-bg img", {
					x: "140px",
					scale: 1.3,
					duration: 2,
				});
				tl.to(
					".banner-shape img",
					{
						scale: 1.4,
						duration: 2,
					},
					"<"
				);
			}
		}

		/**
		 * ======================================
		 * 42. about two animation
		 * ======================================
		 */

		if ($(".about-two").length > 0) {
			if (device_width >= 768) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".about-two",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});

				tl.to(".about-two__single-thumb img", {
					y: "200px",
					duration: 4,
				});
			}
		}

		/**
		 * ======================================
		 * 43. about me animation
		 * ======================================
		 */

		if ($(".about-me").length > 0) {
			if (device_width >= 992) {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".about-me",
						start: "center center",
						end: "+=100%",
						scrub: true,
						pin: false,
					},
				});

				tl.to(".about-me__thumb", {
					y: "200px",
					duration: 4,
				});
			}
		}

		/**
		 * ======================================
		 * 44. scale items gsap animation
		 * ======================================
		 */

		if ($(".scale-wrapper").length > 0) {
			if (device_width > 576) {
				$(".scale-wrapper").each(function () {
					var section = $(this);
					var fadeItems = section.find(".scale-up");

					fadeItems.each(function (index, element) {
						var delay = index * 0;

						gsap.set(element, {
							opacity: 0,
							y: 100,
							scale: 0.8,
						});

						ScrollTrigger.create({
							trigger: element,
							start: "top 100%",
							end: "bottom 20%",
							onEnter: function () {
								gsap.to(element, {
									opacity: 1,
									y: 0,
									scale: 1,
									duration: 1,
									delay: delay,
								});
							},
							once: true,
						});
					});
				});
			}
		}

		/**
		 * ======================================
		 * 45. parallax image with gsap
		 * ======================================
		 */
		var imageParallax = document.querySelectorAll(".parallax-image");
		if (imageParallax.length > 0) {
			$(".parallax-image").each(function () {
				$(this).wrap(
					'<div class="parallax-image-wrap"><div class="parallax-image-inner"></div></div>'
				);
				$(".parallax-image-wrap").css({
					overflow: "hidden",
				});

				var $animImageParallax = $(this);
				var $aipWrap = $animImageParallax.parents(".parallax-image-wrap");
				var $aipInner = $aipWrap.find(".parallax-image-inner");

				let tl_ImageParallax = gsap.timeline({
					scrollTrigger: {
						trigger: $aipWrap,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						onEnter: () => animImgParallaxRefresh(),
					},
				});
				tl_ImageParallax.to($animImageParallax, {
					yPercent: 30,
					ease: "none",
				});

				function animImgParallaxRefresh() {
					tl_ImageParallax.scrollTrigger.refresh();
				}

				let tl_aipZoomIn = gsap.timeline({
					scrollTrigger: {
						trigger: $aipWrap,
						start: "top 99%",
					},
				});
				tl_aipZoomIn.from($aipInner, {
					duration: 1.5,
					autoAlpha: 0,
					scale: 1.2,
					ease: Power2.easeOut,
					clearProps: "all",
				});
			});
		}

		/**
		 * ======================================
		 * 46. button bounce animation
		 * ======================================
		 */
		const btnWrappers = gsap.utils.toArray(".btn-wrapper");
		if (btnWrappers.length > 0) {
			btnWrappers.forEach((btn) => {
				gsap.from(btn, {
					scrollTrigger: {
						trigger: btn,
						start: "top 70%",
						toggleActions: "play none none none",
						once: true,
					},
					opacity: 0,
					y: -100,
					x: 0,
					ease: "bounce.out",
					duration: 1.2,
				});
			});
		}

		/**
		 * ======================================
		 * 47. pulse text animation
		 * ======================================
		 */

		function initSplitTextAnimation() {
			const $animatedTexts = $(".pulse-text");
			if ($animatedTexts.length === 0) return;

			gsap.set($animatedTexts, { opacity: 1 });

			$animatedTexts.each(function () {
				const $el = $(this);
				$el.css("color", "#ffffff");

				gsap.to($el, {
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: $el[0],
						start: "bottom 100%-=50px",
						once: true,
					},
				});

				const mySplitText = new SplitText($el, {
					type: "words,chars,capitalize",
				});
				const chars = mySplitText.chars;

				let folksGradient = $el.hasClass("custom-gradient")
					? chroma.scale(["#4E92E3", "#F20101"])
					: chroma.scale(["#C9F31D", "#F20101"]);

				const folksBD = gsap.timeline({
					repeat: -1,
					delay: 0.5,
					scrollTrigger: {
						trigger: $el[0],
						start: "bottom 100%-=50px",
					},
				});

				folksBD
					.to(chars, {
						duration: 0.5,
						scaleY: 0.6,
						ease: "power3.out",
						stagger: 0.04,
						transformOrigin: "center bottom",
					})
					.to(
						chars,
						{
							yPercent: -20,
							ease: "elastic",
							stagger: 0.03,
							duration: 0.8,
						},
						0.5
					)
					.to(
						chars,
						{
							scaleY: 1,
							ease: "elastic.out(2.5, 0.2)",
							stagger: 0.03,
							duration: 1.5,
						},
						0.5
					)
					.to(
						chars,
						{
							color: (i, el, arr) => folksGradient(i / arr.length).hex(),
							ease: "power2.out",
							stagger: 0.03,
							duration: 0.3,
						},
						0.5
					)
					.to(
						chars,
						{
							yPercent: 0,
							ease: "back",
							stagger: 0.03,
							duration: 0.8,
						},
						0.7
					)
					.to(chars, {
						color: "#ffffff",
						duration: 1.4,
						stagger: 0.05,
					});
			});
		}

		function initSplitTextAnimationTwo() {
			const $animatedTexts = $(".pulse-text-light");
			if ($animatedTexts.length === 0) return;

			gsap.set($animatedTexts, { opacity: 1 });

			$animatedTexts.each(function () {
				const $el = $(this);
				$el.css("color", "#060606");

				gsap.to($el, {
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: $el[0],
						start: "bottom 100%-=50px",
						once: true,
					},
				});

				// Local SplitText instance (no need to store globally)
				const mySplitText = new SplitText($el, {
					type: "words,chars,capitalize",
				});
				const chars = mySplitText.chars;

				let folksGradient = $el.hasClass("custom-gradient")
					? chroma.scale(["#4E92E3", "#F20101"])
					: chroma.scale(["#C9F31D", "#F20101"]);

				const folksBD = gsap.timeline({
					repeat: -1,
					delay: 0.5,
					scrollTrigger: {
						trigger: $el[0],
						start: "bottom 100%-=50px",
					},
				});

				folksBD
					.to(chars, {
						duration: 0.5,
						scaleY: 0.6,
						ease: "power3.out",
						stagger: 0.04,
						transformOrigin: "center bottom",
					})
					.to(
						chars,
						{
							yPercent: -20,
							ease: "elastic",
							stagger: 0.03,
							duration: 0.8,
						},
						0.5
					)
					.to(
						chars,
						{
							scaleY: 1,
							ease: "elastic.out(2.5, 0.2)",
							stagger: 0.03,
							duration: 1.5,
						},
						0.5
					)
					.to(
						chars,
						{
							color: (i, el, arr) => folksGradient(i / arr.length).hex(),
							ease: "power2.out",
							stagger: 0.03,
							duration: 0.3,
						},
						0.5
					)
					.to(
						chars,
						{
							yPercent: 0,
							ease: "back",
							stagger: 0.03,
							duration: 0.8,
						},
						0.7
					)
					.to(chars, {
						color: "#060606",
						duration: 1.4,
						stagger: 0.05,
					});
			});
		}

		document.fonts.ready.then(() => {
			initSplitTextAnimation();
			initSplitTextAnimationTwo();
		});

		/**
		 * ======================================
		 * 48. progress bar
		 * ======================================
		 */

		if ($(".progress-bar-single").length > 0) {
			$("[data-percent]").each(function () {
				$(this)
					.find(".progress-bar-percent")
					.css("width", $(this).attr("data-percent"));
				$(this)
					.find(".percent-value")
					.text($(this).attr("data-percent").replace("%", "m"));
			});

			const ax_progress_bar = document.querySelectorAll(".progress-bar-single");

			ax_progress_bar.forEach((element) => {
				const w = element.querySelector(".progress-bar-percent");
				const progressWrapper = element.querySelector(".progress-bar-wrapper");
				const target = progressWrapper.getAttribute("data-percent");

				const ax_bartl = gsap.timeline({
					defaults: {
						duration: 2,
					},
					scrollTrigger: {
						trigger: element,
					},
				});

				ax_bartl.fromTo(
					w,
					{
						width: 0,
					},
					{
						width: target,
					}
				);

				ax_bartl.fromTo(
					element.querySelector(".percent-value"),
					{
						textContent: "0m",
					},
					{
						textContent: target.replace("%", "m"),
						snap: {
							textContent: 5,
						},
					},
					"<"
				);
			});
		}

		/**
		 * ======================================
		 * 49. fade up, left, right, bottom animation
		 * ======================================
		 */

		function initScrollAnimations() {
			const animations = {
				"fade-up": { y: 30 },
				"fade-down": { y: -30 },
				"fade-left": { x: 30 },
				"fade-right": { x: -30 },
			};

			let hasAnyTargets = false;

			$.each(animations, function (className) {
				if ($(`.${className}`).length > 0) {
					hasAnyTargets = true;
					return false;
				}
			});

			if (hasAnyTargets) {
				$.each(animations, function (className, animationProps) {
					const $allItems = $(`.${className}`);

					$allItems.each(function () {
						const $el = $(this);
						const customDelay = parseFloat($el.attr("data-delay"));
						const delay = !isNaN(customDelay) ? customDelay / 1000 : 0;

						gsap.from(this, {
							scrollTrigger: {
								trigger: this,
								start: "top 90%",
								once: true,
							},
							opacity: 0,
							duration: 0.6,
							ease: "slow(0.1, 0.1, false)",
							delay: delay,
							...animationProps,
						});
					});
				});
			}
		}

		initScrollAnimations();

		/**
		 * ======================================
		 * 50. title animation
		 * ======================================
		 */
		document.fonts.ready.then(() => {
			if ($(".title-animation").length > 0) {
				let char_come = gsap.utils.toArray(".title-animation");
				char_come.forEach((char_come) => {
					let split_char = new SplitText(char_come, {
						type: "chars, words",
						lineThreshold: 0.5,
					});
					const tl2 = gsap.timeline({
						scrollTrigger: {
							trigger: char_come,
							start: "top 90%",
							end: "bottom 60%",
							scrub: false,
							markers: false,
							toggleActions: "play none none none",
						},
					});
					tl2.from(split_char.chars, {
						duration: 0.8,
						x: 40,
						autoAlpha: 0,
						stagger: 0.05,
						ease: "back.out",
					});
				});
			}
		});
		/**
		 * ======================================
		 * 51. template options
		 * ======================================
		 */
		$(".open-color").on("click", function () {
			$(this).hide();
			$(".close-color").show();
			$(".color-icon").css("right", "250px");
			$(".color-palate-inner").css({ right: "0" });
		});

		$(".close-color").on("click", function () {
			$(this).hide();
			$(".open-color").show();
			$(".color-icon").css("right", "0px");
			$(".color-palate-inner").css({ right: "-252px" });
		});

		$(".color-version li").on("click", function () {
			$(this).closest(".color-version").find("li").removeClass("active");
			$(this).addClass("active");
		});

		$(".rtl-version li").on("click", function () {
			$(this).closest(".rtl-version").find("li").removeClass("active");
			$(this).addClass("active");
		});

		$(".light-mode").on("click", function () {
			$(".page-wrapper").addClass("light-mode");
			$(".logo-ch").attr("src", "assets/images/logo-light.png");
			$(".pulse-text").hide();
			$(".pulse-text-light").show();
		});

		$(".dark-mode").on("click", function () {
			$(".page-wrapper").removeClass("light-mode");
			$(".logo-ch").attr("src", "assets/images/logo.png");
			$(".pulse-text-light").hide();
			$(".pulse-text").show();
		});

		$(".ltr-yes").on("click", function () {
			$(".page-wrapper").removeClass("rtl");
		});

		$(".ltr-no").on("click", function () {
			$(".page-wrapper").addClass("rtl");
		});
	});
})(jQuery);
