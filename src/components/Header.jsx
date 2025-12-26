import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    {
      label: 'Start a Business',
      items: [
        { name: 'Proprietorship', path: '/proprietorship' },
        { name: 'Partnership', path: '/partnership' },
        { name: 'One Person Company', path: '/opc' },
        { name: 'Limited Liability Partnership', path: '/llp' },
        { name: 'Private Limited Company', path: '/plc' },
        { name: 'Trust Registration', path: '/trust' },
        { name: 'Society Registration', path: '/society' },
      ]
    },
    {
      label: 'Licence/Registration',
      items: [
        { name: 'Digital Signature', path: '/digital-signature' },
        { name: 'Udyam Registration', path: '/udyam' },
        { name: 'Startup India Registration', path: '/startup-india' },
        { name: 'FSSAI Registration', path: '/fssai' },
        { name: 'Professional Tax', path: '/professional-tax' },
        { name: 'Darpan Registration', path: '/darpan' },
        { name: 'RCMC Registration', path: '/rcmc' },
        { name: 'Halal Certificate', path: '/halal' },
        { name: 'Import Export Code', path: '/import-export' },
        { name: 'Trade License', path: '/trade-license' },
      ]
    },
    {
      label: 'GST & Taxes',
      items: [
        { name: 'GST Registration', path: '/gst-registration' },
        { name: 'GST Filing', path: '/gst-filing' },
        { name: 'LUT Filing Under GST', path: '/lut-filing' },
        { name: 'ITR Filing', path: '/itr-filing' },
        { name: 'GST Cancellation', path: '/gst-cancellation' },
        { name: 'Accounting', path: '/accounting' },
        { name: 'TDS Return Filing', path: '/tds-return' },
        { name: 'Professional Tax Registration', path: '/professional-tax-reg' },
      ]
    },
    {
      label: 'Trademark',
      items: [
        { name: 'Trademark Registration', path: '/trademark' },
        { name: 'ISO 9001-2015', path: '/iso' },
      ]
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navbarContent}>
            <Link to="/" className={styles.navbarLogo}>
              <img
                src="/img/logo.png"
                alt="Inamdar & Co."
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>

            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isMobileMenuOpen ? styles.open : ''}></span>
              <span className={isMobileMenuOpen ? styles.open : ''}></span>
              <span className={isMobileMenuOpen ? styles.open : ''}></span>
            </button>

            <div className={`${styles.navbarMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.navItem}
                  onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown(index)}
                  onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
                >
                  <button
                    className={styles.navLink}
                    onClick={() => isMobileMenuOpen && toggleDropdown(index)}
                  >
                    {item.label}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className={`${styles.dropdownMenu} ${activeDropdown === index ? styles.show : ''}`}>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={styles.dropdownItem}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

