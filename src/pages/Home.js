import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

// Slideshow images
const slideshowImages = [
  'https://quantasip.com/wp-content/uploads/2024/08/modern-monitor-elegant-table.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/beautiful-landscape-high-angle-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/mobile-app-location-digital-art.png',
  'https://quantasip.com/wp-content/uploads/2024/08/from-car-city-map.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/3d-smartphone-device-with-map-gps-technology-1-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/unrecognizable-architect-drawing-plan.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/Understanding-Cadastral-Maps-Your-Guide-to-Informed-Land-Buying-copyasd.png',
  'https://quantasip.com/wp-content/uploads/2024/08/flat-lay-drawing-with-colorful-lines-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/china-city-night.jpg',
];

const animatedWords = [
  'Expertise',
  'Innovation',
  'Leadership',
  'Solutions',
];

const partnerLogos = [
  'https://quantasip.com/wp-content/uploads/2024/08/NPCI_logo.svg.png',
  'https://quantasip.com/wp-content/uploads/2024/08/Satsure_Logo-scaled-e1725512096298.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/download.png',
  'https://quantasip.com/wp-content/uploads/2024/08/images.png',
  'https://quantasip.com/wp-content/uploads/2024/08/afaqs_2023-04_892fde07-f530-4653-a60e-acf92fd98e7c_Skymet_New_Logo__Beyond_Weather.webp',
  'https://quantasip.com/wp-content/uploads/2024/08/images-2.png',
  'https://quantasip.com/wp-content/uploads/2024/08/images-1.png',
  'https://quantasip.com/wp-content/uploads/2024/08/Farmonaut_Logo_Black.png',
];

const serviceCardsRow1 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758Zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Zm270-524Z"></path></svg>
    ),
    title: 'Cadastral',
    back: 'Our GIS Solutions provide a comprehensive database of cadastral data from all States, ensuring easy access to accurate land records.',
    color: '#dbeafe', // pastel blue
  },
  {
    icon: (
      <svg className="e-font-icon-svg e-far-check-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
    ),
    title: 'Survey',
    back: 'Our GIS Solutions offer drone surveys, land surveys, and DGPS services to ensure accurate and reliable geographic data.',
    color: '#bbf7d0', // pastel green
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M458 975q-79-4-148-37t-120-86.5q-51-53.5-80.5-124.269Q80 656.463 80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q149 0 259 94t135 236h-61q-17-84-71-150t-135-99v18q0 35-24 61t-59 26h-87v87q0 16.575-13.5 27.787Q410 488 393 488h-83v88h110v125h-67L149 497q-5 20-7 39.667-2 19.666-2 39.333 0 135 91 233t227 106v60Zm392-26L716 815q-21 15-45.5 23t-50.065 8q-71.015 0-120.725-49.618Q450 746.765 450 675.882 450 605 499.618 555.5q49.617-49.5 120.5-49.5Q691 506 740.5 555.71T790 676.435q0 25.565-8.5 50.065Q773 751 759 773l134 133-43 43ZM619.859 786Q666 786 698 754.141q32-31.859 32-78T698.141 598q-31.859-32-78-32T542 597.859q-32 31.859-32 78T541.859 754q31.859 32 78 32Z"></path></svg>
    ),
    title: 'Geo-Referencing',
    back: 'Our GIS Solutions provide accurate geo-referencing services, ensuring that digital data is correctly positioned on the map.',
    color: '#fef9c3', // pastel yellow
  },
];

const serviceCardsRow2 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M356 936H180q-24 0-42-18t-18-42V700q44-5 75.5-34.5T227 593q0-43-31.5-72.5T120 486V310q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27q40 0 68.5 27t39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897 595q0 40-25.5 67T806 700v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463 829q-41 0-71.5 29.5T356 936Zm-176-60h130q25-61 69.888-84 44.888-23 83-23T546 792q45 23 70 84h130V641h45q20 0 33-13t13-33q0-20-13-33t-33-13h-45V310H511v-48q0-20-13-33t-33-13q-20 0-33 13t-13 33v48H180v130q48.15 17.817 77.575 59.686Q287 541.555 287 593.223 287 644 257.5 686T180 746v130Zm329-330Z"></path></svg>
    ),
    title: 'GIS Application Development',
    back: 'Our GIS Solutions offer designing, building, and maintaining GIS apps. These apps enable users to capture, store, analyze, and visualize spatial data.',
    color: '#e0e7ff', // pastel purple
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 936q-151 0-255.5-46.5T120 776V376q0-66 105.5-113T480 216q149 0 254.5 47T840 376v400q0 67-104.5 113.5T480 936Zm0-488q86 0 176.5-26.5T773 362q-27-32-117.5-59T480 276q-88 0-177 26t-117 60q28 35 116 60.5T480 448Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29V438q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180 438v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35V654q-28 16-63 28.5T643.5 704q-38.5 9-80 13.5T479 722q-43 0-85-4.5T313.5 704q-38.5-9-72.5-21.5T180 654v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"></path></svg>
    ),
    title: 'Geo Database',
    back: 'Our GIS Solutions provide a comprehensive database of land records, with linkages to cadastral data in the pipeline for even more accurate information',
    color: '#fee2e2', // pastel red
  },
];

