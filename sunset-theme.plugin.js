/**
 * @name SunsetTheme
 * @description Thème « Sunset » posé par-dessus le look dx.bi intégré : palette rouge / orange / jaune, finitions inspirées d'Apple TV+, Netflix et Plex, et un mode performance (sans flous ni effets coûteux). Laisse le thème sur « Default » et « dx.bi look built in » activé.
 * @version 1.0.1
 * @author Tipapoute
 * @updateUrl https://raw.githubusercontent.com/Tipapoute/sunset-dxbi/main/sunset-theme.plugin.js
 * @source https://github.com/Tipapoute/sunset-dxbi
 * @license MIT
 * @requirements ["dxbi.plugin.js"]
 */

(function () {
  'use strict';

  const API = typeof StremioEnhancedAPI !== 'undefined' ? StremioEnhancedAPI : null;
  const ID_LOOK = 'sunset-theme-look';
  const ID_PERF = 'sunset-theme-perf';

  const LOOK_CSS = `
/* ---------------------------------------------------------------------
   A. PALETTE SUNSET
   --------------------------------------------------------------------- */

:root {
    --dx-accent: #ff6a2a;
    --dx-accent-hover: #ff8a55;
    --dx-accent-soft: rgba(255, 106, 42, 0.18);
    --sun-red: #ff2e4c;
    --sun-orange: #ff6a2a;
    --sun-gold: #ffc53d;
    --sun-grad: linear-gradient(118deg, var(--sun-red) 0%, var(--sun-orange) 48%, var(--sun-gold) 100%);
    --sun-grad-soft: linear-gradient(118deg, rgba(255, 46, 76, 0.22), rgba(255, 106, 42, 0.22) 48%, rgba(255, 197, 61, 0.22));
    --sun-glow: 0 0 0 1px rgba(255, 120, 60, 0.35), 0 6px 24px rgba(255, 90, 30, 0.28);

    --dx-bg: #0d0b0c;
    --dx-bg-raised: #141113;
    --dx-surface: #1a1517;
    --dx-surface-2: #241c1f;
    --dx-surface-3: #2f2528;
    --dx-line: rgba(255, 214, 190, 0.09);
    --dx-line-strong: rgba(255, 214, 190, 0.18);

    --dx-text: #faf6f2;
    --dx-text-2: #d6ccc5;
    --dx-text-3: #968a84;

    --dx-radius-s: 4px;
    --dx-radius: 7px;
    --dx-radius-l: 12px;

    --dx-shadow-1: 0 1px 4px rgba(0, 0, 0, 0.4);
    --dx-shadow-2: 0 10px 24px rgba(0, 0, 0, 0.55);
    --dx-ease-out: cubic-bezier(0.2, 0.9, 0.3, 1);

    --dx-focus: #ffc53d;
}

::selection {
    background: var(--sun-orange);
    color: #140a05;
}

/* ---------------------------------------------------------------------
   C. NAVIGATION
   --------------------------------------------------------------------- */

#app nav[class*="horizontal-nav-bar"] [class*="logo-container"]::before {
    background: var(--sun-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;
    text-shadow: none;
    letter-spacing: 0.08em;
}

body.dx-scrolled #app [class*="main-nav-bars-container"] > nav[class*="horizontal-nav-bar"] {
    background-color: rgba(13, 11, 12, 0.97) !important;
    box-shadow: 0 1px 0 var(--dx-line);
}

#app nav[class*="vertical-nav-bar"] a[class*="nav-tab-button"] [class*="label"],
#app nav[class*="vertical-nav-bar"] a[href="#/"] [class*="label"]::after {
    letter-spacing: 0.02em;
    font-weight: 600;
}

#app nav[class*="vertical-nav-bar"] a[class*="nav-tab-button"]::after {
    height: 2px;
    background: var(--sun-grad);
}

#app nav[class*="vertical-nav-bar"] a[class*="nav-tab-button"].selected [class*="label"] {
    color: var(--dx-text);
}

#app [class*="main-nav-bars-container"] nav[class*="horizontal-nav-bar"] [class*="search-bar-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line) !important;
    border-radius: 999px !important;
    transition: border-color 0.2s, box-shadow 0.2s;
}

#app [class*="main-nav-bars-container"] nav[class*="horizontal-nav-bar"] [class*="search-bar-container"]:focus-within {
    border-color: var(--dx-accent) !important;
    box-shadow: 0 0 0 3px var(--dx-accent-soft);
}

/* ---------------------------------------------------------------------
   D. BANDEAU + BOUTONS
   --------------------------------------------------------------------- */

.dx-hero-shade {
    background:
        linear-gradient(90deg, rgba(13, 11, 12, 0.94) 0%, rgba(13, 11, 12, 0.62) 30%, rgba(13, 11, 12, 0.06) 60%, transparent 76%),
        linear-gradient(0deg, var(--dx-bg) 0%, rgba(13, 11, 12, 0.78) 14%, rgba(13, 11, 12, 0) 44%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 18%) !important;
}

.dx-hero-kicker {
    color: var(--dx-text-2);
}

.dx-hero-kicker b {
    background: var(--sun-grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.dx-hero-title {
    letter-spacing: -0.025em;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}

.dx-hero-meta {
    color: var(--dx-text-2);
    font-variant-numeric: tabular-nums;
}

.dx-btn-primary,
#app [class*="meta-preview-container"] [class*="action-button-container"][class*="wide"] {
    background: var(--sun-grad) !important;
    color: #1a0c06 !important;
    border: 0 !important;
}

.dx-btn-primary svg,
#app [class*="meta-preview-container"] [class*="action-button-container"][class*="wide"] svg {
    fill: #1a0c06 !important;
    color: #1a0c06 !important;
}

.dx-btn-primary:hover,
.dx-btn-primary:focus-visible,
#app [class*="meta-preview-container"] [class*="action-button-container"][class*="wide"]:hover,
#app [class*="meta-preview-container"] [class*="action-button-container"][class*="wide"]:focus-visible {
    background: var(--sun-grad) !important;
    box-shadow: var(--sun-glow);
    transform: translateY(-1px);
}

.dx-btn-secondary {
    background: rgba(50, 40, 42, 0.78) !important;
    border: 1px solid var(--dx-line-strong);
}

.dx-btn-secondary:hover,
.dx-btn-secondary:focus-visible {
    background: rgba(66, 52, 55, 0.9) !important;
    border-color: rgba(255, 150, 90, 0.45);
}

.dx-hero-dot.is-active {
    background: var(--sun-grad);
}

.dx-hero-dot.is-active::after {
    background: var(--sun-gold);
}

/* ---------------------------------------------------------------------
   E. RANGÉES + AFFICHES
   --------------------------------------------------------------------- */

#app [class*="meta-row"] > [class*="header-container"] [class*="title-container"] [class*="title"] {
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--dx-text);
}

#app [class*="meta-row"] [class*="see-all-container"] [class*="label"] {
    color: var(--sun-gold);
}

#app [class*="meta-item-container"] [class*="poster-container"] {
    border-radius: var(--dx-radius);
}

#app [class*="meta-item-container"] [class*="poster-container"]::after {
    border-radius: var(--dx-radius);
    box-shadow: inset 0 0 0 1px rgba(255, 214, 190, 0.07);
}

#app [class*="meta-item-container"]:is(.hovered, .active, .selected) [class*="poster-container"] {
    transform: translateY(-4px);
}

#app [class*="meta-item-container"]:is(.hovered, .active, .selected) [class*="poster-container"]::after {
    box-shadow: inset 0 0 0 2px var(--sun-orange), 0 0 0 1px rgba(255, 197, 61, 0.35), 0 8px 22px rgba(255, 90, 30, 0.25);
}

#app [class*="meta-item-container"] [class*="title-container"] {
    color: var(--dx-text-2);
    font-weight: 600;
}

#app [class*="meta-item-container"]:is(.hovered, .active, .selected) [class*="title-container"] {
    color: var(--dx-text);
}

.dx-badge {
    border: 1px solid var(--dx-line-strong);
    color: var(--sun-gold);
    font-variant-numeric: tabular-nums;
}

#app [class*="meta-item-container"] [class*="progress-bar"],
#app [class*="meta-item-container"] [class*="progress-container"] > * {
    background: var(--sun-grad) !important;
}

.dx-preview {
    border: 1px solid var(--dx-line-strong) !important;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 120, 60, 0.12) !important;
}

.dx-round {
    border: 1px solid var(--dx-line-strong) !important;
}

.dx-round:hover,
.dx-round:focus-visible {
    border-color: var(--sun-orange) !important;
}

.dx-round.is-primary {
    background: var(--sun-grad) !important;
    border: 0 !important;
}

.dx-round.is-primary svg {
    fill: #1a0c06 !important;
    color: #1a0c06 !important;
}

/* ---------------------------------------------------------------------
   F. PAGE DÉTAIL
   --------------------------------------------------------------------- */

#app [class*="meta-preview-container"] [class*="genres-container"] [class*="label-container"],
#app [class*="meta-preview-container"] [class*="links-container"] [class*="label-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line) !important;
    border-radius: 999px !important;
    color: var(--dx-text-2) !important;
}

#app [class*="meta-preview-container"] [class*="label-container"]:hover,
#app [class*="meta-preview-container"] [class*="label-container"]:focus-visible {
    border-color: var(--sun-gold) !important;
    color: var(--dx-text) !important;
}

#app [class*="meta-preview-container"] [class*="imdb-rating"],
#app [class*="meta-preview-container"] [class*="rating-container"] {
    border-color: var(--sun-gold) !important;
    color: var(--sun-gold) !important;
}

#app [class*="meta-preview-container"] [class*="action-button-container"]:not([class*="wide"]) {
    border: 1px solid var(--dx-line-strong) !important;
}

#app [class*="meta-preview-container"] [class*="action-button-container"]:not([class*="wide"]):hover,
#app [class*="meta-preview-container"] [class*="action-button-container"]:not([class*="wide"]):focus-visible {
    border-color: var(--sun-orange) !important;
    background-color: rgba(255, 106, 42, 0.14) !important;
}

#app [class*="metadetails-content"] [class*="videos-list-container"],
#app [class*="metadetails-content"] [class*="streams-list-container"] {
    border-radius: var(--dx-radius-l) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 120, 60, 0.08) !important;
}

#app [class*="video-container"][class*="selected"] {
    background: var(--sun-grad-soft) !important;
    box-shadow: inset 3px 0 0 var(--sun-orange) !important;
}

#app [class*="video-container"]:hover,
#app [class*="video-container"]:focus-visible {
    background: rgba(255, 214, 190, 0.06) !important;
}

#app [class*="video-container"] [class*="watched-container"] {
    background: rgba(255, 197, 61, 0.14) !important;
    color: var(--sun-gold) !important;
}

#app [class*="streams-list-container"] [class*="stream-container"]:hover,
#app [class*="streams-list-container"] [class*="stream-container"]:focus-visible {
    background: rgba(255, 214, 190, 0.07) !important;
    transform: none !important;
    box-shadow: inset 2px 0 0 var(--sun-orange);
}

.sqp-f.on:not([data-res]) {
    background: var(--sun-grad) !important;
    color: #1a0c06 !important;
}

.sqp-f.on:not([data-res]) .n {
    opacity: 0.75;
}

.sqp-c:hover {
    border-color: rgba(255, 120, 60, 0.45) !important;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 120, 60, 0.2) !important;
}

/* ---------------------------------------------------------------------
   G. DÉCOUVRIR / BIBLIOTHÈQUE / EXTENSIONS / RÉGLAGES
   --------------------------------------------------------------------- */

#app [class*="multiselect-menu"] > [class*="button-container"],
#app [class*="select-input"] > [class*="button-container"],
#app [class*="filter-button"],
#app [class*="selectable-inputs"] [class*="button-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line) !important;
}

#app [class*="multiselect-menu"] > [class*="button-container"]:hover,
#app [class*="filter-button"]:hover,
#app [class*="multiselect-menu"] > [class*="button-container"]:focus-visible,
#app [class*="filter-button"]:focus-visible,
#app [class*="multiselect-menu"][class*="active"] > [class*="button-container"] {
    border-color: rgba(255, 150, 90, 0.5) !important;
    background: var(--dx-surface-2) !important;
}

#app [class*="menu-container"] [class*="option-container"][class*="selected"],
#app [class*="settings-content"] > [class*="menu-"] [class*="button"][class*="selected"] {
    background: var(--sun-grad-soft) !important;
    color: var(--dx-text) !important;
    box-shadow: inset 3px 0 0 var(--sun-orange);
}

#app [class*="menu-container"] [class*="option-container"]:hover,
#app [class*="menu-container"] [class*="option-container"]:focus-visible {
    background: rgba(255, 214, 190, 0.07) !important;
}

#app [class*="addons-content"] [class*="add-button-container"],
#app [class*="install-button-container"],
#app [class*="configure-button-container"] {
    background: var(--sun-grad) !important;
}

#app [class*="addons-content"] [class*="add-button-container"] *,
#app [class*="install-button-container"] *,
#app [class*="configure-button-container"] * {
    color: #1a0c06 !important;
    fill: #1a0c06 !important;
}

#app [class*="addons-list-container"] [class*="addon-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line) !important;
    border-radius: var(--dx-radius-l) !important;
}

#app [class*="addons-list-container"] [class*="addon-container"]:hover,
#app [class*="addons-list-container"] [class*="addon-container"]:focus-visible {
    border-color: rgba(255, 150, 90, 0.4) !important;
}

#app [class*="toggle-container"].checked [class*="toggle"],
#app .checked > [class*="toggle"],
#app [class*="checkbox-container"].checked [class*="checkbox"],
#app [class*="checkbox"].checked {
    background: var(--sun-grad) !important;
    border-color: transparent !important;
}

#enhanced [class*="addon-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line) !important;
    border-radius: var(--dx-radius-l) !important;
}

/* ---------------------------------------------------------------------
   H. LECTEUR
   --------------------------------------------------------------------- */

#app [class*="slider-container"] [class*="track"] {
    background: rgba(255, 255, 255, 0.18) !important;
}

#app [class*="slider-container"] [class*="track-before"] {
    background: rgba(255, 255, 255, 0.35) !important;
}

#app [class*="slider-container"] [class*="track-after"] {
    background: var(--sun-grad) !important;
}

#app [class*="slider-container"] [class*="thumb"] {
    background: var(--sun-gold) !important;
    box-shadow: 0 0 0 3px rgba(255, 197, 61, 0.25) !important;
}

#app [class*="player-container"] [class*="control-bar-button-"]:hover svg,
#app [class*="player-container"] [class*="control-bar-button-"]:focus-visible svg,
#app [class*="player-container"] [class*="player-nav"] [class*="player-button"]:hover svg,
#app [class*="player-container"] [class*="player-nav"] [class*="player-button"]:focus-visible svg {
    color: var(--sun-gold) !important;
    fill: var(--sun-gold) !important;
}

#app [class*="player-container"] [class*="player-nav"] [class*="player-button"]:hover,
#app [class*="player-container"] [class*="player-nav"] [class*="player-button"]:focus-visible {
    transform: none !important;
}

#app [class*="player-container"] [class*="menu-layer"] {
    background: rgba(18, 14, 15, 0.96) !important;
    border: 1px solid var(--dx-line) !important;
}

#app [class*="player-container"] [class*="menu-layer"] [class*="option-container"].selected,
#app [class*="player-container"] [class*="menu-layer"] [class*="option-container"][class*="selected"] {
    background: var(--sun-grad-soft) !important;
    box-shadow: inset 3px 0 0 var(--sun-orange);
}

#app [class*="player-container"] [class*="menu-layer"] [class*="option-container"].selected [class*="label"] {
    color: var(--sun-gold) !important;
}

#app [class*="speed-menu-container"] [class*="speed-button"][class*="active"]::before {
    background: var(--sun-gold) !important;
}

body #tidb-active-btn,
body #skiprange-active-btn,
.dx-skip,
.dxe-skip {
    background: var(--sun-grad) !important;
    color: #1a0c06 !important;
    border: 0 !important;
}

#app [class*="player-container"] [class*="subtitles"] [class*="cue"],
#app [class*="player-container"] [class*="subtitles-container"] * {
    color: #fdf8f3;
    text-shadow: 0 1px 2px #000, 0 0 2px #000;
}

/* ---------------------------------------------------------------------
   I. ERGONOMIE
   --------------------------------------------------------------------- */

#app :is(a, button, input, select, [tabindex]):not([class*="meta-item-link"]):not([class*="meta-item-container"]):focus-visible {
    outline: 2px solid var(--dx-focus) !important;
    outline-offset: 3px;
    border-radius: var(--dx-radius-s);
}

#app ::-webkit-scrollbar,
.sqp-list::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

#app ::-webkit-scrollbar-thumb,
.sqp-list::-webkit-scrollbar-thumb {
    background: rgba(255, 214, 190, 0.14);
    border-radius: 6px;
}

#app ::-webkit-scrollbar-thumb:hover,
.sqp-list::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 150, 90, 0.45);
}

#app [class*="toasts-container"] [class*="toast-item-container"] {
    background: var(--dx-surface) !important;
    border: 1px solid var(--dx-line-strong) !important;
    box-shadow: var(--dx-shadow-2), inset 3px 0 0 var(--sun-orange) !important;
}

#app a:not([class]) {
    color: var(--sun-gold);
}
`;

  const PERF_CSS = `
/* ---------------------------------------------------------------------
   B. PERFORMANCE
   --------------------------------------------------------------------- */

#app *,
body > *,
.context-menu-portal * {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
}

#app [class*="metadetails-content"] [class*="videos-list-container"],
#app [class*="metadetails-content"] [class*="streams-list-container"],
#app [class*="metadetails-content"] > :not([class*="meta-preview"]):not([class*="spacing"]):not([class*="streams-list"]):not([class*="videos-list"]) {
    background: rgba(18, 14, 15, 0.94) !important;
    border-color: var(--dx-line) !important;
}

#app [class*="menu-container"]:not([class*="buttons-menu-container"]),
.context-menu-portal [class*="menu-container"],
#app [class*="modal-dialog-container"],
.dx-preview {
    background: var(--dx-surface) !important;
}

#app [class*="meta-preview-container"] [class*="action-button-container"],
#app [class*="metadetails-container"] > nav [class*="back-button-container"],
.dx-btn-secondary,
.dx-badge,
#app [class*="meta-item-container"] [class*="play-icon-background"],
#app [class*="meta-item-container"] [class*="watched-icon-layer"] {
    background-color: rgba(30, 24, 26, 0.92) !important;
}

.dx-preview-aura,
.dx-preview::before {
    display: none !important;
}

.dx-wide-blur {
    filter: brightness(0.4) !important;
}

.dx-hero-backdrop {
    animation: none !important;
    transform: none !important;
}

#app [class*="meta-item-container"] [class*="poster-image-layer"] {
    transition: none !important;
    transform: none !important;
}

#app [class*="meta-row"] > [class*="meta-items-container"] {
    -webkit-mask-image: none !important;
    mask-image: none !important;
}

#app .animation-fade-in,
#app [class*="metadetails-container"] > [class*="background-image-layer"] img,
#app [class*="meta-preview-container"] [class*="logo"],
#app [class*="metadetails-content"] [class*="videos-list-container"],
#app [class*="metadetails-content"] [class*="streams-list-container"],
#app [class*="toasts-container"] [class*="toast-item-container"],
#app [class*="next-video-popup-container"] {
    animation: dx-fade 0.2s ease both !important;
}

#app [class*="meta-item-container"],
#app [class*="meta-item-container"] * {
    transition-property: opacity, transform, color, background-color, border-color, box-shadow !important;
    transition-duration: 0.18s !important;
}

.dx-enh-btn.is-on svg {
    filter: none !important;
}

#app [class*="placeholder"] {
    background: var(--dx-surface) !important;
    animation: none !important;
}

`;

  const SCHEMA = [
    { key: 'perf', type: 'toggle', label: 'Mode performance', description: "Supprime les flous, les grands effets animés et le zoom des affiches : l'interface reste fluide même sur une machine modeste.", defaultValue: true, group: 'Sunset' },
  ];
  const settings = { perf: true };

  function ensure(id, css, on) {
    let el = document.getElementById(id);
    if (!on) { if (el) el.remove(); return; }
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      el.textContent = css;
    }
    // Toujours en dernier dans <head>, après le thème dx.bi intégré et ses styles annexes
    if (el !== document.head.lastElementChild) document.head.append(el);
  }

  function apply() {
    ensure(ID_LOOK, LOOK_CSS, true);
    ensure(ID_PERF, PERF_CSS, settings.perf);
  }

  // dx.bi ajoute ses propres <style> au fil de la navigation : on reste derrière eux
  new MutationObserver(() => {
    const last = document.head.lastElementChild;
    if (last && last.id !== ID_PERF && last.id !== ID_LOOK) apply();
  }).observe(document.head, { childList: true });

  async function loadSettings() {
    if (!API) return;
    try { await API.registerSettings(SCHEMA); } catch (_) { /* déjà enregistré */ }
    try {
      const v = await API.getSetting('perf');
      if (v !== null && v !== undefined) settings.perf = v === true || v === 'true';
    } catch (_) {}
    try {
      API.onSettingsSaved((s) => {
        if (s && 'perf' in s) settings.perf = s.perf === true || s.perf === 'true';
        apply();
      });
    } catch (_) {}
    apply();
  }

  apply();
  loadSettings();
})();
