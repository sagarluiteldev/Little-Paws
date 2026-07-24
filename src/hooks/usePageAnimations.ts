import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimations() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.92,
    });

    const updateLenis = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    const mm = gsap.matchMedia();

    mm.add({
      isMobile: "(max-width: 809px)",
      isDesktop: "(min-width: 810px)"
    }, (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      /* ═══════════════════════════════════
         HERO — entrance animations
         ═══════════════════════════════════ */
      gsap.from(".hero-title .word", {
        y: 24,
        opacity: 0,
        duration: 0.68,
        stagger: 0.045,
        ease: "power3.out",
        delay: 0.18,
      });

      gsap.from(".hero-copy, .hero .paw-button", {
        y: 18,
        opacity: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.42,
      });

      gsap.from(".hero-dog", {
        y: 140,
        scale: 0.88,
        duration: 1.35,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".cloud-layer-one", {
        scale: 1.28,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.25,
      });

      gsap.from(".cloud-layer-two", {
        scale: 1.28,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.35,
      });

      gsap.from(".cloud-one", {
        x: 120,
        duration: 1.4,
        ease: "back.out(1.4)",
        delay: 0.3,
      });

      gsap.from(".cloud-two", {
        x: 160,
        y: -40,
        duration: 1.4,
        ease: "back.out(1.4)",
        delay: 0.5,
      });

      /* ═══════════════════════════════════
         HERO — scroll parallax
         ═══════════════════════════════════ */
      gsap.to(".hero-content", {
        yPercent: -18,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "60% top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-dog", {
        yPercent: 8,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      /* ═══════════════════════════════════
         INTRO SECTION — reveal + parallax
         ═══════════════════════════════════ */
      gsap.from(".intro-art", {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".intro-art", start: "top 82%" },
      });

      /* Sunglasses landing animation */
      gsap.from(".shades", {
        x: -54,
        y: -195,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: ".intro-art", start: "top 78%" },
      });

      gsap.from(".copy-block .kicker, .copy-block h2, .copy-block p, .copy-block .paw-button", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".intro .copy-block", start: "top 80%" },
      });

      /* Intro floating elements parallax */
      gsap.to(".dog-wrapper", {
        yPercent: -12,
        scrollTrigger: { trigger: ".intro-art", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".yellow-arch", {
        yPercent: 6,
        scrollTrigger: { trigger: ".intro-art", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      /* Floating bob animation */
      gsap.utils.toArray<HTMLElement>(".floaty").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 6 : -6,
          rotation: i % 2 ? 1.2 : -1.2,
          duration: 2.6 + i * 0.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

      /* ═══════════════════════════════════
         STATS BAND — counter + scale
         ═══════════════════════════════════ */
      gsap.from(".stat", {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats-band", start: "top 75%" },
      });

      document.querySelectorAll(".stat-number").forEach((el) => {
        const targetEl = el as HTMLElement;
        const targetVal = parseFloat(targetEl.dataset.target || targetEl.textContent?.replace(/[^\d.]/g, "") || "0");
        const suffix = targetEl.dataset.suffix ?? "+";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 1.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".stats-band",
            start: "top 72%",
          },
          onUpdate: () => {
            targetEl.textContent = `${Math.floor(obj.val).toLocaleString()}${suffix}`;
          },
        });
      });

      /* ═══════════════════════════════════
         WHY CHOOSE — split entry
         ═══════════════════════════════════ */
      gsap.from(".why-choose .copy-block", {
        x: -50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: ".why-choose", start: "top 75%" },
      });

      gsap.from(".why-choose .rounded-photo", {
        x: 50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: ".why-choose", start: "top 75%" },
      });

      /* ═══════════════════════════════════
         FEATURE CARDS — staggered grid
         ═══════════════════════════════════ */
      gsap.from(".why-cards .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".why-cards", start: "top 80%" },
      });

      /* Why Us feature cards entrance animation (flip and fly) */
      const cards = gsap.utils.toArray<HTMLElement>(".cloud-card");
      cards.forEach((card, i) => {
        let xVal = 0;
        let yVal = 0;
        let rotX = 0;
        let rotY = 0;

        if (i === 0 || i === 3) {
          xVal = -200;
          rotY = -90;
        } else if (i === 2 || i === 5) {
          xVal = 200;
          rotY = 90;
        } else if (i === 1) {
          yVal = -200;
          rotX = -90;
        } else if (i === 4) {
          yVal = 200;
          rotX = 90;
        }

        const delayVal = i < 3 ? (i % 3) * 0.12 : 0;
        const tl = gsap.timeline({ paused: true });
        tl.from(card, {
          x: xVal,
          y: yVal,
          rotationX: rotX,
          rotationY: rotY,
          opacity: 0,
          duration: 1.8,
          ease: "none",
        }, delayVal);

        let maxProgress = 0;
        const triggerCard = i < 3 ? cards[0] : cards[3];

        ScrollTrigger.create({
          trigger: triggerCard,
          start: "top 90%",
          end: "top 62%",
          onUpdate: (self) => {
            if (self.progress > maxProgress) {
              maxProgress = self.progress;
              gsap.to(tl, {
                totalProgress: self.progress,
                duration: 0.3,
                overwrite: "auto",
                ease: "none",
              });
            }
          },
        });
      });

      /* ═══════════════════════════════════
         ABOUT COLLAGE — depth reveal
         ═══════════════════════════════════ */
      ScrollTrigger.create({
        trigger: ".about-collage",
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      gsap.from(".about-collage .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-collage", start: "top 80%" },
      });

      if (isMobile) {
        gsap.from(".collage-img.left", {
          x: 60,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });

        gsap.from(".collage-img.center", {
          x: -60,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });

        gsap.from(".collage-img.right", {
          x: 60,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });
      } else {
        gsap.from(".collage-img.center", {
          scale: 0.85,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });

        gsap.from(".collage-img.left", {
          x: -60,
          opacity: 0,
          duration: 0.85,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });

        gsap.from(".collage-img.right", {
          x: 60,
          opacity: 0,
          duration: 0.85,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".collage-wrap", start: "top 80%" },
        });
      }

      /* Collage parallax */
      gsap.to(".collage-img.center", {
        yPercent: -6,
        scrollTrigger: { trigger: ".collage-wrap", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".collage-img.left, .collage-img.right", {
        yPercent: -3,
        scrollTrigger: { trigger: ".collage-wrap", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      /* ═══════════════════════════════════
         SERVICES — stagger cards
         ═══════════════════════════════════ */
      gsap.from(".services .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services", start: "top 80%" },
      });

      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-grid", start: "top 82%" },
      });

      /* ═══════════════════════════════════
         HOW IT WORKS — slide from right
         ═══════════════════════════════════ */
      gsap.from(".how-title .kicker, .how-title h2, .how-title img", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".how", start: "top 78%" },
      });

      gsap.from(".step-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".step-list", start: "top 80%" },
      });

      /* ═══════════════════════════════════
         REVIEWS — soft entrance + art scroll
         ═══════════════════════════════════ */
      gsap.from(".reviews .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".reviews", start: "top 80%" },
      });

      gsap.from(".review-card", {
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".review-card", start: "top 82%" },
      });

      /* Decorative ! and ?! scroll effects */
      gsap.to(".review-art.left", {
        yPercent: -20,
        rotation: -12,
        scrollTrigger: { trigger: ".reviews", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".review-art.right", {
        yPercent: 15,
        rotation: 8,
        scrollTrigger: { trigger: ".reviews", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      /* ═══════════════════════════════════
         GALLERY — slide in
         ═══════════════════════════════════ */
      gsap.from(".gallery .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery", start: "top 80%" },
      });

      gsap.from(".marquee", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery", start: "top 78%" },
      });

      /* ═══════════════════════════════════
         FAQ — stagger items
         ═══════════════════════════════════ */
      gsap.from(".faq .section-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq", start: "top 80%" },
      });

      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 82%" },
      });

      /* ═══════════════════════════════════
         CONTACT — split entry
         ═══════════════════════════════════ */
      gsap.from(".contact-copy", {
        x: -50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact", start: "top 78%" },
      });

      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact", start: "top 78%" },
      });

      /* ═══════════════════════════════════
         FOOTER — content fade + bg parallax
         ═══════════════════════════════════ */
      gsap.from(".footer-brand, .footer-links, .footer-contact", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer", start: "top 80%" },
      });

      gsap.to(".footer-bg", {
        yPercent: -8,
        scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
    });

    return () => {
      mm.revert();
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);
}
