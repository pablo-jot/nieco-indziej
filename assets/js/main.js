// import "@fortawesome/fontawesome-free/css/all.min.css";
import { loadLogo } from "./components/logo.js";
import { loadQuote } from "./hero.js";


await loadLogo(
    ".logo",
    "assets/images/logo/logo-okragle.svg"
);

await loadLogo(
    ".hero-logo",
    window.matchMedia("(max-width: 767px)").matches
        ? "assets/images/logo/logo_NI_start_mobile.svg"
        : "assets/images/logo/logo_NI_start_v2.svg"
);



await loadLogo(
    ".footer-sygnet",
    "assets/images/logo/sygnet.svg"
);

await loadLogo(
    ".footer-left",
    "assets/images/decor/rozek_L.svg"
);

await loadLogo(
    ".footer-right",
    "assets/images/decor/rozek_R.svg"
);

await loadQuote();

console.log("Nieco indziej — Vite działa.");