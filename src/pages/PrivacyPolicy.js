import React from 'react';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  // Placeholder for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (placeholder)');
  };

  return (
    <div className={styles.privacyPolicyPage}>
      <div className={styles.mainContent}>
        {/* Hero Section with Slideshow */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/security-concept-with-icons-wooden-blocks-turquoise-table-flat-lay.jpg)'}}></div>
          <div className={styles.heroContent}>
            <h1>Privacy &amp; Policy</h1>
            <h6 className={styles.heroSubtitle}>At quantaSip, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices and procedures for collecting, using, and disclosing your information. By using our website, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy.</h6>
            <a href="#scroll-down" className={styles.scrollDown}>
              <svg aria-hidden="true" viewBox="0 0 512 512" width="40" height="40"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" fill="#fff"/></svg>
            </a>
          </div>
        </section>

        {/* Policy Sections */}
        <section className={styles.policySection}>
          <h2>Information Used</h2>
          <p>We may collect personal information from you when you visit our website or subscribe to our services. This may include your name, email address, and phone number.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Geospatial Information</h2>
          <p>If you share geospatial data or coordinates as part of a project or map showcased on our portfolio, we may collect and store this information.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Website Usage Information</h2>
          <p>We collect your IP address to track and analyze website traffic and diagnose technical issues.<br/>We use cookies to enhance your browsing experience, personalize content, and gather anonymous usage statistics. You can manage your cookie preferences through your browser settings.</p>
        </section>
        <section className={styles.policySection}>
          <h2>How We Use Your Information</h2>
          <p>We may use the information you provide to personalize your experience on our website and customize the content we display to you.<br/>If you provide us with your email address, we may use it to respond to your inquiries, provide updates, and send newsletters. You can unsubscribe from these communications at any time.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Data Security</h2>
          <p>We prioritize the security of your information and have implemented appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Third-Party Disclosure</h2>
          <p>We do not sell, trade, or transfer your personal information to outside parties. However, we may share certain information with trusted third-party service providers who assist us in operating our website or conducting business activities. These parties are obligated to maintain the confidentiality and security of your information.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy unless a longer retention period is required or permitted by law.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Updates to the Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We encourage you to review this page periodically for any updates. Continued use of our website after any modifications indicates your acceptance of the updated Privacy Policy.</p>
        </section>
        <section className={styles.policySection}>
          <h2>Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding your personal information or this privacy policy, please contact us at <a href="mailto:info@quantasip.com" style={{color:'#252525', textDecoration:'underline'}}>info@quantasip.com</a></p>
        </section>
        <section className={styles.policySection}>
          <p>Thank you for visiting our QuantaSIP website. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us. By using our website, you consent to the terms of this policy.</p>
        </section>

        {/* Get in Touch Section */}
        <section className={styles.getInTouchSection} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h3 style={{textAlign: 'center', marginBottom: '60px'}}>Get in Touch</h3>
          {/* Contact Form */}
          <form className={styles.contactForm} style={{maxWidth: 640, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,0,0,0.09)', padding: '56px 40px 48px 40px', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative'}} onSubmit={handleFormSubmit}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 88, height: 88, borderRadius: '50%', background: '#f4f6fa', border: '2.5px solid #e0e0e0', position: 'absolute', left: '50%', top: '-44px', transform: 'translateX(-50%)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
              <svg width="56" height="56" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
            </span>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-name">Full Name</label>
              <input type="text" id="form-field-name" name="name" placeholder="Enter your full name" required style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-email">Email</label>
              <input type="email" id="form-field-email" name="email" placeholder="Enter your email address" required style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-phone">Phone Number</label>
              <input type="tel" id="form-field-phone" name="phone" placeholder="Enter your phone number" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
            </div>
            <div className={styles.formGroup}>
              <label>Services Interested In</label>
              <div className={styles.checkboxGroup} style={{gap: 8, marginTop: 6}}>
                <label><input type="checkbox" name="services" value="Cadastral Datasets" /> Cadastral Datasets</label>
                <label><input type="checkbox" name="services" value="Land Record Verification" /> Land Record Verification</label>
                <label><input type="checkbox" name="services" value="Data Cleaning" /> Data Cleaning</label>
                <label><input type="checkbox" name="services" value="Data Correction" /> Data Correction</label>
                <label><input type="checkbox" name="services" value="Others" /> Others</label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-message">Message</label>
              <textarea id="form-field-message" name="message" placeholder="Describe your project or any specific requests" style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6, minHeight: 80}}></textarea>
            </div>
            {/* Recaptcha placeholder */}
            <div className={styles.formGroup}>
              <div className={styles.recaptchaPlaceholder}>[reCAPTCHA]</div>
            </div>
            <button type="submit" className={styles.submitButton} style={{fontSize: '1.13rem', borderRadius: 8, padding: '14px 0', background: '#183153', color: '#fff', fontWeight: 600, marginTop: 8, transition: 'background 0.2s'}}>Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© QuantaSip Pvt. Ltd. 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 