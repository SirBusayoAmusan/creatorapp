import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { AppProvider } from './state';
import Landing from './Landing';
import Onboarding from './Onboarding';
import { Browse, Matches, PathDetail } from './Explore';
import Workspace from './Workspace';
import { Footer, Header, Icon } from './components';
import { getPathById } from './data';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    const sectionTitles = {
      '/': 'Dayone — build something of your own',
      '/start': 'Find your starting point — Dayone',
      '/matches': 'Your business matches — Dayone',
      '/paths': 'Explore business paths — Dayone',
      '/workspace': 'Your launch workspace — Dayone',
    };
    const pathName = location.pathname.startsWith('/paths/') ? getPathById(location.pathname.split('/')[2])?.title : null;
    document.title = pathName ? `${pathName} — Dayone` : sectionTitles[location.pathname] || 'Dayone — build something of your own';
    if (location.hash) {
      window.setTimeout(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' }), 120);
    } else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

function NotFound() {
  return <div className="site inner-page"><Header/><main className="max-wrap not-found"><span>✳</span><h1>Looks like we took a wrong turn.</h1><p>No worries. There’s always a way back to the beginning.</p><Link to="/" className="btn btn-dark">Back to Dayone <Icon name="arrow" size={17}/></Link></main><Footer/></div>;
}

export default function App() {
  return <AppProvider><BrowserRouter><ScrollManager/><Routes><Route path="/" element={<Landing/>}/><Route path="/start" element={<Onboarding/>}/><Route path="/matches" element={<Matches/>}/><Route path="/paths" element={<Browse/>}/><Route path="/paths/:id" element={<PathDetail/>}/><Route path="/workspace" element={<Workspace/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></AppProvider>;
}
