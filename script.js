// Asesoría Pública - interactions
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.querySelector(".menuBtn");
  const mobileMenu = document.querySelector(".mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.hidden = expanded;
    });

    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
      });
    });
  }

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.tab;
      tabs.forEach(t => {
        t.classList.toggle("is-active", t === btn);
        t.setAttribute("aria-selected", t === btn ? "true" : "false");
      });
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === key));
    });
  });

  // WhatsApp CTA (edit number/text here)
  const whatsappNumber = "569XXXXXXXX"; // <-- CAMBIA ESTO: ej. 56912345678
  const whatsappText = encodeURIComponent("Hola, quiero cotizar un servicio en Asesoría Pública. Necesito: (describe tu caso), Comuna/Ciudad: (..), Plazo: (..).");
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const ctaTop = document.getElementById("ctaWhatsappTop");
  const ctaBottom = document.getElementById("ctaWhatsappBottom");
  [ctaTop, ctaBottom].forEach(el => {
    if (el) el.href = waLink;
  });

  // Contact form -> opens user's email client (mailto)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const nombre = (fd.get("nombre") || "").toString().trim();
      const telefono = (fd.get("telefono") || "").toString().trim();
      const servicio = (fd.get("servicio") || "").toString().trim();
      const mensaje = (fd.get("mensaje") || "").toString().trim();

      const subject = encodeURIComponent(`Contacto web - ${servicio || "Consulta"}`);
      const body = encodeURIComponent(
        `Nombre: ${nombre}\n` +
        `Teléfono/WhatsApp: ${telefono}\n` +
        `Servicio: ${servicio}\n\n` +
        `Mensaje:\n${mensaje}\n`
      );

      window.location.href = `mailto:contacto@asesoriapublica.cl?subject=${subject}&body=${body}`;
    });
  }

  // Privacy modal
  const openPrivacy = document.getElementById("openPrivacy");
  const closePrivacy = document.getElementById("closePrivacy");
  const closePrivacy2 = document.getElementById("closePrivacy2");
  const modal = document.getElementById("privacyModal");

  function closeModal() {
    if (modal && modal.open) modal.close();
  }
  if (openPrivacy && modal) {
    openPrivacy.addEventListener("click", (e) => {
      e.preventDefault();
      modal.showModal();
    });
  }
  if (closePrivacy) closePrivacy.addEventListener("click", closeModal);
  if (closePrivacy2) closePrivacy2.addEventListener("click", closeModal);
})();
