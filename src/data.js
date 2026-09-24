export const SKILLS = [
  { id: 'writing', label: 'Writing' },
  { id: 'design', label: 'Design & visual thinking' },
  { id: 'teaching', label: 'Teaching & explaining' },
  { id: 'organizing', label: 'Organizing things' },
  { id: 'technology', label: 'Technology' },
  { id: 'sales', label: 'Sales & persuasion' },
  { id: 'marketing', label: 'Marketing & promotion' },
  { id: 'research', label: 'Research' },
  { id: 'people', label: 'Helping people' },
  { id: 'industry', label: 'Industry knowledge' },
  { id: 'sourcing', label: 'Making or sourcing products' },
];

export const FORMATS = [
  { id: 'service', label: 'Offering a service', short: 'Services' },
  { id: 'teaching', label: 'Teaching something', short: 'Teaching' },
  { id: 'product', label: 'Making digital products', short: 'Digital products' },
  { id: 'commerce', label: 'Selling physical products', short: 'E-commerce' },
  { id: 'content', label: 'Creating content', short: 'Content' },
];

export const HOURS = [
  { id: 'under-5', label: 'Under 5 hours', value: 3 },
  { id: '5-10', label: '5–10 hours', value: 7 },
  { id: '10-20', label: '10–20 hours', value: 15 },
  { id: '20-plus', label: '20+ hours', value: 25 },
  { id: 'unsure', label: 'Not sure yet', value: null },
];

export const BUDGETS = [
  { id: 'minimal', label: 'Almost no upfront spend', value: 0 },
  { id: 'small', label: 'A little room to spend', value: 1 },
  { id: 'medium', label: 'I can invest a bit', value: 2 },
  { id: 'flexible', label: 'Flexible for the right idea', value: 3 },
  { id: 'unsure', label: 'Not sure yet', value: null },
];

export const GOALS = [
  { id: 'extra-income', label: 'Earn some extra income', description: 'Something I can build alongside life.' },
  { id: 'full-time', label: 'Build a full-time business', description: 'I want room to grow over time.' },
  { id: 'independence', label: 'Work more independently', description: 'More ownership over how I work.' },
  { id: 'explore', label: 'Just explore for now', description: 'I want to see what could fit.' },
];

