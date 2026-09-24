import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, ArrowUpRight, Bookmark, BookOpen, BriefcaseBusiness, CalendarDays,
  Check, CheckCircle2, ChevronDown, ChevronRight, ChevronUp, CircleDot, CircleHelp, Clock3,
  Compass, Copy, Download, ExternalLink, FileText, Flag, Globe2, GraduationCap, Heart,
  Info, Layers3, LayoutDashboard, Lightbulb, ListChecks, Mail, MapPin, Megaphone, Menu,
  MessagesSquare, MousePointer2, Package, PanelsTopLeft, PenLine, Play, Plus, Presentation,
  Rocket, Search, Send, ShieldCheck, ShoppingBag, SlidersHorizontal, Sparkles, Target,
  Wallet, Workflow, X, Zap, Blocks, RotateCcw
} from 'lucide-react';
import { useApp } from './state';
import { BUDGET_LABELS, FORMAT_LABELS, getMatch } from './data';

const icons = {
  arrow: ArrowRight, back: ArrowLeft, up: ArrowUpRight, bookmark: Bookmark, book: BookOpen,
  briefcase: BriefcaseBusiness, calendar: CalendarDays, check: Check, checked: CheckCircle2,
  down: ChevronDown, right: ChevronRight, chevronUp: ChevronUp, dot: CircleDot, help: CircleHelp,
  clock: Clock3, compass: Compass, copy: Copy, download: Download, external: ExternalLink,
  file: FileText, flag: Flag, globe: Globe2, graduation: GraduationCap, heart: Heart,
  info: Info, layers: Layers3, dashboard: LayoutDashboard, lightbulb: Lightbulb,
  list: ListChecks, mail: Mail, map: MapPin, megaphone: Megaphone, menu: Menu,
  messages: MessagesSquare, mouse: MousePointer2, package: Package, panels: PanelsTopLeft,
  pen: PenLine, play: Play, plus: Plus, presentation: Presentation, rocket: Rocket,
  search: Search, send: Send, shield: ShieldCheck, shopping: ShoppingBag,
  sliders: SlidersHorizontal, sparkles: Sparkles, target: Target, wallet: Wallet,
  workflow: Workflow, close: X, zap: Zap, blocks: Blocks, reset: RotateCcw,
};

