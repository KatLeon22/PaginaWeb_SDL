import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "../styles/contact.css"; 

const content = {
  es: {
    title: "Contacto",
    intro: "Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros datos de contacto.",
    name: "Nombre",
    email: "Correo electrónico",
    service: "Servicio deseado",
    message: "Mensaje",
    submit: "Enviar",
    infoTitle: "Nuestra información",
    phoneGT: "Teléfono: +502 4796 7384",
    emailGT: "Email: sdeleon.gt@globalsdl.com",
    footerNote: "Será un gusto atenderte",
  },
  en: {
    title: "Contact Us",
    intro: "We are here to help. Fill out the form or use our contact information.",
    name: "Name",
    email: "Email",
    service: "Service Desired",
    message: "Message",
    submit: "Send",
    infoTitle: "Our Information",
    phoneGT: "Phone: +502 4796 7384",
    emailGT: "Email: sdeleon.gt@globalsdl.com",
    footerNote: "We will be happy to assist you",
  },
};

const Contact = ({ userLang }) => {
  const text = content[userLang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceID = 'service_1bp5a14';
      const templateID = 'template_si36xwu';
      const publicKey = 'FsPSjMlElPws4Nu9I';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_type: formData.service,
        message: formData.message,
        to_email: 'sdeleon.gt@globalsdl.com'
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>{text.title}</h2>
        <p className="contact-intro">{text.intro}</p>

        <div className="contact-cards">
          {/* Formulario de contacto */}
          <div className="contact-card form-card">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder={text.name} 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder={text.email} 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{text.service}</option>
                <option value="moving">Moving / Transporte</option>
                <option value="delivery">Delivery / Entrega</option>
                <option value="other">Otro / Other</option>
              </select>

              <textarea 
                name="message"
                placeholder={text.message} 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (userLang === 'es' ? 'Enviando...' : 'Sending...') : text.submit}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  {userLang === 'es' 
                    ? '¡Mensaje enviado correctamente! Te contactaremos pronto.'
                    : 'Message sent successfully! We will contact you soon.'}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  {userLang === 'es'
                    ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
                    : 'Error sending message. Please try again.'}
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="contact-card info-card">
            <h3>{text.infoTitle}</h3>
            <p className="phone">{text.phoneGT}</p>
            <p className="email">{text.emailGT}</p>
            <p className="footer-note">{text.footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