export const PATHS = [
  {
    id: 'remote-operations', title: 'Remote operations support', label: 'ONLINE SERVICE', format: 'service', icon: 'workflow', tone: 'mint',
    summary: 'Help a small team keep the everyday details moving, from scheduling to simple systems.',
    customer: 'a small business owner juggling too many day-to-day tasks',
    problem: 'important admin and follow-ups keep slipping through the cracks',
    firstOffer: 'a two-week operations tidy-up focused on one recurring headache',
    firstTest: 'speak with a few small business owners about the work they keep postponing',
    channel: 'warm introductions and thoughtful messages to small business owners',
    proof: 'a sample workflow, checklist, or before-and-after process map',
    setup: 'a way to meet, share a simple proposal, and securely manage agreed work',
    caution: 'You may handle private business information. Agree on scope and protect access before taking on client work.',
    skills: ['organizing', 'people', 'technology', 'industry'], minHours: 3, budget: 0, beginner: true,
    bestFor: 'People who make chaos feel manageable.', firstMove: 'Ask one owner what keeps falling off their to-do list.',
  },
  {
    id: 'online-tutoring', title: 'One-to-one online tutoring', label: 'TEACHING', format: 'teaching', icon: 'graduation', tone: 'lilac',
    summary: 'Teach a specific subject or skill through focused, personal online sessions.',
    customer: 'a learner with one clear skill or subject they want to improve',
    problem: 'general lessons do not address their specific goal',
    firstOffer: 'a focused first session with a simple learning plan',
    firstTest: 'talk to potential learners about what they are trying to achieve and where they get stuck',
    channel: 'communities where your learners already ask for help and personal referrals',
    proof: 'a short sample lesson or a useful one-page learning guide',
    setup: 'a booking method, a video-call option, a lesson outline, and a payment method available where you live',
    caution: 'If you work with minors, understand local safeguarding, privacy, and consent requirements first.',
    skills: ['teaching', 'people', 'industry', 'research'], minHours: 3, budget: 0, beginner: true,
    bestFor: 'People who love the moment something clicks.', firstMove: 'Pick one topic and ask three learners where they get stuck.',
  },
  {
    id: 'content-support', title: 'Content support for small brands', label: 'CREATIVE SERVICE', format: 'service', icon: 'sparkles', tone: 'peach',
    summary: 'Turn a business owner’s knowledge into useful posts, emails, or simple visual content.',
    customer: 'an independent business with good work but inconsistent online communication',
    problem: 'they know what they do but rarely find time to talk about it online',
    firstOffer: 'a small batch of useful content around one product or customer question',
    firstTest: 'ask a few business owners what content they wish they had time to make',
    channel: 'personalized outreach to businesses whose work you genuinely understand',
    proof: 'two example posts and a short content plan for a sample business',
    setup: 'a simple brief, a drafting workflow, a review process, and usage permissions for assets',
    caution: 'Show examples as samples, not as work commissioned by a business that never hired you.',
    skills: ['writing', 'design', 'research', 'marketing', 'people'], minHours: 5, budget: 0, beginner: true,
    bestFor: 'People who can make good ideas easy to understand.', firstMove: 'Write three helpful posts for a business type you know.',
  },
  {
    id: 'simple-websites', title: 'Simple websites for local services', label: 'DIGITAL SERVICE', format: 'service', icon: 'panels', tone: 'sky',
    summary: 'Help service providers get a clear, useful online home that makes it easy to contact them.',
    customer: 'a local service provider who relies on referrals but needs a better online presence',
    problem: 'people cannot quickly understand their offer or contact them online',
    firstOffer: 'a small, mobile-friendly one-page website with a clear contact route',
    firstTest: 'speak to local service providers about the enquiries they lose or questions they answer repeatedly',
    channel: 'warm local introductions and individual, relevant outreach',
    proof: 'a demo page for an imaginary business, clearly marked as a sample',
    setup: 'a website builder, hosting and domain choices, a client brief, and a way to hand over access',
    caution: 'Confirm content ownership, hosting costs, ongoing support, and accessibility responsibilities with each client.',
    skills: ['technology', 'design', 'writing', 'sales'], minHours: 7, budget: 1, beginner: false,
    bestFor: 'People who enjoy making the internet clearer.', firstMove: 'Talk to one service provider about what their website should do.',
  },
  {
    id: 'digital-templates', title: 'Templates for a specific job', label: 'DIGITAL PRODUCT', format: 'product', icon: 'layers', tone: 'butter',
    summary: 'Package a process you know into a practical template that saves someone time.',
    customer: 'a person who repeats the same frustrating task in their work or life',
    problem: 'they keep starting that task from scratch',
    firstOffer: 'one useful, tested template with a short how-to guide',
    firstTest: 'show a rough version to people who do that task and watch where they get stuck',
    channel: 'communities and conversations where people already discuss that specific task',
    proof: 'a free example page or walkthrough of the template in use',
    setup: 'a shareable file, clear usage instructions, a delivery link, and an available payment option',
    caution: 'A polished template is not proof of demand. Test the problem before building a whole bundle.',
    skills: ['organizing', 'design', 'writing', 'industry', 'technology'], minHours: 5, budget: 0, beginner: true,
    bestFor: 'People who naturally create better ways to work.', firstMove: 'List three repetitive tasks you already know how to simplify.',
  },
  {
    id: 'specialist-sessions', title: 'Specialist advice sessions', label: 'EXPERT SERVICE', format: 'service', icon: 'messages', tone: 'rose',
    summary: 'Turn experience in a particular field into a focused session with a useful outcome.',
    customer: 'someone facing a specific decision in a field you understand well',
    problem: 'they need context and a clear next step, not endless generic information',
    firstOffer: 'one focused working session ending in a practical action plan',
    firstTest: 'ask people in your field which decisions they would gladly get help making',
    channel: 'professional contacts, communities, and referrals where your credibility is known',
    proof: 'an anonymized example of how you think through a problem, with permission where needed',
    setup: 'a clear scope, booking and payment, and boundaries around what you can and cannot advise on',
    caution: 'Some advice is regulated. Check what you are legally allowed to offer in your location and be clear about your credentials.',
    skills: ['industry', 'research', 'people', 'teaching', 'sales'], minHours: 3, budget: 0, beginner: false,
    bestFor: 'People whose experience helps others decide.', firstMove: 'Write down the question people already ask you for help with.',
  },
  {
    id: 'live-workshop', title: 'A practical online workshop', label: 'TEACHING', format: 'teaching', icon: 'presentation', tone: 'peach',
    summary: 'Teach one useful outcome live before committing to a big course.',
    customer: 'a small group of learners who want to accomplish one practical thing',
    problem: 'they need guidance and accountability to get started',
    firstOffer: 'one live session with a clear takeaway and a small workbook',
    firstTest: 'describe the workshop to ten likely learners and ask what they would want to leave with',
    channel: 'groups, communities, and referrals where your learners gather',
    proof: 'a short lesson outline or free demonstration of one exercise',
    setup: 'a video-call room, registration page, workbook, and simple reminder message',
    caution: 'Do not build a whole recorded course before you know people want this specific result.',
    skills: ['teaching', 'industry', 'people', 'writing'], minHours: 5, budget: 0, beginner: true,
    bestFor: 'People who enjoy teaching in real time.', firstMove: 'Choose one outcome you could teach in 60 minutes.',
  },
  {
    id: 'workflow-setup', title: 'No-code workflow setup', label: 'TECH SERVICE', format: 'service', icon: 'blocks', tone: 'lilac',
    summary: 'Help small teams replace a repetitive manual task with a simpler digital process.',
    customer: 'a small team repeating the same admin work every week',
    problem: 'information gets copied around and mistakes keep happening',
    firstOffer: 'one documented workflow improvement with a short handover',
    firstTest: 'ask teams to show you one repetitive process before proposing any tools',
    channel: 'people you know in operations and business-owner communities',
    proof: 'a demo automation using sample data and a plain-language walkthrough',
    setup: 'a process map, the client’s approved tools, test data, and a handover checklist',
    caution: 'Get explicit permission before connecting accounts or handling customer data. Keep a manual fallback.',
    skills: ['technology', 'organizing', 'research', 'industry'], minHours: 7, budget: 1, beginner: false,
    bestFor: 'People who see a smarter way to do things.', firstMove: 'Ask one team which task they repeat every Friday.',
  },
  {
    id: 'curated-shop', title: 'A small curated online shop', label: 'E-COMMERCE', format: 'commerce', icon: 'shopping', tone: 'butter',
    summary: 'Bring together a narrow selection of products for a specific kind of customer.',
    customer: 'a specific group looking for thoughtfully chosen products',
    problem: 'finding reliable options takes too much time or guesswork',
    firstOffer: 'a very small collection with a clear reason each item belongs',
    firstTest: 'show a proposed collection and pricing to potential buyers before ordering stock',
    channel: 'communities around the need your collection serves',
    proof: 'a simple product guide and clear photos or permitted supplier images',
    setup: 'supplier terms, a storefront or ordering method, fulfillment plan, returns policy, and payment method',
    caution: 'Inventory, shipping, duties, returns, and consumer rules vary by location. Calculate all of them before buying stock.',
    skills: ['sourcing', 'design', 'sales', 'research'], minHours: 10, budget: 2, beginner: false,
    bestFor: 'People with a good eye for useful products.', firstMove: 'Show a tiny proposed collection to five likely buyers.',
  },
  {
    id: 'niche-newsletter', title: 'A focused niche newsletter', label: 'CONTENT BUSINESS', format: 'content', icon: 'mail', tone: 'sky',
    summary: 'Make a small group’s busy life easier with useful, consistent insight on one topic.',
    customer: 'people who care deeply about a narrow topic but lack time to track it',
    problem: 'useful updates are scattered across too many places',
    firstOffer: 'a free, useful weekly edition around one clearly defined topic',
    firstTest: 'send three sample editions to likely readers and ask what they would actually forward',
    channel: 'relevant communities and personal networks, with permission to email subscribers',
    proof: 'three sample editions that demonstrate the value clearly',
    setup: 'a sign-up page, an email tool, consent language, and an editorial rhythm',
    caution: 'An audience takes time to build and income is uncertain. Do not count on fast revenue from a newsletter.',
    skills: ['writing', 'research', 'industry', 'design'], minHours: 5, budget: 0, beginner: true,
    bestFor: 'People who notice what others miss.', firstMove: 'Write the subject line of three editions people would want.',
  },
  {
    id: 'research-briefs', title: 'Research briefs for busy teams', label: 'KNOWLEDGE SERVICE', format: 'service', icon: 'search', tone: 'mint',
    summary: 'Find, organize, and explain information a team needs to make a decision.',
    customer: 'a founder or small team with a decision to make and little time to research it',
    problem: 'important information is scattered and hard to compare',
    firstOffer: 'one short research brief answering a clearly scoped question',
    firstTest: 'ask potential customers what they need to learn before their next decision',
    channel: 'warm professional introductions and targeted industry communities',
    proof: 'a short, clearly sourced sample brief using publicly available information',
    setup: 'a research brief template, source-checking approach, and agreement on scope and confidentiality',
    caution: 'Be transparent about sources, uncertainty, and what you did not verify. Never invent evidence.',
    skills: ['research', 'writing', 'industry', 'organizing'], minHours: 5, budget: 0, beginner: false,
    bestFor: 'People who like finding the signal in the noise.', firstMove: 'Draft a one-page answer to a real industry question.',
  },
  {
    id: 'career-coaching', title: 'Career materials & interview help', label: 'PERSONAL SERVICE', format: 'service', icon: 'compass', tone: 'rose',
    summary: 'Help job seekers tell their story more clearly and prepare for the conversations ahead.',
    customer: 'a job seeker targeting a particular kind of role',
    problem: 'their experience is not coming through in applications and interviews',
    firstOffer: 'a focused CV or portfolio review with an actionable revision plan',
    firstTest: 'ask job seekers what part of applying feels most confusing right now',
    channel: 'career communities, referrals, and helpful public examples',
    proof: 'an anonymized before-and-after rewrite or a public sample using invented details',
    setup: 'a booking method, secure file sharing, a clear scope, and a follow-up summary',
    caution: 'Never promise someone a job or claim insider access. Handle personal career documents carefully.',
    skills: ['writing', 'people', 'teaching', 'industry'], minHours: 3, budget: 0, beginner: true,
    bestFor: 'People who help others see their strengths.', firstMove: 'Offer a useful review to one person and note what they value.',
  },
];

