// Google Tag Manager configuration
export const GTM_ID = 'GTM-MSMMC58X'; // Tu ID de Google Tag Manager

// Función para inicializar Google Tag Manager
export const initGTM = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    // Cargar el script de Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);

    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
  }
};

// Función para trackear páginas
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Función para trackear eventos personalizados
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'custom_event',
      event_category: category,
      event_action: action,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos para tu sitio
export const trackWhatsAppClick = () => {
  trackEvent('click', 'WhatsApp', 'WhatsApp Button');
};

export const trackContactFormSubmit = () => {
  trackEvent('submit', 'Contact', 'Contact Form');
};

export const trackLanguageChange = (language) => {
  trackEvent('change', 'Language', language);
};

export const trackServiceView = (serviceName) => {
  trackEvent('view', 'Service', serviceName);
};