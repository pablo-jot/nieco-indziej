import "@fortawesome/fontawesome-free/css/all.min.css";
import { loadLogo } from "./components/logo.js";

await loadLogo(
    ".logo",
    "assets/images/logo/logo-okragle.svg"
);

console.log("Nieco indziej — Vite działa.");