export const FORMAT_LABELS = { service: 'Service', teaching: 'Teaching', product: 'Digital product', commerce: 'E-commerce', content: 'Content' };
export const BUDGET_LABELS = { 0: 'Almost no upfront spend', 1: 'A little upfront spend', 2: 'Some upfront spend' };

export const getPathById = (id) => PATHS.find((path) => path.id === id);

export function createCustomPath(profile) {
  const title = (profile.ideaName || 'My business idea').trim();
  const description = (profile.ideaDescription || '').trim();
  return {
    id: 'my-idea', title, label: 'YOUR OWN IDEA', format: profile.ideaCategory || 'service', icon: 'lightbulb', tone: 'mint',
    summary: description || 'A business idea you want to shape, test, and bring into the world.',
    customer: 'the particular people you want to help',
    problem: 'a problem they have that you can solve',
    firstOffer: description || 'a small first version of your idea',
    firstTest: 'talk to potential customers about the problem before building more',
    channel: 'the places your potential customers already spend time',
    proof: 'a simple example, sample, or explanation that shows what you can do',
    setup: 'the simplest way to explain your offer, be contacted, and accept payment where you live',
    caution: 'Your idea is a starting hypothesis. Speak with real customers before investing heavily.',
    skills: profile.skills || [], minHours: 3, budget: 0, beginner: true,
    bestFor: 'You, with room to adapt as you learn.', firstMove: 'Describe the person you hope to help in one sentence.',
    custom: true,
  };
}

