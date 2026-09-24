export const STAGE_META = [
  { id: 'direction', name: 'Direction', short: 'Find your focus', icon: 'compass' },
  { id: 'validate', name: 'Validate', short: 'Check the need', icon: 'search' },
  { id: 'offer', name: 'Your offer', short: 'Make it clear', icon: 'package' },
  { id: 'setup', name: 'Set up', short: 'Build the essentials', icon: 'layers' },
  { id: 'reach', name: 'Find customers', short: 'Start conversations', icon: 'megaphone' },
  { id: 'launch', name: 'Launch & learn', short: 'Make it real', icon: 'flag' },
];

export const DRAFT_FIELDS = [
  { id: 'customer', label: 'The person I want to help', hint: 'Who are they, and what situation are they in?', placeholder: 'I want to help…' },
  { id: 'problem', label: 'The problem I’m solving', hint: 'Use their words, not industry jargon.', placeholder: 'They struggle with…' },
  { id: 'offer', label: 'My first offer', hint: 'One small result you can deliver well.', placeholder: 'I help them by…' },
  { id: 'price', label: 'Price & scope', hint: 'What is included, what is not, and why does the price work for you?', placeholder: 'My first package includes…' },
  { id: 'proof', label: 'A piece of proof', hint: 'A sample, demonstration, or example that makes the offer tangible.', placeholder: 'I can show…' },
  { id: 'message', label: 'My first message', hint: 'Make it relevant and human; don’t send the same pitch to everyone.', placeholder: 'Hi [name], I noticed…' },
  { id: 'learning', label: 'What I’m learning', hint: 'Questions, objections, feedback, and your next experiment.', placeholder: 'So far I’ve learned…' },
];

