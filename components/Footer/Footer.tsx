import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';
import logo from '../../images/Double Double Logo.jpg';

export default function Footer() {
    return (
        <div className="footer">
          <ul className="footer-links">
            <li className='footer-item'>
              <Link href="/" className="footer-link"><span className='footer-link-text'>Home</span></Link>
            </li>
            <li className='footer-item'>
              <Link href="/draft-guide" className="footer-link"><span className='footer-link-text'>Draft Guide</span></Link>
            </li>
            <li className='footer-item'>
              <Link href="/blog" className="footer-link"><span className='footer-link-text'>Blog</span></Link>
            </li>
            <li className='footer-item'>
              <Link href="/contact-us" className="footer-link"><span className='footer-link-text'>Contact Us</span></Link>
            </li>
          </ul>
          <div className="footer-info">
            <Image src={'/logo.jpg'} alt="logo" className="footer-logo" width={200} height={200}/>
            <p className="footer-message"><span className='footer-design-text'>Designed by Ben Hamilton</span></p>
          </div>
        </div>
      );
};