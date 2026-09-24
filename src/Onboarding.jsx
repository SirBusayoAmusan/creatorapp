import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Brand, Icon, SectionEyebrow } from './components';
import { BUDGETS, createCustomPath, FORMATS, GOALS, HOURS, SKILLS } from './data';
import { STAGE_META } from './plan';
import { useApp } from './state';

const DRAFT_KEY = 'dayone.onboarding.v1';
const blank = { mode: '', skills: [], strengths: '', hours: '', budget: '', location: '', interests: [], goal: '', ideaName: '', ideaDescription: '', ideaCategory: '', currentStage: 'direction' };
const modes = [
  { id: 'discover', title: 'I need an idea', detail: 'Help me explore what I could build.', icon: 'sparkles', color: 'lilac' },
  { id: 'idea', title: 'I have an idea', detail: 'Help me test it and make a plan.', icon: 'lightbulb', color: 'mint' },
  { id: 'started', title: 'I’ve already started', detail: 'Help me figure out the next move.', icon: 'rocket', color: 'peach' },
];
const stepNames = { mode: 'Your starting point', strengths: 'What you bring', constraints: 'Your real life', interests: 'Your kind of work', idea: 'Your idea', goal: 'Your why' };

export default function Onboarding() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const incomingMode = searchParams.get('mode');
  const isEdit = searchParams.get('edit') === '1';
  const { profile, projects, activeProjectId, saveProfile, startProject, updateCustomIdea } = useApp();
  const [answers, setAnswers] = useState(() => {
    let fromDraft = {};
    try { fromDraft = JSON.parse(sessionStorage.getItem(DRAFT_KEY)) || {}; } catch { /* Ignore disabled storage */ }
    return { ...blank, ...(isEdit && profile ? profile : fromDraft), ...(modes.some((item) => item.id === incomingMode) ? { mode: incomingMode } : {}) };
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [showError, setShowError] = useState(false);
  const steps = useMemo(() => ['mode', 'strengths', 'constraints', 'interests', ...(answers.mode && answers.mode !== 'discover' ? ['idea'] : []), 'goal'], [answers.mode]);
  const current = steps[stepIndex] || 'goal';
  const isLast = stepIndex === steps.length - 1;
  const update = (patch) => { setAnswers((previous) => ({ ...previous, ...patch })); setShowError(false); };
  const toggle = (field, id) => update({ [field]: answers[field].includes(id) ? answers[field].filter((item) => item !== id) : [...answers[field], id] });
  useEffect(() => { try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(answers)); } catch { /* ignore */ } }, [answers]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [stepIndex]);

  function next() {
    if ((current === 'mode' && !answers.mode) || (current === 'idea' && !answers.ideaName.trim())) { setShowError(true); return; }
    if (!isLast) { setStepIndex((index) => index + 1); return; }
    const completeProfile = { ...answers, completedAt: new Date().toISOString() };
    saveProfile(completeProfile);
    try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
    if (isEdit && activeProjectId && answers.mode === profile?.mode) {
      const active = projects.find((project) => project.id === activeProjectId);
      if (active?.customPath) updateCustomIdea(active.id, createCustomPath(completeProfile));
      navigate('/workspace'); return;
    }
    if (answers.mode === 'discover') navigate('/matches');
    else { startProject(createCustomPath(completeProfile), answers.mode === 'started' ? answers.currentStage : 'direction'); navigate('/workspace'); }
  }

  let headline, description;
  switch (current) {
    case 'mode': headline = 'Where are you starting from?'; description = 'There isn’t a right answer. Pick the place that feels most like you today.'; break;
    case 'strengths': headline = 'What do you bring to the table?'; description = 'Skills, hobbies, hard-won experience—it all counts. Pick anything that feels familiar.'; break;
    case 'constraints': headline = 'What does real life look like?'; description = 'The best business for you needs to fit the time and resources you actually have.'; break;
    case 'interests': headline = 'What kind of work sounds good?'; description = 'Follow your curiosity. You can pick more than one, or leave this open.'; break;
    case 'idea': headline = answers.mode === 'started' ? 'Tell us what you’ve started.' : 'Tell us about your idea.'; description = 'It doesn’t need a perfect name or a polished pitch. A rough description is enough.'; break;
    default: headline = 'What are you hoping to build toward?'; description = 'Your answer can change later. This is just a place to start.';
  }

  return <div className="onboarding-page">
    <header className="onboard-header max-wrap"><Brand /><div className="onboard-header-right"><span><Icon name="shield" size={14}/> Saved as you go on this device</span><Link to="/" aria-label="Leave questionnaire"><Icon name="close" size={20}/></Link></div></header>
    <main className="onboard-layout max-wrap"><aside className="onboard-side"><div className="onboard-side-inner"><SectionEyebrow icon="sparkles">A PATH THAT BEGINS WITH YOU</SectionEyebrow><h2>Every good thing<br />starts <em>somewhere.</em></h2><p>You don’t need to know all the answers. We’ll figure out the next step together.</p><div className="onboard-side-bottom"><div className="onboard-side-mark">✳</div><div><strong>Made for real beginnings.</strong><span>No perfect idea. No perfect timing.<br />Just your version of day one.</span></div></div></div></aside>
      <div className="onboard-main"><div className="question-progress"><div className="question-progress-top"><span>YOUR STARTING POINT</span><span>{String(stepIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span></div><div className="progress-tracks" aria-label={`Step ${stepIndex + 1} of ${steps.length}`}>{steps.map((step, index) => <span className={index <= stepIndex ? 'filled' : ''} key={step}/>)}</div></div>
        <div className="question-content"><span className="question-kicker">{stepNames[current]} <span>✳</span></span><h1>{headline}</h1><p className="question-desc">{description}</p>
          {current === 'mode' && <div className="mode-options">{modes.map((mode) => <button type="button" className={`mode-option ${answers.mode === mode.id ? 'chosen' : ''}`} key={mode.id} onClick={() => update({ mode: mode.id })}><span className={`mode-icon option-icon-${mode.color}`}><Icon name={mode.icon} size={22}/></span><span><strong>{mode.title}</strong><small>{mode.detail}</small></span><span className="option-radio">{answers.mode === mode.id && <Icon name="check" size={13} strokeWidth={3}/>}</span></button>)}</div>}
          {current === 'strengths' && <><div className="field-heading"><strong>Things I’m good at or interested in</strong><span>CHOOSE ANY</span></div><div className="selection-grid skill-grid">{SKILLS.map((skill) => <button type="button" className={`selection-chip ${answers.skills.includes(skill.id) ? 'selected' : ''}`} onClick={() => toggle('skills', skill.id)} key={skill.id}><span className="chip-symbol">{answers.skills.includes(skill.id) ? <Icon name="check" size={14} strokeWidth={2.5}/> : '✳'}</span>{skill.label}</button>)}</div><label className="field-label" htmlFor="strengths-input">Anything else you bring? <span>OPTIONAL</span></label><textarea id="strengths-input" className="form-textarea textarea-small" value={answers.strengths} onChange={(event) => update({ strengths: event.target.value })} placeholder="A job you’ve had, something friends ask you for help with, a topic you know…" /></>}
          {current === 'constraints' && <><div className="field-heading"><strong>Time I could realistically give each week</strong><span>A ROUGH GUESS IS FINE</span></div><div className="selection-grid choice-grid">{HOURS.map((item) => <button type="button" key={item.id} className={`selection-chip ${answers.hours === item.id ? 'selected' : ''}`} onClick={() => update({ hours: item.id })}>{item.label}</button>)}</div><div className="field-heading constraints-second"><strong>Room to spend up front</strong><span>NO EXACT NUMBERS NEEDED</span></div><div className="selection-grid choice-grid">{BUDGETS.map((item) => <button type="button" key={item.id} className={`selection-chip ${answers.budget === item.id ? 'selected' : ''}`} onClick={() => update({ budget: item.id })}>{item.label}</button>)}</div><label className="field-label" htmlFor="location-input">Where will you be based? <span>OPTIONAL</span></label><input id="location-input" className="form-input" value={answers.location} onChange={(event) => update({ location: event.target.value })} placeholder="Country or city (helps you check local essentials)" /></>}
          {current === 'interests' && <div className="interest-options">{FORMATS.map((format, index) => <button type="button" className={`interest-option ${answers.interests.includes(format.id) ? 'chosen' : ''}`} key={format.id} onClick={() => toggle('interests', format.id)}><span className={`interest-number interest-color-${index}`}>0{index + 1}</span><span>{format.label}</span><span className="option-radio">{answers.interests.includes(format.id) && <Icon name="check" size={13} strokeWidth={3}/>}</span></button>)}</div>}
          {current === 'idea' && <div className="idea-fields"><label className="field-label" htmlFor="idea-name">What are you calling it for now? <span>JUST A WORKING NAME</span></label><input id="idea-name" className="form-input" value={answers.ideaName} onChange={(event) => update({ ideaName: event.target.value })} placeholder="e.g. Online fitness coaching for new parents" maxLength={90} /><label className="field-label" htmlFor="idea-description">What would you like to do? <span>OPTIONAL</span></label><textarea id="idea-description" className="form-textarea" value={answers.ideaDescription} onChange={(event) => update({ ideaDescription: event.target.value })} placeholder="Describe who you hope to help and what you might offer. A sentence is enough." maxLength={600} /><div className="field-heading"><strong>Closest type of business</strong><span>OPTIONAL</span></div><div className="selection-grid choice-grid">{FORMATS.map((item) => <button type="button" key={item.id} className={`selection-chip ${answers.ideaCategory === item.id ? 'selected' : ''}`} onClick={() => update({ ideaCategory: item.id })}>{item.short}</button>)}</div>{answers.mode === 'started' && <><div className="field-heading constraints-second"><strong>Where would you like to pick up?</strong><span>EARLIER STEPS STAY AVAILABLE</span></div><div className="selection-grid choice-grid stage-choices">{STAGE_META.map((stage) => <button type="button" key={stage.id} className={`selection-chip ${answers.currentStage === stage.id ? 'selected' : ''}`} onClick={() => update({ currentStage: stage.id })}>{stage.name}</button>)}</div></>}</div>}
          {current === 'goal' && <div className="goal-options">{GOALS.map((goal) => <button type="button" className={`goal-option ${answers.goal === goal.id ? 'chosen' : ''}`} key={goal.id} onClick={() => update({ goal: goal.id })}><span className="option-radio">{answers.goal === goal.id && <Icon name="check" size={13} strokeWidth={3}/>}</span><span><strong>{goal.label}</strong><small>{goal.description}</small></span></button>)}</div>}
          {showError && <div className="form-error" role="alert">{current === 'idea' ? 'Give your idea a working name to continue.' : 'Choose a starting point to continue.'}</div>}
        </div>
        <div className="question-footer"><div>{stepIndex > 0 ? <button type="button" className="back-button" onClick={() => { setStepIndex((index) => index - 1); setShowError(false); }}><Icon name="back" size={17}/> Back</button> : <Link className="back-button" to="/"><Icon name="back" size={17}/> Back to home</Link>}</div><button className="btn btn-dark btn-lg" type="button" onClick={next}>{isLast ? (answers.mode === 'discover' ? 'See my matches' : isEdit ? 'Save changes' : 'Make my plan') : 'Continue'} <Icon name="arrow" size={18}/></button></div>
        <p className="onboard-privacy">Your answers stay in this browser. You can change your mind later.</p>
      </div>
    </main>
  </div>;
}
