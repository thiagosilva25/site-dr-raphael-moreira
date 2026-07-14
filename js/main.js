// =========================================
// Dr. Raphael Moreira - Odontologia
// Script principal
// =========================================

// Configuração do WhatsApp
const WHATSAPP_NUMBER = "5531XXXXXXXXX"; // ⚠️ substituir pelo número real com DDI+DDD
const WHATSAPP_MESSAGE = "Olá, vim pelo site e gostaria de agendar uma consulta";

function getWhatsAppLink() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Aplica o link do WhatsApp a todos os botões com essa classe
  document.querySelectorAll(".btn-whatsapp, .whatsapp-float").forEach((btn) => {
    btn.setAttribute("href", getWhatsAppLink());
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