const EXPERIENCE_SIGNALS = [
  ['writing', /\b(writ(e|ing|er)|copywrit\w*|editor|blogg?\w*|journal\w*|storytell\w*)\b/i],
  ['design', /\b(design\w*|visual\w*|graphic\w*|figma|canva|illustrat\w*|photograph\w*)\b/i],
  ['teaching', /\b(teach\w*|tutor\w*|train\w*|mentor\w*|lessons?|educat\w*)\b/i],
  ['organizing', /\b(organiz\w*|organis\w*|operations?|admin\w*|coordinat\w*|project manag\w*|process\w*|workflows?)\b/i],
  ['technology', /\b(tech\w*|cod(e|ing|er)|develop\w*|softwar\w*|websites?|automati\w*|no-code|engineer\w*)\b/i],
  ['sales', /\b(sales|selling|sell|outreach|business develop\w*)\b/i],
  ['marketing', /\b(marketing|advertis\w*|social media|seo|growth|promotion\w*)\b/i],
  ['research', /\b(research\w*|analys\w*|analyt\w*|data|investigat\w*)\b/i],
  ['people', /\b(customer service|customer support|people|helping|community|hospitality|caregiv\w*)\b/i],
  ['industry', /\b(healthcare|finance|account\w*|law|legal|real estate|hospitality|industry|sector|profession\w*)\b/i],
  ['sourcing', /\b(retail|craft\w*|product\w*|sourc\w*|inventor\w*|shopkeep\w*)\b/i],
];

