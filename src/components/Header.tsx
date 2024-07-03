'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'Community Participation', href: '/services/community-participation' },
      { label: 'Development-Life Skills', href: '/services/development-life-skills' },
      { label: 'Assist with Personal Activities', href: '/services/personal-care-tasks' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // This sets the current path from the window location path
    setCurrentPath(window.location.pathname);
    console.log(currentPath)
  }, []);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const renderNavItems = (items: any[]) => {
    return items.map((item) => {
      if (item.subItems) {
        return (
          <li key={item.label} className="dropdown">
            <Link href={item.href}>
              <span>{item.label}</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
            </Link>
            <ul>{renderNavItems(item.subItems)}</ul>
          </li>
        );
      } else {
        return (
          <li key={item.label} className={currentPath === item.href ? 'active' : ''}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        );
      }
    });
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* <Image src="/img/logo.png" height={50} width={50} alt="We Care Support" /> */}
          <h1 className="sitename">We Care Support</h1>
        </a>

        <nav id="navmenu" className={`navmenu`}>
          <ul>{renderNavItems(navItems)}</ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isActive ? 'bi-x' : 'bi-list'}`} onClick={toggleNav}></i>
        </nav>

        <a className="btn-getstarted" href="courses.html">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
