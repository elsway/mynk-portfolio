import { t as e } from "./rolldown-runtime.BRwTesTf.mjs";
import {
  E as t,
  M as n,
  O as r,
  S as i,
  _ as a,
  c as o,
  h as s,
  k as c,
  l,
  o as u,
} from "./react.BIkpaFzZ.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.Bz_xtmWU.mjs";
import {
  C as h,
  O as g,
  U as _,
  b as v,
  ct as y,
  f as b,
  ht as x,
  mt as S,
  r as C,
  tt as w,
  w as T,
} from "./runtime.CHLoPTp4.mjs";
function E(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (u(),
      _(),
      m(),
      i(),
      (D = {
        aGShQ5N2J: { hover: !0, pressed: !0 },
        SltMY830K: { pressed: !0 },
      }),
      (O = [`aGShQ5N2J`, `SltMY830K`]),
      (k = `mynk-4VW2L`),
      (A = { aGShQ5N2J: `mynk-v-1x6itrn`, SltMY830K: `mynk-v-rd7qkb` }),
      (j = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (M = (e, t) => `translateX(-50%) ${t}`),
      (N = ({ value: e, children: t }) => {
        let n = r(f),
          i = e ?? n.transition,
          a = c(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (P = { "Variant 1": `aGShQ5N2J`, "Variant 2": `SltMY830K` }),
      (F = d.create(n)),
      (I = ({
        fontSize: e,
        height: t,
        id: n,
        link: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        LdFP5EwkI: i ?? o.LdFP5EwkI ?? `Say hi!`,
        qzCvx59Ji: r ?? o.qzCvx59Ji,
        variant: P[o.variant] ?? o.variant ?? `aGShQ5N2J`,
        Wug6qVhNq: e ?? o.Wug6qVhNq ?? 48,
      })),
      (L = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (R = x(
        s(function (e, r) {
          let i = t(null),
            s = r ?? i,
            c = a(),
            { activeLocale: u, setLocale: f } = y();
          w();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: x,
              qzCvx59Ji: C,
              LdFP5EwkI: T,
              Wug6qVhNq: P,
              ...R
            } = I(e),
            {
              baseVariant: z,
              classNames: B,
              clearLoadingGesture: V,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: W,
              setGestureState: G,
              setVariant: K,
              variants: q,
            } = S({
              cycleOrder: O,
              defaultVariant: `aGShQ5N2J`,
              enabledGestures: D,
              ref: s,
              variant: x,
              variantClassNames: A,
            }),
            J = L(e, q),
            Y = g(k);
          return o(p, {
            id: _ ?? c,
            children: o(F, {
              animate: q,
              initial: !1,
              children: o(N, {
                value: j,
                children: o(b, {
                  href: C,
                  motionChild: !0,
                  nodeId: `aGShQ5N2J`,
                  openInNewTab: !1,
                  scopeId: `ZIl6EjsWS`,
                  children: o(d.a, {
                    ...R,
                    ...H,
                    className: `${g(Y, `mynk-1x6itrn`, h, B)} mynk-r2zpm3`,
                    "data-mynk-name": `Variant 1`,
                    draggable: `false`,
                    layoutDependency: J,
                    layoutId: `aGShQ5N2J`,
                    ref: s,
                    style: { ...m },
                    ...E(
                      {
                        "aGShQ5N2J-hover": { "data-mynk-name": void 0 },
                        "aGShQ5N2J-pressed": { "data-mynk-name": void 0 },
                        "SltMY830K-pressed": { "data-mynk-name": void 0 },
                        SltMY830K: { "data-mynk-name": `Variant 2` },
                      },
                      z,
                      U,
                    ),
                    children: o(N, {
                      value: j,
                      children: l(d.div, {
                        className: `mynk-12cwp0h`,
                        "data-border": !0,
                        draggable: `false`,
                        layoutDependency: J,
                        layoutId: `WO5Mfem4m`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgba(255, 255, 255, 0.25)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backdropFilter: `blur(28px)`,
                          backgroundColor: `rgba(255, 255, 255, 0.08)`,
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                          boxShadow: `0px 9px 20px 0px rgba(0, 0, 0, 0.05)`,
                          rotate: 0,
                          WebkitBackdropFilter: `blur(28px)`,
                        },
                        transformTemplate: M,
                        variants: {
                          "aGShQ5N2J-hover": { rotate: 8 },
                          "aGShQ5N2J-pressed": { rotate: 0 },
                          "SltMY830K-pressed": { rotate: 0 },
                        },
                        children: [
                          o(v, {
                            __fromCanvasComponent: !0,
                            children: o(n, {
                              children: o(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                  "--mynk-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                  "--mynk-font-size": `calc(var(--variable-reference-Wug6qVhNq-ZIl6EjsWS) * 1px)`,
                                  "--mynk-font-weight": `600`,
                                  "--mynk-letter-spacing": `-0.02em`,
                                  "--mynk-line-height": `120%`,
                                  "--mynk-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Say hi!`,
                              }),
                            }),
                            className: `mynk-pfidml`,
                            "data-mynk-name": `Connect`,
                            draggable: `false`,
                            fonts: [`FR;InterDisplay-SemiBold`],
                            layoutDependency: J,
                            layoutId: `rXvomLTgA`,
                            style: {
                              "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                              "--mynk-paragraph-spacing": `0px`,
                              "--variable-reference-Wug6qVhNq-ZIl6EjsWS": P,
                            },
                            text: T,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...E(
                              {
                                SltMY830K: {
                                  children: o(n, {
                                    children: o(d.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                        "--mynk-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                        "--mynk-font-size": `40px`,
                                        "--mynk-font-weight": `600`,
                                        "--mynk-letter-spacing": `-0.02em`,
                                        "--mynk-line-height": `120%`,
                                        "--mynk-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `Say hi!`,
                                    }),
                                  }),
                                },
                              },
                              z,
                              U,
                            ),
                          }),
                          o(d.div, {
                            className: `mynk-czv4v3`,
                            draggable: `false`,
                            layoutDependency: J,
                            layoutId: `ER1XMSbxN`,
                            style: {
                              background: `linear-gradient(132deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 2.961799451063098%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 13%)`,
                              opacity: 0.3,
                            },
                            variants: {
                              "aGShQ5N2J-hover": {
                                background: `linear-gradient(132deg, rgba(255, 255, 255, 0) 85%, rgb(255, 255, 255) 88%, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0) 103%)`,
                              },
                              "aGShQ5N2J-pressed": {
                                background: `linear-gradient(132deg, rgba(255, 255, 255, 0) 85%, rgb(255, 255, 255) 88%, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0) 103%)`,
                              },
                              "SltMY830K-pressed": {
                                background: `linear-gradient(132deg, rgba(255, 255, 255, 0) 85%, rgb(255, 255, 255) 88%, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0) 103%)`,
                              },
                            },
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --mynk-aspect-ratio-supported: auto; } }`,
          `.mynk-4VW2L.mynk-r2zpm3, .mynk-4VW2L .mynk-r2zpm3 { display: block; }`,
          `.mynk-4VW2L.mynk-1x6itrn { cursor: pointer; gap: 0px; height: 154px; overflow: visible; position: relative; text-decoration: none; width: 264px; }`,
          `.mynk-4VW2L .mynk-12cwp0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 24px 32px 24px 32px; position: absolute; top: 25px; width: min-content; will-change: var(--mynk-will-change-override, transform); }`,
          `.mynk-4VW2L .mynk-pfidml { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.mynk-4VW2L .mynk-czv4v3 { -webkit-user-select: none; flex: none; height: 219px; left: calc(50.00000000000002% - 319px / 2); mix-blend-mode: overlay; overflow: hidden; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 219px / 2); user-select: none; width: 319px; z-index: 1; }`,
          `.mynk-4VW2L.mynk-v-rd7qkb.mynk-1x6itrn { width: 263px; }`,
          `.mynk-4VW2L.mynk-v-1x6itrn.hover.mynk-1x6itrn { height: 153px; }`,
          `.mynk-4VW2L[data-border="true"]::after, .mynk-4VW2L [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `mynk-4VW2L`,
      )),
      (z = R),
      (R.displayName = `cta`),
      (R.defaultProps = { height: 154, width: 264 }),
      T(R, {
        variant: {
          options: [`aGShQ5N2J`, `SltMY830K`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: C.Enum,
        },
        qzCvx59Ji: { title: `Link`, type: C.Link },
        LdFP5EwkI: {
          defaultValue: `Say hi!`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        onLdFP5EwkIChange: { changes: `LdFP5EwkI`, type: C.ChangeHandler },
        Wug6qVhNq: { defaultValue: 48, title: `Font Size`, type: C.Number },
        onWug6qVhNqChange: { changes: `Wug6qVhNq`, type: C.ChangeHandler },
      }),
      h(
        R,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `mynk`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function V(e, t) {
  return {
    description: `Senior Designer with product context. 100+ design systems and product features shipped. Remote from New Delhi, IST.`,
    favicon: `../../assets/KWMwgAKM0rMXsJUphPfEm6qgE0s.svg`,
    robots: `max-image-preview:large`,
    socialImage: `../../assets/nbfVno1Tyg1d66F9W45Hx765Nw.png`,
    title: `Mayank — Senior Designer · Remote`,
  };
}
var H = e(() => {});
function U(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 940px)` },
      {
        hash: `1792uxd`,
        mediaQuery: `(min-width: 744px) and (max-width: 939.98px)`,
      },
      {
        hash: `movqfs`,
        mediaQuery: `(min-width: 640px) and (max-width: 743.98px)`,
      },
      { hash: `93ug5u`, mediaQuery: `(max-width: 639.98px)` },
    ],
    description: V(e, t).description,
    elements: {
      EKTktc54g: `header`,
      Fe3O8Vpjp: `1`,
      k77qJ7Ohz: `personal`,
      OMoC4XHu5: `3`,
      ONe8BAK2R: `inspo`,
      pZVgEeRlj: `hero`,
      ryRq4Pwfc: `2`,
      SQyF0B6v7: `cta`,
      WsIChdeSv: `work`,
    },
    robots: `max-image-preview:large`,
    serializationId: `mynk-gU1DZ`,
    socialImage: `../../assets/lqauHcyR3OLf6CR6btbcB7B8H2M.png`,
    title: V(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var W,
  G,
  K = e(() => {
    (H(),
      (W = 1),
      (G = {
        exports: {
          metadataVersion: {
            type: `variable`,
            annotations: { mynkContractVersion: `1` },
          },
          default: {
            type: `function`,
            annotations: { mynkContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function q(e, t) {
  return {
    breakpoints: [
      { hash: `snd27x`, mediaQuery: `(min-width: 940px)` },
      {
        hash: `5woz3j`,
        mediaQuery: `(min-width: 744px) and (max-width: 939.98px)`,
      },
      {
        hash: `efn47y`,
        mediaQuery: `(min-width: 640px) and (max-width: 743.98px)`,
      },
      { hash: `1rivi2w`, mediaQuery: `(max-width: 639.98px)` },
    ],
    description: V(e, t).description,
    elements: {},
    mynkSearch: { index: !1 },
    robots: `noindex`,
    serializationId: `mynk-NJrmr`,
    socialImage: `../../assets/lqauHcyR3OLf6CR6btbcB7B8H2M.png`,
    title: V(e, t).title || `404`,
    viewport: `width=device-width`,
  };
}
var J,
  Y,
  X = e(() => {
    (H(),
      (J = 1),
      (Y = {
        exports: {
          metadataVersion: {
            type: `variable`,
            annotations: { mynkContractVersion: `1` },
          },
          default: {
            type: `function`,
            annotations: { mynkContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  G as a,
  W as c,
  J as i,
  z as l,
  X as n,
  K as o,
  q as r,
  U as s,
  Y as t,
  B as u,
};