export function Icon({ name, size = 18, strokeWidth = 1.8, ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />;
}

export function Brand({ light = false, small = false }) {
  return <Link className={`brand ${light ? 'brand-light' : ''} ${small ? 'brand-small' : ''}`} to="/" aria-label="Dayone home">
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 38 38" fill="none"><path d="M19 3.5V15M19 23v11.5M3.5 19H15M23 19h11.5M8 8l7.6 7.6M22.4 22.4 30 30M30 8l-7.6 7.6M15.6 22.4 8 30" stroke="currentColor" strokeWidth="4.1" strokeLinecap="round"/><circle cx="19" cy="19" r="2.6" fill="currentColor"/></svg>
    </span><span>dayone<span className="brand-period">.</span></span>
  </Link>;
}

export function SectionEyebrow({ children, light = false, icon = 'sparkles' }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><Icon name={icon} size={13} strokeWidth={2.5} />{children}</div>;
}

export function Header({ simplified = false }) {
  const { activeProjectId } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const close = () => setMobileOpen(false);
  return <header className={`header-wrap ${simplified ? 'header-simple' : ''}`}>
    <div className="header max-wrap">
      <Brand />
      {!simplified && <nav className={`header-nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <Link to="/#how-it-works" onClick={close} className={location.hash === '#how-it-works' ? 'active' : ''}>How it works</Link>
        <Link to="/paths" onClick={close} className={location.pathname.startsWith('/paths') ? 'active' : ''}>Explore paths</Link>
        <Link to="/#why-dayone" onClick={close}>Why Dayone</Link>
        <Link to="/#faq" onClick={close}>FAQs</Link>
        {activeProjectId && <Link className="mobile-plan" to="/workspace" onClick={close}>My workspace</Link>}
      </nav>}
      <div className="header-actions">
        {!simplified && activeProjectId && <Link className="header-plan" to="/workspace">My workspace <Icon name="up" size={15} /></Link>}
        <Link to={simplified ? '/' : '/start'} className={`btn btn-dark btn-sm ${simplified ? 'header-home' : ''}`} onClick={close}>{simplified ? 'Back to home' : 'Find my path'} {!simplified && <Icon name="up" size={15} />}</Link>
        {!simplified && <button className="mobile-menu-btn" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><Icon name={mobileOpen ? 'close' : 'menu'} size={22} /></button>}
      </div>
    </div>
  </header>;
}

export function Footer() {
  const { activeProjectId } = useApp();
  return <footer className="footer max-wrap">
    <div className="footer-top">
      <div><SectionEyebrow light icon="sparkles">THE NEXT STEP IS YOURS</SectionEyebrow><h2>You don’t need the<br />whole map. <em>Just a start.</em></h2></div>
      <div className="footer-cta"><p>A business shaped by what you know, built one doable step at a time.</p><Link to={activeProjectId ? '/workspace' : '/start'} className="btn btn-white">{activeProjectId ? 'Continue my plan' : 'Find my path'} <Icon name="up" size={17} /></Link></div>
    </div>
    <div className="footer-links">
      <div className="footer-about"><Brand light small /><p>Build something of your own.<br />Start from where you are.</p></div>
      <div><span>EXPLORE</span><Link to="/paths">Business paths</Link><Link to="/#how-it-works">How it works</Link><Link to="/#faq">FAQs</Link></div>
      <div><span>YOUR JOURNEY</span><Link to="/start">Find my path</Link><Link to={activeProjectId ? '/workspace' : '/start'}>My workspace</Link><Link to="/#why-dayone">Our approach</Link></div>
      <div className="footer-honesty"><span>A LITTLE NOTE</span><p>Every business takes work. Dayone helps you choose your next step, not promise an outcome.</p></div>
    </div>
    <div className="footer-wordmark" aria-hidden="true">dayone.</div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Dayone. Built for real beginnings.</span><span>Your progress stays in this browser. <Icon name="sparkles" size={13}/></span></div>
  </footer>;
}

export function PathVisual({ path, compact = false }) {
  return <div className={`path-visual path-tone-${path.tone || 'mint'} ${compact ? 'path-visual-compact' : ''}`}>
    <div className="visual-topline"><span className="visual-sun"><Icon name={path.icon} size={compact ? 19 : 22} strokeWidth={1.7} /></span><span className="visual-crosses" aria-hidden="true">✳ &nbsp;· &nbsp; ✳</span></div>
    <div className="visual-illustration" aria-hidden="true"><div className="visual-arc visual-arc-one"/><div className="visual-arc visual-arc-two"/><div className="visual-circle"><Icon name={path.icon} size={compact ? 39 : 55} strokeWidth={1.2} /></div><span className="visual-dot visual-dot-a"/><span className="visual-dot visual-dot-b"/><span className="visual-line"/></div>
    <span className="visual-caption">A PATH TO MAKE YOUR OWN <Icon name="up" size={13} /></span>
  </div>;
}

export function PathCard({ path, showMatch = false, featured = false }) {
  const { profile, savedPaths, toggleSaved } = useApp();
  const match = getMatch(path, profile);
  const saved = savedPaths.includes(path.id);
  return <article className={`path-card ${featured ? 'path-card-featured' : ''}`}>
    <div className="path-card-image"><PathVisual path={path} compact /><button className={`save-button ${saved ? 'saved' : ''}`} type="button" aria-label={saved ? `Remove ${path.title} from saved paths` : `Save ${path.title}`} title={saved ? 'Saved' : 'Save this path'} onClick={() => toggleSaved(path.id)}><Icon name="bookmark" size={16} fill={saved ? 'currentColor' : 'none'} /></button></div>
    <div className="path-card-body">
      <div className="path-card-top"><span className="card-kicker">{path.label}</span>{showMatch && profile && <span className="match-pill"><span className="tiny-spark">✳</span>{match.level}</span>}</div>
      <Link to={`/paths/${path.id}`} className="path-title-link"><h3>{path.title}</h3></Link><p className="path-summary">{path.summary}</p>
      {showMatch && profile && <div className="path-reason"><Icon name="sparkles" size={14} />{match.reasons[0]}</div>}
      <div className="path-card-footer"><div className="path-card-facts"><span><Icon name="clock" size={15} />{path.minHours}+ hrs / week</span><span><Icon name="wallet" size={15} />{BUDGET_LABELS[path.budget]}</span></div><Link className="round-arrow" to={`/paths/${path.id}`} aria-label={`Explore ${path.title}`}><Icon name="up" size={18} /></Link></div>
    </div>
  </article>;
}

export function MiniPreview() {
  return <div className="mini-app" aria-label="Preview of the Dayone personal launch workspace">
    <div className="mini-app-top"><div className="mini-app-logo"><span className="mini-burst">✳</span><strong>dayone</strong><span className="mini-light">/ your space</span></div><div className="mini-app-search"><Icon name="search" size={13} />Search your plan...</div><div className="mini-app-topright"><span className="mini-round"><Icon name="help" size={13}/></span><span className="mini-avatar">Y</span></div></div>
    <div className="mini-app-inside"><div className="mini-sidebar"><span className="mini-label">YOUR JOURNEY</span><span className="mini-side-active"><Icon name="dashboard" size={13}/> Overview</span><span><Icon name="compass" size={13}/> My path</span><span><Icon name="file" size={13}/> My drafts</span><div className="mini-side-bottom"><span className="mini-circle-sticker">✳</span><small>One step at a time.</small></div></div>
      <div className="mini-main"><div className="mini-breadcrumb">MY WORKSPACE &nbsp; / &nbsp; YOUR STARTING POINT</div><div className="mini-heading"><div><h3>Good things start here<span>.</span></h3><p>A path built around what you bring to the table.</p></div><span className="mini-today">✳ &nbsp; Your day one</span></div>
        <div className="mini-panels"><div className="mini-match-card"><div className="mini-match-label"><span className="mini-green-dot"/> YOUR PATH</div><div className="mini-match-inner"><div className="mini-match-icon"><Icon name="workflow" size={27}/></div><div><strong>Remote operations support</strong><small>Help small teams make the everyday easier.</small></div></div><div className="mini-match-tags"><span>✳ &nbsp; Organizing</span><span>✳ &nbsp; Helping people</span></div><div className="mini-match-bottom">A good place to begin <Icon name="up" size={13}/></div></div>
          <div className="mini-step-card"><div className="mini-match-label">YOUR NEXT STEPS <span>01 / 06</span></div><div className="mini-step-row mini-step-current"><b>01</b><span><strong>Find your focus</strong><small>Start here · 3 small tasks</small></span><Icon name="arrow" size={13}/></div><div className="mini-step-row"><b>02</b><span><strong>Check the need</strong><small>Talk to real people</small></span></div><div className="mini-step-row"><b>03</b><span><strong>Shape your offer</strong><small>Make it something real</small></span></div></div></div>
        <div className="mini-bottom-card"><span className="mini-bottom-icon"><Icon name="lightbulb" size={16}/></span><span><b>Small next move</b><small>Ask one owner what keeps falling off their to-do list.</small></span><span className="mini-bottom-arrow"><Icon name="arrow" size={14}/></span></div>
      </div>
    </div>
  </div>;
}
