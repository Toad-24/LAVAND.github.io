/* =====================================================================
   LAVANDERÍA BURBUJAS — SCRIPT PRINCIPAL
   ===================================================================== */

/* ==============================================================
   CONFIGURACIÓN DEL NEGOCIO — MODIFICAR AQUÍ
   Para cambiar el número de WhatsApp de TODA la página,
   edita únicamente la constante WHATSAPP_NUMBER de abajo.
   Formato: código de país + número, sin "+", sin espacios.
================================================================= */
const WHATSAPP_NUMBER = "51970208167"; // +51 970 208 167
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, Lavandería Burbujas. Quisiera información sobre sus servicios.";

/**
 * Construye el enlace de WhatsApp con el número y mensaje configurados.
 * @param {string} [message] - Mensaje predeterminado a enviar.
 * @returns {string} URL de wa.me lista para usar.
 */
function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------------------
     1. Configurar todos los botones/enlaces de WhatsApp
        (navbar, hero, CTA, contacto, botón flotante)
  ------------------------------------------------------------ */
  const whatsappTriggers = document.querySelectorAll(".js-whatsapp");
  whatsappTriggers.forEach((el) => {
    const customMessage = el.getAttribute("data-wa-message");
    el.setAttribute("href", buildWhatsAppLink(customMessage));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* ---------------------------------------------------------
     2. Menú hamburguesa (móvil)
  ------------------------------------------------------------ */
  const navToggle = document.getElementById("navToggle");
  const navbarNav = document.getElementById("navbarNav");

  if (navToggle && navbarNav) {
    const closeMenu = () => {
      navToggle.classList.remove("is-active");
      navbarNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menú");
    };

    const toggleMenu = () => {
      const isOpen = navbarNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    };

    navToggle.addEventListener("click", toggleMenu);

    // Cerrar el menú al seleccionar un enlace (mejor experiencia en móvil)
    navbarNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar el menú si se agranda la ventana (p.ej. rotar el celular)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* ---------------------------------------------------------
     3. Animación "aparecer al hacer scroll"
  ------------------------------------------------------------ */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Navegador sin soporte: mostrar todo directamente
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------
     4. Año dinámico en el footer
  ------------------------------------------------------------ */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
