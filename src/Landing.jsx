import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header, Icon, MiniPreview, PathCard, SectionEyebrow } from './components';
import { PATHS } from './data';
import { useApp } from './state';

const faqs = [
  { q: 'What if I have no business idea at all?', a: 'That is a perfectly good starting point. Tell us about your skills, interests, time, and resources. We’ll suggest a few starter paths and explain why each might be worth exploring.' },
  { q: 'What if I already know what I want to build?', a: 'You can bring your own idea. We’ll take you straight into a practical plan to test the need, shape an offer, set up the essentials, find customers, and launch.' },
  { q: 'Do I need money or business experience?', a: 'No fixed amount of money or experience is required to begin. Some paths do need more time or upfront spending than others; we show those tradeoffs so you can choose thoughtfully.' },
  { q: 'Will this guarantee I make money?', a: 'No. Starting a business involves uncertainty. Dayone is a guide for making better decisions and taking useful action, not a promise of sales or income.' },
  { q: 'Does it work if I live outside the US?', a: 'Yes, the journey is designed for people in different locations. You should check local rules, taxes, available payments, and any profession-specific requirements before you start selling.' },
  { q: 'Will my work be saved?', a: 'Your plan, task progress, and drafts are saved in this browser on this device. You can also download a copy of your plan. Accounts and cross-device sync are not included in this version.' },
];

function HeroAside() {
  return <aside className="hero-aside">
    <div className="hero-choice-card"><div className="hero-choice-top"><span className="choice-sun">✳</span><span>WELCOME TO YOUR STARTING POINT</span></div><h2>There’s no one way<br />to begin.</h2><p>Wherever you are in the process, there’s a next step you can take.</p><div className="hero-choice-options">
      <Link to="/start?mode=discover"><span className="option-icon option-icon-lilac"><Icon name="sparkles" size={17}/></span><span>I’m looking for an idea</span><Icon name="up" size={16}/></Link>
      <Link to="/start?mode=idea"><span className="option-icon option-icon-mint"><Icon name="lightbulb" size={17}/></span><span>I have an idea already</span><Icon name="up" size={16}/></Link>
      <Link to="/start?mode=started"><span className="option-icon option-icon-peach"><Icon name="rocket" size={17}/></span><span>I’ve already started</span><Icon name="up" size={16}/></Link>
    </div></div>
    <div className="hero-note-card"><div className="hero-note-top"><span className="note-spark">✳</span><span>THE LITTLE-BY-LITTLE WAY</span></div><p>Not another pile of ideas.<br /><strong>A path you can actually walk.</strong></p><div className="note-bottom"><span>Made for real people,<br />real lives, real beginnings.</span><span className="note-doodle" aria-hidden="true">↗</span></div></div>
    <div className="hero-tiny-card"><span className="tiny-card-icon"><Icon name="heart" size={17}/></span><div><strong>Start with what you have.</strong><small>No perfect résumé. No perfect timing.</small></div><span className="tiny-card-star" aria-hidden="true">✳</span></div>
  </aside>;
}

function Hero() {
  const { activeProjectId } = useApp();
  return <div className="hero-grid max-wrap">
    <section className="hero-main">
      <div className="hero-copy"><div className="hero-pill"><span className="hero-pill-star">✳</span> FOR EVERY KIND OF BEGINNING</div>
        <h1>Build a business<br />that starts <em>with you.</em></h1>
        <p>Your skills. Your experience. Your real life. Find a business direction that fits, then take it from idea to launch—one clear step at a time.</p>
        <div className="hero-buttons"><Link to="/start" className="btn btn-dark btn-lg">Find my path <Icon name="up" size={17}/></Link><Link to="/#how-it-works" className="btn btn-translucent btn-lg">See how it works <Icon name="arrow" size={17}/></Link></div>
        <div className="hero-reassurance"><div className="reassurance-faces"><span>✳</span><span>●</span><span>↗</span></div><span>No perfect idea needed. Just a place to begin.</span></div>
      </div>
      <div className="hero-preview-wrap"><div className="floating-sticker sticker-left"><Icon name="sparkles" size={14}/> Made around you</div><div className="floating-sticker sticker-right"><span className="tiny-green-dot"/> A clearer next step</div><MiniPreview /></div>
    </section><HeroAside />
    <div className="hero-underbar"><span><Icon name="check" size={16}/> Built around your experience</span><span><Icon name="check" size={16}/> Progress at your pace</span><span><Icon name="check" size={16}/> Practical, not overwhelming</span><Link to={activeProjectId ? '/workspace' : '/start'}>{activeProjectId ? 'Continue your plan' : 'Begin here'} <Icon name="arrow" size={15}/></Link></div>
  </div>;
}

