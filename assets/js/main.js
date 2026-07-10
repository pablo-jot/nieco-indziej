import "@fortawesome/fontawesome-free/css/all.min.css";
import { loadLogo } from "./components/logo.js";

await loadLogo(
    ".logo",
    "assets/images/logo/logo-okragle.svg"
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

console.log("Nieco indziej — Vite działa.");