const testimonials = [
  {
    name: 'Skymet Weather Pvt Ltd',
    title: 'Mr. Arjun',
    text: 'QuantaSIP has been an invaluable partner in our infrastructure development projects. Their expertise in Cadastral Mapping and Geospatial Services has allowed us to accurately plan and execute our projects, and their quick learning and ability to scale up the team has been impressive. We highly recommend QuantaSIP for any project that requires innovative GISolutions',
  },
  {
    name: 'Genesys International Ltd',
    title: 'Mr Sagar',
    text: 'We have worked with QuantaSIP on several projects, and their professionalism and attention to detail have been outstanding. Their team of experts has a strong understanding of mapping technology, and their capacity to quickly adapt to our project needs has been impressive. We look forward to continuing our partnership with QuantaSIP for future projects.',
  },
  {
    name: 'Satsure',
    title: 'Ms Rashmi',
    text: 'QuantaSIP has been an integral part of our agriculture projects, providing accurate survey and mapping services that have allowed us to optimize our operations. Their team of professionals has a deep understanding of the industry, and their expertise in geospatial services has been invaluable. We highly recommend QuantaSIP for any project that requires reliable and innovative GISolutions.',
  },
];

function PillFlipCard({ icon, title, back, color }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`${styles.pillCard} ${flipped ? styles.flipped : ''}`}
      style={{ background: color }}
      tabIndex={0}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <div className={styles.pillCardInner}>
        <div className={styles.pillCardFront}>
          {icon && <div className={styles.pillIcon}>{icon}</div>}
          {title && <div className={styles.pillTitle}>{title}</div>}
        </div>
        <div className={styles.pillCardBack}>
          <div className={styles.pillBackDesc}>{back}</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  // Slideshow logic
  const [slide, setSlide] = useState(0);
  const heroRef = useRef(null);
  const belowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated headline logic
  const [headlineIdx, setHeadlineIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((i) => (i + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Testimonials slider logic
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (e) => {
    e.preventDefault();
    if (belowRef.current) {
      belowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section
        className={styles.heroSection}
        ref={heroRef}
        style={{ height: '100vh', minHeight: '100vh', overflow: 'hidden' }}
      >
        {slideshowImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="slideshow"
            className={styles.heroSlideImg}
            style={{ opacity: slide === i ? 1 : 0, transition: 'opacity 0.5s' }}
            draggable={false}
          />
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>QuantaSip GIS Pvt. Ltd.</h1>
          <h2>Geo-Positioned Cadastral Data & Land Records</h2>
          <h2>Clear, Cleansed, Corrected Maps</h2>
          <a
            href="#scroll-down"
            className={styles.scrollDownIcon}
            onClick={handleArrowClick}
            tabIndex={0}
            aria-label="Scroll down"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              width="48"
              height="48"
              className={styles.animatedArrow}
            >
              <path
                d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Rest of the page, always visible */}
      <div ref={belowRef}>
        <div className={styles.mainContent}>
          {/* Animated Headline Section */}
          <div className={styles.elementorContainer}>
            <div className={styles.elementorWidget}>
              <div className={styles.elementorWidgetContainer}>
                <h3 className={styles.elementorHeadline}>
                  <span className={styles.elementorHeadlinePlainText}>Our </span>
                  <span className={styles.elementorHeadlineDynamicWrapper}>
                    <span className={`${styles.elementorHeadlineDynamicText} ${styles.elementorHeadlineTextActive}`}>
                      {animatedWords[headlineIdx]}
                    </span>
                    {animatedWords.map((word, index) => (
                      index !== headlineIdx && (
                        <span key={index} className={styles.elementorHeadlineDynamicText}>
                          {word}
                        </span>
                      )
                    ))}
                  </span>
                  <span className={styles.elementorHeadlinePlainText}> Across Industries</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Industries Solutions Section - GRID LAYOUT */}
          <div className={styles.elementorIndustriesGrid}>
            {/* BFSI Solutions */}
            <div className={styles.elementorIndustry}>
              <h5 className={styles.elementorHeadingTitle}>BFSI Solutions</h5>
              <div className={styles.elementorLogosRow}>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/NPCI_logo.svg.png" alt="NPCI Logo" />
                </div>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/images-1.png" alt="Reliance General Insurance Logo" />
                </div>
              </div>
              <div className={styles.elementorWidgetContainer}>
                <p>…and many more</p>
              </div>
            </div>
            {/* Agri-Innovator Solutions */}
            <div className={styles.elementorIndustry}>
              <h5 className={styles.elementorHeadingTitle}>Agri-Innovator Solutions</h5>
              <div className={styles.elementorLogosRow}>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/09/DeHaat.png" alt="DeHaat Logo" />
                </div>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/Farmonaut_Logo_Black.png" alt="Farmonaut Logo" />
                </div>
              </div>
              <div className={styles.elementorWidgetContainer}>
                <p>…and many more</p>
              </div>
            </div>
            {/* Geospatial and GIS Services */}
            <div className={styles.elementorIndustry}>
              <h5 className={styles.elementorHeadingTitle}>Geospatial and GIS Services</h5>
              <div className={styles.elementorLogosRow}>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/images.png" alt="MAHATRANSCO Logo" />
                </div>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/images-2.png" alt="GENESYS Logo" />
                </div>
              </div>
              <div className={styles.elementorWidgetContainer}>
                <p>…and many more</p>
              </div>
            </div>
          </div>
          <div className={styles.elementorIndustriesGridRow}>
            {/* Agri-Tech Innovations */}
            <div className={styles.elementorIndustry}>
              <h5 className={styles.elementorHeadingTitle}>Agri-Tech Innovations</h5>
              <div className={styles.elementorLogosRow}>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/Satsure_Logo-scaled-e1725512096298.jpg" alt="SATSURE Logo" />
                </div>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/afaqs_2023-04_892fde07-f530-4653-a60e-acf92fd98e7c_Skymet_New_Logo__Beyond_Weather.webp" alt="Skymet Logo" />
                </div>
              </div>
              <div className={styles.elementorWidgetContainer}>
                <p>…and many more</p>
              </div>
            </div>
            {/* Surveying Services */}
            <div className={styles.elementorIndustry}>
              <h5 className={styles.elementorHeadingTitle}>Surveying Services</h5>
              <div className={styles.elementorLogosRow}>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/09/logo-2-e1725512065302.png" alt="Maha Metro Logo" />
                </div>
                <div className={styles.elementorWidgetContainer}>
                  <img src="https://quantasip.com/wp-content/uploads/2024/08/NPCI_logo.svg.png" alt="NPCI Logo" />
                </div>
              </div>
              <div className={styles.elementorWidgetContainer}>
                <p>…and many more</p>
              </div>
            </div>
          </div>
          {/* Company Intro Section - right aligned, light green background */}
      <section className={styles.companyIntroSection}>
        <div className={styles.companyIntroContent}>
          <h2>Building a Better Tomorrow with Innovative GIS Solutions</h2>
          <p>QuantaSip GIS Pvt Ltd is your go-to EPC contractor for Railway, Highway, Powerline, and Irrigation Projects. Our team of 80+ staff, including Geo Spatial Analysts, developers, data analysts, and SMEs, have completed Google Map Data development, Pan India Highway data collection, and Geo Positioned Data Collection for all power towers of MSETCL. We have been recognized as one of the top 10 GIS companies in India by Business Outlook. Our partnership with NHAI for a GIS-enabled toll system makes us a pan-India vendor. Trust us to deliver quality services that exceed your expectations.</p>
        </div>
          </section>
          {/* Our GIS Solution (Service Cards) */}
          <section className={styles.servicesSection}>
            <h3>Our GIS Solution</h3>
            <h4>Solving Key Challenges in Infrastructure Development</h4>
            <div className={styles.serviceCardsGrid}>
              <div className={styles.serviceCardsRow}>
                {serviceCardsRow1.map((card, i) => (
                  <PillFlipCard key={i} {...card} />
                ))}
              </div>
              <div className={styles.serviceCardsRow}>
                {serviceCardsRow2.map((card, i) => (
                  <PillFlipCard key={i} {...card} />
                ))}
              </div>
            </div>
          </section>

          {/* What Our Clients Say (Testimonials) */}
          <section className={styles.testimonialsSection}>
            <h2>What Our Clients Say</h2>
            <div className={styles.testimonialsSlider}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={styles.testimonial + ' ' + (testimonialIdx === i ? styles.active : '')}
                  style={{ display: testimonialIdx === i ? 'block' : 'none' }}
                >
                  <cite>
                    <span>{t.name}</span>
                    <span>{t.title}</span>
                  </cite>
                  <div className={styles.testimonialText}>{t.text}</div>
                </div>
              ))}
              <div className={styles.testimonialNav}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={testimonialIdx === i ? styles.active : ''}
                    onClick={() => setTestimonialIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Our Services Section - Card Grid */}
          <section className={styles.ourServicesSection}>
            <h2 className={styles.ourServicesTitle}>Our Services</h2>
            <h3 className={styles.ourServicesSubtitle}>Comprehensive GIS Solutions for Infrastructure Development</h3>
            <div className={styles.ourServicesGrid}>
              {/* Card 1 */}
              <div className={styles.ourServiceCard}>
                <div className={styles.ourServiceBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/istockphoto-1452888582-612x612-1.jpg)'}} />
                <div className={styles.ourServiceOverlay} />
                <div className={styles.ourServiceContent}>
                  <h4 className={styles.ourServiceCardTitle}>Cadastral Data Sets</h4>
                  <a className={styles.ourServiceButton} href="https://quantasip.com/services#service1">Know More</a>
                </div>
              </div>
              {/* Card 2 */}
              <div className={styles.ourServiceCard}>
                <div className={styles.ourServiceBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/view-land-plot-real-estate-business-development.jpg)'}} />
                <div className={styles.ourServiceOverlay} />
                <div className={styles.ourServiceContent}>
                  <h4 className={styles.ourServiceCardTitle}>Land Record Verification</h4>
                  <a className={styles.ourServiceButton} href="https://quantasip.com/services#service2">Know More</a>
                </div>
              </div>
              {/* Card 3 */}
              <div className={styles.ourServiceCard}>
                <div className={styles.ourServiceBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/it-expert-updating-ai-systems-scaled.jpg)'}} />
                <div className={styles.ourServiceOverlay} />
                <div className={styles.ourServiceContent}>
                  <h4 className={styles.ourServiceCardTitle}>API Services</h4>
                  <a className={styles.ourServiceButton} href="https://quantasip.com/services#service2">Know More</a>
                </div>
              </div>
              {/* Card 4 */}
              <div className={styles.ourServiceCard}>
                <div className={styles.ourServiceBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2023/05/3.webp)'}} />
                <div className={styles.ourServiceOverlay} />
                <div className={styles.ourServiceContent}>
                  <h4 className={styles.ourServiceCardTitle}>Data Cleaning, Correction</h4>
                  <a className={styles.ourServiceButton} href="https://quantasip.com/services#service3">Know More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Awards & Recognition */}
          <section className={styles.awardsSection}>
            <h2>"Our organization is thrilled to receive the Geospatia Startup of the Year Award for GeoSpatia-24."</h2>
            <div className={styles.awardImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-1.png" alt="Award 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-2.png" alt="Award 2" />
            </div>
            <h2>Lokmat Achievers Award</h2>
            <div className={styles.awardImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-10-at-11.41.26-1024x837.jpeg" alt="Lokmat 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/lokmat_1-2.jpeg" alt="Lokmat 2" />
            </div>
            <h2>"Our Technical Director Javed Sheikh, featured in Geospatial Artha Magazine Volume 2. Honored to be positioned alongside the Industry Leaders!!"</h2>
            <a href="https://issuu.com/geospatialworld/docs/geospatial_artha_sept-oct_2023_digital_edition" target="_blank" rel="noopener noreferrer">
              <img src="https://quantasip.com/wp-content/uploads/2024/09/Screenshot-2024-09-11-at-11.57.23%E2%80%AFAM.png" alt="Magazine" />
            </a>
            <h2>We've Sponsored</h2>
            <div className={styles.sponsorImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/09/images.jpeg" alt="Sponsor 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/images-2.png" alt="Sponsor 2" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/logo-2-1-1024x468.png" alt="Sponsor 3" />
            </div>
          </section>

          {/* Get in Touch (Contact Section) */}
          <section className={styles.contactSection}>
            <h3>Get in Touch</h3>
            <h5>Connect with us today for tailored GIS solutions and expert support for your infrastructure projects.</h5>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" /> Cadastral Datasets</label>
                <label><input type="checkbox" /> Land Record Verification</label>
                <label><input type="checkbox" /> Data Cleaning</label>
                <label><input type="checkbox" /> Data Correction</label>
                <label><input type="checkbox" /> Others</label>
              </div>
              <textarea placeholder="Describe your project or any specific requests" />
              <button type="submit">Send</button>
            </form>
            <div className={styles.contactInfo}>
              <ul>
                <li><a href="mailto:info@quantasip.com">info@quantasip.com</a></li>
                <li><a href="tel:7517860524">+91 7517860524</a></li>
                <li>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058​</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home; 