function StorySection() {
  return <section className="story-section max-wrap" id="why-dayone"><div className="story-visual">
    <div className="story-window"><div className="story-window-head"><span><span className="story-logo-dot">✳</span> Your starting point</span><span className="story-window-dots">● ● ●</span></div><div className="story-window-body"><span className="story-window-eyebrow">YOUR PATH, NOT SOMEONE ELSE’S</span><h3>What you have<br />is enough to begin.</h3><div className="story-tags"><span>✳ &nbsp; Good with people</span><span>✳ &nbsp; 5 hours a week</span><span>✳ &nbsp; Starting small</span></div><div className="story-divider"/><div className="story-suggestion"><span><Icon name="workflow" size={22}/></span><div><small>A PATH TO EXPLORE</small><strong>Remote operations support</strong><p>Help small teams make the everyday easier.</p></div><Icon name="up" size={16}/></div></div></div>
    <div className="story-float story-float-top"><Icon name="sparkles" size={18}/><span>Your skills matter.</span></div><div className="story-float story-float-bottom"><span className="story-float-check"><Icon name="check" size={16}/></span><span>One doable step at a time</span></div>
  </div><div className="story-copy"><SectionEyebrow icon="sparkles">THE PROBLEM WE’RE SOLVING</SectionEyebrow><h2>Too many ideas.<br /><em>Not enough direction.</em></h2><p>Most advice starts with the business. We start with the person. What you know, what you enjoy, and what your life has room for all matter when choosing what to build.</p><p>Dayone turns that starting point into a few realistic possibilities—and a practical plan to explore the one you choose.</p><Link className="text-link" to="/start">Find your starting point <Icon name="up" size={18}/></Link></div></section>;
}

function HowSection() {
  const steps = [
    { no: '01', icon: 'compass', name: 'Tell us where you are', body: 'Come with an idea, a half-formed thought, or absolutely nothing yet. We’ll meet you there.', tag: 'YOUR STARTING POINT' },
    { no: '02', icon: 'sparkles', name: 'Find a path that fits', body: 'Explore business paths with plain-English reasons, real tradeoffs, and a first move you could actually make.', tag: 'YOUR POSSIBILITIES' },
    { no: '03', icon: 'flag', name: 'Make it happen, step by step', body: 'Work through validation, your offer, the essentials, first customers, and launch—without trying to do it all today.', tag: 'YOUR NEXT STEPS' },
  ];
  return <section id="how-it-works" className="how-section max-wrap"><div className="section-heading"><div><SectionEyebrow icon="sparkles">A SIMPLE WAY FORWARD</SectionEyebrow><h2>From “what if?”<br />to <em>“I’m doing this.”</em></h2></div><p>Not a course you have to finish. A flexible guide you can actually use while building something of your own.</p></div><div className="how-cards">{steps.map((step) => <div className="how-card" key={step.no}><div className="how-card-top"><span className="how-icon"><Icon name={step.icon} size={23}/></span><span className="how-number">{step.no} / 03</span></div><div className="how-line"/><span className="how-tag">{step.tag}</span><h3>{step.name}</h3><p>{step.body}</p><div className="how-card-arrow"><Icon name="up" size={17}/></div></div>)}</div></section>;
}

function PathsSection() {
  return <section className="paths-section max-wrap"><div className="section-heading"><div><SectionEyebrow icon="sparkles">SOMEWHERE TO START</SectionEyebrow><h2>A few paths. <em>So many ways in.</em></h2></div><div><p>Services, teaching, products, and more. These are starting points to investigate, not promises of income.</p><Link className="text-link" to="/paths">Explore all paths <Icon name="up" size={18}/></Link></div></div><div className="featured-path-grid">{[PATHS[0], PATHS[4], PATHS[1]].map((path) => <PathCard path={path} key={path.id}/>)}</div></section>;
}

function AnywhereSection() {
  return <section className="anywhere-section max-wrap"><div className="anywhere-head"><SectionEyebrow icon="sparkles">WHATEVER YOUR DAY ONE LOOKS LIKE</SectionEyebrow><h2>There’s room for <em>your version</em> of this.</h2><p>You don’t have to fit a founder stereotype to take a first step.</p></div><div className="anywhere-cards"><Link to="/start?mode=discover" className="anywhere-card anywhere-one"><span className="anywhere-icon"><Icon name="search" size={23}/></span><span className="anywhere-num">01 / NO IDEA YET</span><h3>“I know I want to start. I just don’t know what.”</h3><div>Find possibilities <Icon name="up" size={17}/></div></Link><Link to="/start?mode=idea" className="anywhere-card anywhere-two"><span className="anywhere-icon"><Icon name="lightbulb" size={23}/></span><span className="anywhere-num">02 / AN IDEA IN MIND</span><h3>“I have a thought. I need to know if it can work.”</h3><div>Shape your idea <Icon name="up" size={17}/></div></Link><Link to="/start?mode=started" className="anywhere-card anywhere-three"><span className="anywhere-icon"><Icon name="rocket" size={23}/></span><span className="anywhere-num">03 / ALREADY MOVING</span><h3>“I’ve started. I need to know what’s next.”</h3><div>Keep going <Icon name="up" size={17}/></div></Link></div></section>;
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return <section className="faq-section max-wrap" id="faq"><div className="faq-intro"><SectionEyebrow icon="sparkles">GOOD QUESTIONS</SectionEyebrow><h2>A little clarity<br />goes a long way.</h2><p>Wondering if this is for you? It probably is. Here’s the honest version of how Dayone works.</p><div className="faq-illustration"><div className="faq-burst">✳</div><span>Every start is a start.</span></div></div><div className="faq-list">{faqs.map((item, index) => <div className={`faq-item ${openIndex === index ? 'faq-open' : ''}`} key={item.q}><button type="button" aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? -1 : index)}><span>{item.q}</span><span className="faq-toggle"><Icon name={openIndex === index ? 'chevronUp' : 'down'} size={17}/></span></button>{openIndex === index && <p>{item.a}</p>}</div>)}</div></section>;
}

export default function Landing() {
  return <div className="site marketing-page"><Header /><main><Hero /><StorySection /><HowSection /><PathsSection /><AnywhereSection /><FaqSection /></main><Footer /></div>;
}