export function inferSkillsFromExperience(text = '') {
  return EXPERIENCE_SIGNALS.filter(([, pattern]) => pattern.test(text)).map(([id]) => id);
}

export function getMatch(path, profile) {
  if (!profile) return { score: 0, level: 'A starting point', reasons: [] };
  let score = 0;
  const reasons = [];
  const explicitSkills = profile.skills || [];
  const inferredSkills = inferSkillsFromExperience(profile.strengths || '').filter((id) => !explicitSkills.includes(id));
  const shared = path.skills.filter((skill) => explicitSkills.includes(skill));
  const sharedInferred = path.skills.filter((skill) => inferredSkills.includes(skill));
  if (shared.length) {
    score += Math.min(shared.length, 3) * 3;
    const names = shared.slice(0, 2).map((id) => SKILLS.find((skill) => skill.id === id)?.label.toLowerCase() || id);
    reasons.push(`Builds on your ${names.join(' and ')} strengths`);
  }
  if (sharedInferred.length) {
    score += Math.min(sharedInferred.length, 2) * 2;
    const names = sharedInferred.slice(0, 2).map((id) => SKILLS.find((skill) => skill.id === id)?.label.toLowerCase() || id);
    reasons.push(`Connects with what you shared about ${names.join(' and ')}`);
  }
  if ((profile.interests || []).includes(path.format)) {
    score += 5;
    reasons.push(`Fits your interest in ${FORMAT_LABELS[path.format].toLowerCase()}`);
  }
  const hours = HOURS.find((item) => item.id === profile.hours)?.value;
  if (hours != null) {
    if (hours >= path.minHours) { score += 2; reasons.push('Could fit the time you have each week'); }
    else score -= 3;
  }
  const budget = BUDGETS.find((item) => item.id === profile.budget)?.value;
  if (budget != null) {
    if (budget >= path.budget) { score += 2; if (path.budget === 0 && reasons.length < 2) reasons.push('Can begin with very little upfront spend'); }
    else score -= 4;
  }
  if (profile.goal === 'extra-income' && path.minHours <= 5 && path.budget <= 1) score += 2;
  if (profile.goal === 'independence' && path.format === 'service') score += 1;
  if (!shared.length && !sharedInferred.length && !(profile.interests || []).length && path.beginner) score += 2;
  if (!reasons.length) reasons.push(path.bestFor);
  return { score, level: score >= 9 ? 'Strong place to start' : score >= 4 ? 'Worth exploring' : 'See if it fits', reasons: reasons.slice(0, 2) };
}

export function rankPaths(profile) {
  return [...PATHS].sort((a, b) => getMatch(b, profile).score - getMatch(a, profile).score);
}

export function topMatches(profile, limit = 3) {
  const ranked = rankPaths(profile);
  const selected = [];
  const usedFormats = new Set();
  for (const path of ranked) {
    if (!usedFormats.has(path.format)) { selected.push(path); usedFormats.add(path.format); }
    if (selected.length === limit) return selected;
  }
  for (const path of ranked) {
    if (!selected.includes(path)) selected.push(path);
    if (selected.length === limit) break;
  }
  return selected;
}