export function makeStages(path, profile = {}) {
  const customer = path.customer;
  const problem = path.problem;
  const offer = path.firstOffer;
  const availableTime = profile.hours && profile.hours !== 'unsure' ? 'Work within the hours you set aside each week; a smaller first version is completely fine.' : 'Keep your first version small enough to test without rearranging your life.';
  return [
    {
      ...STAGE_META[0], description: 'Choose a direction that uses what you have, not an imagined perfect version of you.',
      outcome: 'A clear starting point you can explain in one sentence.',
      tasks: [
        { id: 'd-strengths', title: 'Take stock of what you bring', time: '10 min', summary: 'Experience counts, even if it never appeared in a job title.',
          steps: ['List things people already ask you for help with.', 'Include life experience, interests, contacts, and skills you want to develop.', availableTime],
          prompt: `I am exploring ${path.title}. Help me list useful experiences I might be overlooking. Ask me five short questions, one at a time. Do not make up skills I have not mentioned.`, draft: null },
        { id: 'd-customer', title: 'Name one person to help', time: '15 min', summary: `Start with ${customer}, then get more specific.`,
          steps: ['Describe one kind of person or business, not “everyone.”', `Write down how ${problem} might show up in their day.`, 'If you can, name a real person you could ask about it.'],
          prompt: `I might help ${customer}. Ask me questions to narrow down a specific first customer and their situation. Do not assume this group wants to buy.`, draft: 'customer' },
        { id: 'd-direction', title: 'Write your first direction', time: '10 min', summary: 'It is a working hypothesis, not a permanent commitment.',
          steps: [`A possible direction is ${offer}.`, 'Finish this sentence: “I want to help [person] with [problem] by [approach].”', 'Circle anything you still need to check with a real person.'],
          prompt: `Help me write a simple, non-hype one-sentence business direction for ${path.title}. My intended customer is ${customer}. Ask for missing details instead of inventing them.`, draft: 'problem' },
      ],
    },
    {
      ...STAGE_META[1], description: 'Before you build, find out whether the problem is real for real people.',
      outcome: 'Evidence from conversations, and a decision about what to test next.',
      tasks: [
        { id: 'v-people', title: 'Find five people to learn from', time: '20 min', summary: `Look for people like ${customer}, not just people who will encourage you.`,
          steps: ['List five people or communities that fit your customer description.', 'Ask for a short learning conversation, not a sale.', 'Respect people’s time and the rules of each community.'],
          prompt: `Write a short, respectful request for a 15-minute research conversation with ${customer} about ${problem}. No sales pitch and no claim that we already know the answer.`, draft: 'customer' },
        { id: 'v-talk', title: 'Have problem conversations', time: 'Over a few days', summary: 'Listen for what happened recently, not just what people say they might buy.',
          steps: ['Ask: “When did you last run into this?” and “What did you do instead?”', 'Ask what the problem costs them in time, money, or frustration.', 'Write down exact phrases; avoid leading them toward your solution.'],
          prompt: `Give me six open-ended customer interview questions about ${problem} for ${customer}. Avoid leading questions and hypothetical willingness-to-pay questions.`, draft: 'learning' },
        { id: 'v-decide', title: 'Choose: go, adjust, or pause', time: '15 min', summary: 'A good early result might be learning that you need to change direction.',
          steps: ['Look for repeated situations and existing attempts to solve the problem.', 'Note what people actually do, not only polite compliments.', 'Decide what you need to test next. It is fine to adjust your customer or offer.'],
          prompt: `Help me organize notes from customer conversations about ${problem}. Separate observed facts from assumptions, identify patterns, and suggest what to test next. Do not invent evidence.`, draft: 'learning' },
      ],
    },
    {
      ...STAGE_META[2], description: 'Turn a promising problem into one small thing someone can understand and buy.',
      outcome: 'A simple first offer with a clear scope and a considered price.',
      tasks: [
        { id: 'o-small', title: 'Choose a small first result', time: '20 min', summary: `A first version might look like ${offer}.`,
          steps: ['Choose one result you can reliably deliver.', 'Write what is included and what is explicitly not included.', 'Use what you learned from real conversations to adjust the offer.'],
          prompt: `Help me turn ${offer} into a small first offer for ${customer}. Ask about my capabilities and interview findings before suggesting scope. Avoid promises of guaranteed results.`, draft: 'offer' },
        { id: 'o-price', title: 'Work out a starting price', time: '20 min', summary: 'Make sure the numbers work for both your customer and you.',
          steps: ['Estimate the time, tools, materials, fees, and support involved.', 'Check comparable offers in the market you plan to serve.', 'Choose a test price and write down what would make you change it.'],
          prompt: `Help me think through a test price for ${offer}. Ask about delivery time, expenses, local market, and what is included. Show the arithmetic and do not invent competitor prices.`, draft: 'price' },
        { id: 'o-explain', title: 'Put your offer into plain words', time: '15 min', summary: 'A stranger should understand who it is for and what happens next.',
          steps: ['Write: “I help [who] achieve [result] through [what you do].”', 'Add what is included, a starting price or pricing method, and a next step.', 'Read it to someone who does not know your idea and ask what is unclear.'],
          prompt: `Rewrite my first offer for ${customer} in plain English. Keep it specific, honest, and easy to scan. Ask me for the missing facts first.`, draft: 'offer' },
      ],
    },
    {
      ...STAGE_META[3], description: 'Create only what you need to make a promise, take an order, and deliver it well.',
      outcome: 'A usable way to show your offer and work with an early customer.',
      tasks: [
        { id: 's-essentials', title: 'Set up the essentials', time: '30 min', summary: `Start with ${path.setup}.`,
          steps: ['Make it easy to understand your offer and get in touch.', 'Choose a payment option that actually works in your country.', 'Check any registration, tax, consumer, or professional rules that apply locally.'],
          prompt: `Make a minimal setup checklist for ${path.title} in my location. Separate universally useful steps from local legal or payment questions I must verify. Do not present legal advice as fact.`, draft: null },
        { id: 's-proof', title: 'Make one honest piece of proof', time: '45 min', summary: `A starting point: ${path.proof}.`,
          steps: ['Show what a customer would receive or how you work.', 'If it is a sample, label it as a sample.', 'Ask one person whether it answers their main question.'],
          prompt: `Suggest a small, honest sample I could create for ${path.title}. I can make ${path.proof}. Keep it manageable and do not invent customer results or testimonials.`, draft: 'proof' },
        { id: 's-ready', title: 'Check that you can deliver', time: '20 min', summary: 'Make the first customer experience straightforward.',
          steps: ['Write down what happens after someone says yes.', 'Prepare a basic agreement on scope, timing, and changes.', 'Test your contact, booking, and payment steps yourself.'],
          prompt: `Create a first-customer handover checklist for ${offer}. Include scope, timing, payment, privacy, delivery, and feedback. Flag where I should check local rules.`, draft: null },
      ],
    },
    {
      ...STAGE_META[4], description: 'Move from planning into real conversations with people who could benefit.',
      outcome: 'A clear message and your first thoughtful customer conversations.',
      tasks: [
        { id: 'r-channel', title: 'Choose one way to reach people', time: '15 min', summary: `One possible starting point: ${path.channel}.`,
          steps: ['Choose a place where your specific customer is already present.', 'Start with people or communities you can reach respectfully.', 'Commit to one channel long enough to learn from it.'],
          prompt: `Compare three realistic ways I could reach ${customer} for ${path.title}. My current idea is ${path.channel}. Explain the tradeoffs without inventing conversion rates.`, draft: null },
        { id: 'r-message', title: 'Write a human first message', time: '20 min', summary: 'Lead with relevance and a question, not a mass pitch.',
          steps: ['Mention why you thought of this person specifically.', 'Describe the problem you are exploring without assuming they have it.', 'Offer a low-pressure next step and respect a no.'],
          prompt: `Draft a short, personal outreach message to ${customer} about ${offer}. Leave placeholders for a genuine observation. No hype, false familiarity, or fake scarcity.`, draft: 'message' },
        { id: 'r-five', title: 'Start five thoughtful conversations', time: 'Over a few days', summary: 'The goal is learning and genuine connection, not a perfect response rate.',
          steps: ['Reach out individually to five relevant people, where permitted.', 'Keep a note of replies, questions, and objections.', 'Adapt the offer when the same confusion appears more than once.'],
          prompt: `Help me make a simple outreach tracker for five individual conversations about ${offer}. Include person, why relevant, date, response, learning, and respectful follow-up.`, draft: 'learning' },
      ],
    },
    {
      ...STAGE_META[5], description: 'Make the first real offer, deliver on your promise, and use what you learn.',
      outcome: 'A live offer and a clear next experiment, whether or not the first sale has happened yet.',
      tasks: [
        { id: 'l-offer', title: 'Put your offer into the world', time: '30 min', summary: 'Invite a real person to take the next step when you are ready to deliver.',
          steps: ['Share your clear offer with an appropriate audience or prospect.', 'Make the next step obvious: reply, book, or order.', 'Be honest about availability, price, and what is included.'],
          prompt: `Help me prepare a clear, honest first launch message for ${offer}, aimed at ${customer}. Ask me for my real price, availability, and next step before drafting.`, draft: 'offer' },
        { id: 'l-deliver', title: 'Make the first experience count', time: 'As needed', summary: 'Small and excellent beats big and unfinished.',
          steps: ['Confirm what you agreed to deliver and when.', 'Do the work, communicate changes, and ask for useful feedback.', 'Only use a customer quote publicly if you have their permission.'],
          prompt: `Help me create a delivery and feedback checklist for ${offer}. Include a respectful follow-up and an optional request for permission to share a testimonial.`, draft: 'learning' },
        { id: 'l-review', title: 'Reflect and choose your next move', time: '20 min', summary: 'Launching is the start of the feedback loop, not the end of the journey.',
          steps: ['Write down what you tried and what actually happened.', 'Identify one thing to keep, one thing to change, and one thing to test next.', 'If nothing sold yet, use what you learned to improve the next attempt.'],
          prompt: `Help me review my first launch attempt for ${path.title}. Ask what I tried and observed. Separate facts from assumptions, and suggest one small next experiment without promising sales.`, draft: 'learning' },
      ],
    },
  ];
}

export function getNextTask(stages, done = {}, preferredStageId = 'direction') {
  const start = Math.max(0, stages.findIndex((stage) => stage.id === preferredStageId));
  const inUserOrder = [...stages.slice(start), ...stages.slice(0, start)];
  for (const stage of inUserOrder) {
    for (const task of stage.tasks) if (!done[task.id]) return { stage, task };
  }
  return null;
}
