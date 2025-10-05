// Back to top button
window.onscroll = function () {
    const btn = document.getElementById("toTop");
    if (document.documentElement.scrollTop > 300) btn.classList.remove("hidden");
    else btn.classList.add("hidden");
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {

function adjustHeader() {
    // const header = document.getElementById("mainHeader");
    const logo = document.getElementById("logo");
    const logoText = document.getElementById("logoText");
    const heightMax = "h-24";
    const heightMin = "h-16";
    const textMax = "text-4xl";
    const textMin = "text-2xl";

    if (window.scrollY > 50 && window.innerWidth > 768) {
        logo.classList.add(heightMin);
        logo.classList.remove(heightMax);
        logoText.classList.add(textMin);
        logoText.classList.remove(textMax);
    } else {
        logo.classList.add(heightMax);
        logo.classList.remove(heightMin);
        logoText.classList.add(textMax);
        logoText.classList.remove(textMin);
    }
}

window.addEventListener("scroll", adjustHeader);
window.addEventListener("resize", adjustHeader);

adjustHeader();
});

// Dark mode toggle
const html = document.documentElement;

function toggleTheme() {
  const isDark = html.classList.toggle("dark");
}
