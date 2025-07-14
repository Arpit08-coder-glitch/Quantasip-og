import React from 'react';
import styles from '../pages/Home.module.css';

const Footer = () => (
  <footer className={styles.footerCustom}>
    <div className={styles.footerColumns}>
      <div className={styles.footerCol}>
        <h2>Company</h2>
        <ul className={styles.footerLinks}>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/careers">Careers</a></li>
          <li style={{marginTop: '10px', display: 'flex', gap: '12px'}}>
            <a href="https://www.linkedin.com/company/quantasip-gis-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{display: 'inline-flex', alignItems: 'center'}}>
              <svg width="22" height="22" fill="#183153" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
            <a href="https://www.instagram.com/quantasip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{display: 'inline-flex', alignItems: 'center'}}>
              <svg width="22" height="22" fill="#183153" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.851c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h2>Contact Us</h2>
        <ul className={styles.footerContactList}>
          <li><span className={styles.footerIcon}>✉️</span> info@quantasip.com</li>
          <li><span className={styles.footerIcon}>📞</span> +91 7517860524</li>
          <li><span className={styles.footerIcon}>📍</span>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058</li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h2>Write to Us</h2>
        <form className={styles.footerFormCustom}>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div className={styles.footerCopyright}>
      © QuantaSip Pvt. Ltd. 2023
    </div>
  </footer>
);

export default Footer; 