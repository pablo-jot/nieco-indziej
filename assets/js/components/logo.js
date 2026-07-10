/**
 * ========================================================
 * Nieco indziej
 * Plik        : logo.js
 * Opis        : Ładowanie logo SVG do dokumentu
 * Autor       : Paweł Janas
 * Wersja      : 1.0.1
 * Data        : 2026-07-10
 * ========================================================
 */

export async function loadLogo(selector, file) {

    console.log("loadLogo() start");

    const container = document.querySelector(selector);
    console.log("container =", container);

    if (!container) {
        console.error(`Nie znaleziono elementu: ${selector}`);
        return;
    }

    console.log("pobieram:", file);

    const response = await fetch(file);

    console.log("status:", response.status);

    if (!response.ok) {
        console.error(`Nie można wczytać pliku: ${file}`);
        return;
    }

    const svg = await response.text();

    container.innerHTML = svg;

    console.log("logo wstawione");
}