/*  projects-injector.js
    Injects custom content into project card overlays.
    Runs after Framer hydrates. */

(function () {
  "use strict";

  var injectedCards = {};

  /* ── Shared helpers (hardcoded styles — same across all overlays) ── */

  var H = {
    fontFamily: 'RevboxHeadline, "RevboxHeadline Placeholder", sans-serif',
    fontSize: "48px",
    fontWeight: "400",
    fontVariationSettings: '"wdth" 85, "wght" 700',
    letterSpacing: "0.96px",
    color: "rgb(255, 255, 255)",
    lineHeight: "43.2px"
  };

  var B = {
    fontFamily: 'RevboxText, "RevboxText Placeholder", sans-serif',
    fontSize: "18px",
    lineHeight: "27px",
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "400"
  };

  function makeHeading(title) {
    var h = document.createElement("p");
    h.textContent = title;
    h.style.fontFamily = H.fontFamily;
    h.style.fontSize = H.fontSize;
    h.style.fontWeight = H.fontWeight;
    h.style.fontVariationSettings = H.fontVariationSettings;
    h.style.letterSpacing = H.letterSpacing;
    h.style.color = H.color;
    h.style.margin = "0";
    h.style.padding = "0";
    h.style.lineHeight = H.lineHeight;
    return h;
  }

  function makeBody(text) {
    var p = document.createElement("p");
    p.textContent = text;
    p.style.fontFamily = B.fontFamily;
    p.style.fontSize = B.fontSize;
    p.style.lineHeight = B.lineHeight;
    p.style.color = B.color;
    p.style.fontWeight = B.fontWeight;
    p.style.margin = "0";
    p.style.padding = "0";
    return p;
  }

  function makeBulletList(items) {
    var ul = document.createElement("ul");
    ul.style.margin = "0";
    ul.style.paddingLeft = "20px";
    ul.style.listStyleType = "disc";
    items.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      li.style.fontFamily = B.fontFamily;
      li.style.fontSize = B.fontSize;
      li.style.lineHeight = B.lineHeight;
      li.style.color = B.color;
      ul.appendChild(li);
    });
    return ul;
  }

  function makeSection(title) {
    var sec = document.createElement("div");
    sec.style.display = "flex";
    sec.style.flexDirection = "column";
    sec.style.gap = "16px";
    sec.style.width = "100%";
    sec.appendChild(makeHeading(title));
    return sec;
  }

  function replaceSection(el, title, buildFn) {
    el.innerHTML = "";
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.gap = "16px";
    el.appendChild(makeHeading(title));
    buildFn(el);
  }

  /* ════════════════════════════════════════════════
     CARD 1 — Cars24 Design System
     Overlay: .mynk-gU1DZ.mynk-10veyav
     Wrapper: .mynk-158lgb5
     ════════════════════════════════════════════════ */
  function injectCars24(overlay) {
    if (injectedCards.cars24) return;
    /* Find wrapper: try known class, then fall back to scrollable child */
    var wrap = overlay.querySelector(".mynk-158lgb5");
    if (!wrap) {
      var divs = overlay.querySelectorAll("div");
      for (var wi = 0; wi < divs.length; wi++) {
        if (divs[wi].children.length >= 7 && getComputedStyle(divs[wi]).overflowY === "auto") { wrap = divs[wi]; break; }
      }
    }
    if (!wrap) return;
    var children = wrap.children;
    if (children.length < 7) return;

    /* Hero image → video replacement */
    var heroImgContainer = children[0].querySelector(".mynk-1w9ex7k");
    if (heroImgContainer) {
      heroImgContainer.innerHTML = "";
      var video = document.createElement("video");
      video.src = "content/videos/design-to-code.webm";
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      video.style.borderRadius = "12px";
      heroImgContainer.appendChild(video);
    }

    /* Hero paragraph */
    var heroParagraphs = children[1].querySelectorAll("p");
    var heroText = "Redesigned the multi-brand design system for Cars24’s ecosystem of products, enabling scalable theming, improved design-development parity, and AI-ready token architecture.";
    for (var hp = 0; hp < heroParagraphs.length; hp++) {
      heroParagraphs[hp].textContent = heroText;
    }

    /* Overview */
    var overviewSec = makeSection("Overview");
    overviewSec.appendChild(makeBody(
      "With the addition of brands like CarInfo, TeamBHP, and VehicleInfo, the existing design system started breaking at scale. Tokens were unorganized, design and development lacked parity, and multi-brand adaptations required repetitive effort across teams."
    ));
    overviewSec.appendChild(makeBody(
      "The system was difficult to maintain, hard to scale, and increasingly unreliable for automation or AI-assisted workflows because of inconsistent structure and naming."
    ));
    overviewSec.appendChild(makeBody(
      "The goal was to transform the design system into a scalable multi-brand ecosystem that could unify experiences while remaining flexible enough for different business and marketing needs."
    ));

    /* My Role */
    var myRoleSec = makeSection("My Role");
    myRoleSec.appendChild(makeBody(
      "I led the initiative from the design side while collaborating closely with engineering, design ops, and marketing teams."
    ));
    myRoleSec.appendChild(makeBody("Responsibilities included:"));
    myRoleSec.appendChild(makeBulletList([
      "Redesigning token architecture",
      "Defining naming conventions",
      "Creating scalable theming structures",
      "Improving design-development parity",
      "Introducing governance and documentation standards",
      "Structuring the system for AI-readability and automation support"
    ]));

    /* Key Work */
    var keyWorkSec = makeSection("Key Work");
    keyWorkSec.appendChild(makeBody(
      "The biggest shift was moving away from hardcoded values into a layered token architecture."
    ));
    keyWorkSec.appendChild(makeBody("The new system introduced:"));

    function makeNumberedSub(num, title, body) {
      var container = document.createElement("div");
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.gap = "8px";
      container.style.marginTop = "8px";
      var heading = document.createElement("p");
      heading.style.margin = "0";
      heading.style.padding = "0";
      heading.style.fontFamily = 'RevboxText, "RevboxText Placeholder", sans-serif';
      heading.style.fontSize = "18px";
      heading.style.fontWeight = "600";
      heading.style.color = "rgb(255, 255, 255)";
      heading.style.lineHeight = "21.6px";
      heading.style.letterSpacing = "-0.36px";
      heading.textContent = num + ".  " + title;
      container.appendChild(heading);
      container.appendChild(makeBody(body));
      return container;
    }

    keyWorkSec.appendChild(makeNumberedSub(
      "1", "Primitive tokens for raw foundations",
      "These included core visual values like colors, typography, spacing, shadows, and radii that formed the base layer of the system and ensured consistency across products."
    ));
    keyWorkSec.appendChild(makeNumberedSub(
      "2", "Semantic tokens for contextual meaning",
      "Semantic tokens mapped design intent to the primitive layer, allowing values like success, warning, background, or text states to adapt across brands without changing component structures."
    ));
    keyWorkSec.appendChild(makeNumberedSub(
      "3", "Component tokens for UI implementation",
      "Component-level tokens defined how UI elements like buttons, inputs, cards, and navigation behaved, making the system easier to scale, maintain, and implement consistently across teams."
    ));
    keyWorkSec.appendChild(makeBody(
      "This separation allowed components to remain consistent while brands could adapt visual identity through semantic theming."
    ));
    keyWorkSec.appendChild(makeBody("The workflow relied on:"));
    keyWorkSec.appendChild(makeBulletList([
      "Figma Variables",
      "Tokens Studio",
      "GitHub workflows"
    ]));

    /* Insert new sections before old numbered ones */
    var pux = children[2];
    wrap.insertBefore(overviewSec, pux);
    wrap.insertBefore(myRoleSec, pux);
    wrap.insertBefore(keyWorkSec, pux);

    /* Hide old numbered sections */
    children[5].style.display = "none";   // Product & UX (shifted)
    children[6].style.display = "none";   // Go-to-market
    children[7].style.display = "none";   // Customer-facing
    children[8].style.display = "none";   // Web & social

    /* Biggest Challenge — replace Stack */
    var stackSection = wrap.querySelector(".mynk-1g8iydi");
    if (stackSection) {
      replaceSection(stackSection, "Biggest Challenge", function (el) {
        el.appendChild(makeBody("The most difficult challenge was balancing scalability with usability."));
        el.appendChild(makeBody("Too much flexibility would recreate fragmentation."));
        el.appendChild(makeBody("Too much governance would reduce adoption."));
        el.appendChild(makeBody("The solution was controlled flexibility:"));
        el.appendChild(makeBulletList([
          "Standardized foundations",
          "Flexible semantic layers",
          "Governed customization"
        ]));
      });
    }

    /* Impact — replace Outcome */
    var outcomeWrapper = wrap.querySelector(".mynk-1kpkfe9");
    if (outcomeWrapper) {
      replaceSection(outcomeWrapper, "Impact", function (el) {
        el.appendChild(makeBulletList([
          "40–50% reduction in repetitive multi-brand design work",
          "Faster rollout of brand-specific experiences",
          "Reduced design-development back-and-forth",
          "Better onboarding and maintainability",
          "Improved AI-readability and automation support",
          "Greater flexibility for marketing and brand teams"
        ]));
      });
    }

    injectedCards.cars24 = true;
  }

  /* ════════════════════════════════════════════════
     CARD 2 — Buyer Journey Made Easy  (Caldera slot)
     Overlay: .mynk-gU1DZ.mynk-13nifyx
     Wrapper: .mynk-8a4ih6
     ════════════════════════════════════════════════ */
  function injectCaldera(overlay) {
    if (injectedCards.caldera) return;
    /* Find wrapper: try known class, then fall back to scrollable child */
    var wrap = overlay.querySelector(".mynk-8a4ih6");
    if (!wrap) {
      var divs = overlay.querySelectorAll("div");
      for (var wi = 0; wi < divs.length; wi++) {
        if (divs[wi].children.length >= 8 && getComputedStyle(divs[wi]).overflowY === "auto") { wrap = divs[wi]; break; }
      }
    }
    if (!wrap) return;
    var children = wrap.children;
    if (children.length < 8) return;

    /* --- Title & meta (child 0) --- */
    var titlePs = children[0].querySelectorAll("p");
    if (titlePs[0]) titlePs[0].textContent = "Buyer Journey Made Easy";
    if (titlePs[1]) titlePs[1].textContent = "Area: Product Design  ·  B2C  ·  Australia";
    if (titlePs[2]) titlePs[2].textContent = "When: 2025";
    if (titlePs[3]) titlePs[3].textContent = "Role: Senior Designer  ·  Gurugram";

    /* --- Hero paragraph (child 1) --- */
    var heroPs = children[1].querySelectorAll("p");
    var heroText = "Buying a used car online depends on speed, clarity, and confidence.";
    if (heroPs[0]) heroPs[0].textContent = heroText;
    /* Hide extra body paragraphs that were different Caldera context */
    for (var i = 1; i < heroPs.length; i++) {
      heroPs[i].parentElement.style.display = "none";
    }

    /* --- Overview — replace "The work" (child 2) --- */
    var workSection = children[2];
    workSection.innerHTML = "";
    workSection.style.display = "flex";
    workSection.style.flexDirection = "column";
    workSection.style.gap = "16px";
    workSection.appendChild(makeHeading("Overview"));
    workSection.appendChild(makeBody(
      "In a high-consideration purchase like buying a used car, users don’t need more information — they need faster clarity and stronger confidence."
    ));
    workSection.appendChild(makeBody(
      "The project focused on improving two of the most critical decision-making touchpoints in the Cars24 Australia buy flow:"
    ));
    workSection.appendChild(makeBulletList([
      "Car listing cards",
      "Car detail pages",
      "Dealer Info pages",
      "Filter segregation",
      "Car categories"
    ]));
    workSection.appendChild(makeBody(
      "Research and surveys showed that users struggled to quickly compare vehicles, understand financing options, and build confidence while browsing inventory."
    ));
    workSection.appendChild(makeBody(
      "The existing experience exposed too much information without clear prioritization, increasing cognitive load and slowing decision-making."
    ));

    /* --- My Role — replace "Project leadership" (child 3) --- */
    var projLead = children[3];
    projLead.innerHTML = "";
    projLead.style.display = "flex";
    projLead.style.flexDirection = "column";
    projLead.style.gap = "16px";
    projLead.appendChild(makeHeading("My Role"));
    projLead.appendChild(makeBody(
      "I led the redesign of the listing card experience with a focus on:"
    ));
    projLead.appendChild(makeBulletList([
      "Information hierarchy",
      "Scannability",
      "Financing visibility",
      "Trust-focused UX",
      "Mobile-first optimization"
    ]));
    projLead.appendChild(makeBody(
      "One important insight from research was that luxury car buyers behaved differently from mainstream used car buyers, so luxury inventory was intentionally excluded from this optimization initiative to maintain focus on the primary audience."
    ));

    /* --- Key Work — replace "Visual language" (child 4) --- */
    var visLang = children[4];
    visLang.innerHTML = "";
    visLang.style.display = "flex";
    visLang.style.flexDirection = "column";
    visLang.style.gap = "16px";
    visLang.appendChild(makeHeading("Key Work"));
    visLang.appendChild(makeBody(
      "The old cards behaved like compressed detail pages, exposing too much information at once."
    ));
    visLang.appendChild(makeBody(
      "I redesigned the cards to function as “decision accelerators” by prioritizing:"
    ));
    visLang.appendChild(makeBulletList([
      "Pricing clarity",
      "Financing information",
      "Core specifications",
      "Trust indicators",
      "High-intent actions"
    ]));
    visLang.appendChild(makeBody(
      "Lower-priority information was intentionally reduced to improve comparison speed and reduce cognitive overload."
    ));

    /* --- Hide "Website redesign" (child 5) --- */
    children[5].style.display = "none";

    /* --- Biggest Challenge — replace "Scope of work" (child 6) --- */
    var scopeWork = children[6];
    scopeWork.innerHTML = "";
    scopeWork.style.display = "flex";
    scopeWork.style.flexDirection = "column";
    scopeWork.style.gap = "16px";
    scopeWork.appendChild(makeHeading("Biggest Challenge"));
    scopeWork.appendChild(makeBody(
      "One of the biggest challenges was deciding how much information to remove."
    ));
    scopeWork.appendChild(makeBody(
      "Stakeholders initially wanted more data surfaced directly on the cards, but research showed that excessive information reduced clarity and slowed user decisions."
    ));
    scopeWork.appendChild(makeBody(
      "The tradeoff became:"
    ));
    scopeWork.appendChild(makeBody(
      "Completeness vs clarity."
    ));

    /* --- Impact — replace "Outcome" (child 7) --- */
    var outcomeEl = children[7];
    outcomeEl.innerHTML = "";
    outcomeEl.style.display = "flex";
    outcomeEl.style.flexDirection = "column";
    outcomeEl.style.gap = "16px";
    outcomeEl.appendChild(makeHeading("Impact"));
    outcomeEl.appendChild(makeBulletList([
      "Finance funnel improved by 13%",
      "Overall funnel improved by 37%",
      "Improved comparison efficiency",
      "Better mobile usability",
      "Faster browsing and decision-making"
    ]));

    /* --- CTA link (child 9) --- */
    var ctaLink = children[9].querySelector("a");
    if (ctaLink) ctaLink.href = "https://www.figma.com/design/05XvZEvGalrIPjDKKOr2eN/Classified?node-id=13-429&t=sRdyydFEjk2OHpCz-4";

    injectedCards.caldera = true;
  }

  /* ── Watch for overlays to appear ── */
  var mo = new MutationObserver(function () {
    var cars24Overlay = document.querySelector(".mynk-gU1DZ.mynk-10veyav");
    if (cars24Overlay && !injectedCards.cars24) {
      setTimeout(function () { injectCars24(cars24Overlay); }, 120);
    }

    var calderaOverlay = document.querySelector(".mynk-gU1DZ.mynk-13nifyx");
    if (calderaOverlay && !injectedCards.caldera) {
      setTimeout(function () { injectCaldera(calderaOverlay); }, 120);
    }
  });

  mo.observe(document.body, { childList: true, subtree: true });

  /* Also try immediately */
  var e1 = document.querySelector(".mynk-gU1DZ.mynk-10veyav");
  if (e1) setTimeout(function () { injectCars24(e1); }, 200);

  var e2 = document.querySelector(".mynk-gU1DZ.mynk-13nifyx");
  if (e2) setTimeout(function () { injectCaldera(e2); }, 200);

  /* ════════════════════════════════════════════════
     PAGE CONTENT — text replacements on main page
     ════════════════════════════════════════════════ */
  function injectPage() {
    /* --- Helper: find p by exact text inside a section --- */
    function findP(root, startsWith) {
      var ps = root.querySelectorAll("p");
      for (var i = 0; i < ps.length; i++) {
        if (ps[i].textContent.trim().indexOf(startsWith) === 0) return ps[i];
      }
      return null;
    }

    /* ── HERO ── */
    var hero = document.querySelector('[data-mynk-name="hero"]');
    if (hero) {
      var locP = findP(hero, "New Delhi, India");
      if (locP) locP.textContent = "New Delhi, India · IST";

      var birdP = findP(hero, "My cute bird");
      if (birdP) birdP.textContent = "First Milestone";
    }

    /* ── SECTION 01 — Where I drive revenue ── */
    var sec01 = document.querySelector('[data-mynk-name="01"]');
    if (sec01) {
      var intro01 = findP(sec01, "Since 2020");
      if (intro01) intro01.textContent = "Since 2020, I’ve worked at the intersection of product, design, tech, and customer success, helping SaaS teams build and evolve design systems, shape product strategy, and grow accounts with clarity instead of chaos";

      var stat1h = findP(sec01, "30+ SaaS teams");
      if (stat1h) stat1h.textContent = "5+ Design System";
      var stat1b = findP(sec01, "From early-stage to scale-up");
      if (stat1b) stat1b.textContent = "From early-stage to scale-up - across fintech, transportation, automobile, and beyond.";

      var stat2h = findP(sec01, "6 years in tech");
      if (stat2h) stat2h.textContent = "7+ years in Design";
      var stat2b = findP(sec01, "Sales, product, and customer success");
      if (stat2b) stat2b.textContent = "Tech, product, and customer success - agency, remote.";
    }

    /* ── SECTION 02 — How I move the needle ── */
    var sec02 = document.querySelector('[data-mynk-name="02"]');
    if (sec02) {
      var ps02 = sec02.querySelectorAll("p");
      var texts02 = [
        ["Own the full lifecycle", "Own the full design lifecycle"],
        ["I own the full customer lifecycle", "I take products and design systems from zero to one — and beyond. From early discovery to scalable execution, I help turn ambiguous problems into clear, usable, and impactful product experiences."],
        ["Product fluency", "Build and scale design systems"],
        ["I've sat in product roadmap meetings", "I've built, evolved, and scaled design systems into flexible, multi-brand frameworks. I focus on creating systems that support consistency, speed, and future growth without limiting creativity."],
        ["Close without burning bridges", "Bridge design, product, and engineering"],
        ["Consultative selling of 100+", "I work closely with product managers and developers to align design direction with product goals and technical realities. I clarify intent, reduce gaps between design and implementation, and help teams move faster with confidence."],
        ["Communicate so things move", "Lead through clarity and collaboration"],
        ["I write clear briefs, run sharp kickoffs", "I mentor designers, run focused discussions, write clear briefs, and collaborate across departments to understand business needs. My goal is simple: fewer blockers, sharper decisions, and design work that creates real impact."]
      ];
      for (var i = 0; i < ps02.length; i++) {
        var txt = ps02[i].textContent.trim();
        for (var j = 0; j < texts02.length; j++) {
          if (txt.indexOf(texts02[j][0]) === 0) {
            ps02[i].textContent = texts02[j][1];
            break;
          }
        }
      }
    }

    /* ── SECTION 03 — Card labels (content-based, variant-name-independent) ── */
    var sec03 = document.querySelector('[data-mynk-name="03"]');
    if (sec03) {
      var allVariants03 = sec03.querySelectorAll('[data-mynk-name^="Variant"]');
      var cards03 = [];
      for (var vi = 0; vi < allVariants03.length; vi++) {
        if (allVariants03[vi].querySelectorAll("p").length > 0) cards03.push(allVariants03[vi]);
      }
      /* Card 0: Cars24 subtitle */
      if (cards03[0]) {
        var sub0 = findP(cards03[0], "Cybersecurity");
        if (sub0) sub0.textContent = "Design System / SaaS B2B, B2C";
      }
      /* Card 1: Caldera → Cars24 Australia */
      if (cards03[1]) {
        var title1 = findP(cards03[1], "Caldera");
        if (title1) title1.textContent = "Cars24 Australia - Buy flow";
        var sub1 = findP(cards03[1], "Web3");
        if (sub1) sub1.textContent = "Product Design / B2C";
      }
      /* Card 2: Park+ subtitle */
      if (cards03[2]) {
        var sub2 = findP(cards03[2], "Cybersecurity");
        if (sub2) sub2.textContent = "Legal service / B2C";
      }
    }

    /* ── SECTION 04 — Testimonials (add 4 new, idempotent) ── */
    var sec04 = document.querySelector('[data-mynk-name="04"]');
    if (sec04 && !sec04.dataset.pjDone) {
      /* Find the grid container: the div with 4+ children that holds Variant 1 cards */
      var allDivs04 = sec04.querySelectorAll("div");
      var desktop = null;
      for (var di = 0; di < allDivs04.length; di++) {
        if (allDivs04[di].children.length >= 3 && allDivs04[di].querySelector('[data-mynk-name="Variant 1"]')) {
          desktop = allDivs04[di]; break;
        }
      }
      if (desktop) {
        /* Clone the last testimonial card as a template */
        var existingCards = desktop.children;
        var templateCard = existingCards[existingCards.length - 1];

        var newQuotes = [
          ["“He redesigned our entire menu and now I genuinely can’t find the settings. I’ve been locked out for three days.”", "Dad", "Reluctant beta tester"],
          ["“Mayank once cornered me at a house party and spent 40 minutes explaining why my wedding invite had bad kerning. I didn’t even know what kerning was.”", "Friend", "Former hostage"],
          ["“Please stop sending me Figma links at 2am with the message ‘thoughts?’ I have no thoughts. I’m sleeping.”", "Colleague", "Sleep-deprived engineer"],
          ["“He fixed our entire design system in two weeks and somehow broke my weekend plans for the next three months.”", "Manager", "Reluctantly impressed"]
        ];

        newQuotes.forEach(function(q) {
          if (templateCard) {
            var clone = templateCard.cloneNode(true);
            var ps = clone.querySelectorAll("p");
            if (ps[0]) ps[0].textContent = q[0];
            if (ps[1]) ps[1].textContent = q[1];
            if (ps[2]) ps[2].textContent = q[2];
            desktop.appendChild(clone);
          }
        });
        sec04.dataset.pjDone = "1";
      }
    }

    /* ── STORY — Origins ── */
    var origins = document.querySelector('[data-mynk-name="origins"]');
    if (origins) {
      /* heading is h3, not p */
      var h3O = origins.querySelector("h3");
      if (h3O && h3O.textContent.trim().indexOf("Origins") === 0) h3O.textContent = "Origins of mayank";

      var pO = origins.querySelectorAll("p");
      for (var oi = 0; oi < pO.length; oi++) {
        var ot = pO[oi].textContent.trim();
        if (ot.indexOf("Kerch, Ukraine") === 0)
          pO[oi].textContent = "New Delhi, India. 1998. Born in Delhi, one landline, and zero patience for being bored.";
        else if (ot.indexOf("In 2001, a 56K") === 0)
          pO[oi].textContent = "In 2006, a Motorola V66 screamed its way into my life. Mom hated it—I’d hog the phone for hours. I thought it was magic.";
        else if (ot.indexOf("An entire universe") === 0)
          pO[oi].textContent = "A whole universe on the other end, and I was impatient to break into it.";
      }
    }

    /* ── STORY — Going places ── */
    var going = document.querySelector('[data-mynk-name="going-places"]');
    if (going) {
      var pG = going.querySelectorAll("p");
      for (var gi = 0; gi < pG.length; gi++) {
        var gt = pG[gi].textContent.trim();
        if (gt.indexOf("As a teen") === 0)
          pG[gi].textContent = "As a teen: soldering motors, DC++ swaps, friends from social network i’d never meet, trading trump cards, pirated game discs. Chunky, slow, messy—but amazing.";
        else if (gt.indexOf("In 2009") === 0)
          pG[gi].textContent = "In 2010, I enrolled in electrical engineering, driven by machines since childhood. My father would take me to his workshop; I’d break machines at home, collect parts, and build. Three years later, I graduated—still poking at things until they made sense. I earned a maritime El. Eng. diploma, then enrolled in a bachelor’s. That’s when I began working on circuits, connections, and drawings.";
        else if (gt.indexOf("Back to Kerch") === 0)
          pG[gi].style.display = "none";
      }
    }

    /* ── STORY — The turning point ── */
    var turning = document.querySelector('[data-mynk-name="the-turning-point"]');
    if (turning) {
      var pT = turning.querySelectorAll("p");
      for (var ti = 0; ti < pT.length; ti++) {
        var tt = pT[ti].textContent.trim();
        if (tt.indexOf("Later") === 0)
          pT[ti].textContent = "In 2018 interned at Kalam Foundation—starting with graphics, small UI projects. Curiosity led me to product design—like machines, but on digital frames. I reverse-engineered apps, That’s where product design took off. I learned business needs, strategy, users, and value. That’s when I started learning about design systems and building products.";
        else if (tt.indexOf("Sea taught me") === 0)
          pT[ti].style.display = "none";
        else if (tt.indexOf("Came home") === 0)
          pT[ti].style.display = "none";
        else if (tt.indexOf("Still that curious") === 0)
          pT[ti].textContent = "Still that curious kid with the V66. Back then, I waited for the connection. Now, I create them.";
      }
    }

    /* ── IMAGE GRID — reduce to 8 (2+3+3) ── */
    var inspo = document.querySelector('[data-mynk-name="inspo"]');
    if (inspo) {
      var grid = inspo.querySelector('[data-mynk-name="Frame 2147226466"]');
      if (grid) {
        /* Trim each row to 3 first */
        for (var ri = 0; ri < grid.children.length; ri++) {
          var row = grid.children[ri];
          while (row.children.length > 3) {
            row.removeChild(row.lastElementChild);
          }
        }
        /* Remove last photo from first row → 2+3+3 */
        var firstRow = grid.children[0];
        if (firstRow && firstRow.children.length > 2) {
          firstRow.removeChild(firstRow.lastElementChild);
        }
      }
    }

    /* ── FOOTER — hide brand logos strip ── */
    var frame116 = document.querySelector('[data-mynk-name="Frame 116"]');
    if (frame116 && frame116.children.length >= 2) {
      frame116.children[1].style.display = 'none';
    }

  }

  /* Run page injection after Framer hydrates — multiple retries for lazy content */
  [300, 800, 1500, 3000, 5000].forEach(function (ms) {
    setTimeout(injectPage, ms);
  });

  /* ── Remove Neo4j & Dibsy cards, move What's next beside Park+ ── */
  function removeAndRearrangeCards() {
    var neo4j = document.querySelector(".mynk-1q10gh3-container");
    var dibsy = document.querySelector(".mynk-lt44mc-container");
    if (neo4j) neo4j.remove();
    if (dibsy) dibsy.remove();

    /* Move What's next? into Park+ row */
    var parkRow = document.querySelector(".mynk-mui10s");
    var whatsNextContainer = document.querySelector(".mynk-164dhli-container");
    var whatsNextRow = document.querySelector(".mynk-9hljm7");
    if (parkRow && whatsNextContainer) {
      parkRow.appendChild(whatsNextContainer);
      parkRow.style.flexDirection = "row";
      parkRow.style.gap = "16px";
      if (whatsNextRow && whatsNextRow.children.length === 0) whatsNextRow.remove();
    }
  }
  removeAndRearrangeCards();
  setTimeout(removeAndRearrangeCards, 500);
})();
