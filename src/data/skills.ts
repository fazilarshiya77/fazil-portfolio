export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  accentColor: string;
  skills: {
    name: string;
    level?: string;
    isHighlight?: boolean;
    roleInWorkflow?: string;
  }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: 'ui-ux',
    name: 'UI/UX & Design',
    description: 'Translating business goals into intuitive, accessible, and high-conversion visual design systems.',
    iconName: 'Palette',
    accentColor: '#5B5CE2',
    skills: [
      { name: 'Figma', isHighlight: true, roleInWorkflow: 'High-fidelity mockups, UI components & design specs' },
      { name: 'Wireframing', roleInWorkflow: 'Low-fidelity layout mapping & user hierarchy' },
      { name: 'Prototyping', roleInWorkflow: 'Interactive state flows & customer journey testing' },
      { name: 'Responsive Design', isHighlight: true, roleInWorkflow: 'Mobile-first ergonomics across 375px to 1440px+' },
      { name: 'Visual Hierarchy', roleInWorkflow: 'Typography pairing, spacing systems & scanability' },
      { name: 'UI Design', roleInWorkflow: 'Clean surfaces, contrast control & micro-interactions' },
      { name: 'User-Flow Thinking', isHighlight: true, roleInWorkflow: 'Frictionless enquiry and booking pathways' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Crafting performant, component-driven, and pixel-accurate web applications.',
    iconName: 'Layout',
    accentColor: '#10B981',
    skills: [
      { name: 'HTML5', roleInWorkflow: 'Semantic markup & document structure' },
      { name: 'CSS3', roleInWorkflow: 'Custom properties, flexbox, grid & modern animations' },
      { name: 'JavaScript', isHighlight: true, roleInWorkflow: 'ESNext features, async workflows & DOM mechanics' },
      { name: 'TypeScript', isHighlight: true, roleInWorkflow: 'Type safety, reliable interfaces & maintainable architecture' },
      { name: 'React.js', isHighlight: true, roleInWorkflow: 'Component architecture, custom hooks & reactive state' },
      { name: 'Next.js', roleInWorkflow: 'SSR, SEO-friendly rendering & route optimization' },
      { name: 'Tailwind CSS', isHighlight: true, roleInWorkflow: 'Utility-first tokens, dark mode & responsive breakpoints' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Integration',
    description: 'Connecting frontend interfaces with reliable data stores, APIs, and business services.',
    iconName: 'Database',
    accentColor: '#F59E0B',
    skills: [
      { name: 'Node.js', roleInWorkflow: 'Server-side scripts, lightweight services & API routes' },
      { name: 'MongoDB', roleInWorkflow: 'Document schemas for leads, properties & bookings' },
      { name: 'REST APIs', isHighlight: true, roleInWorkflow: 'Endpoint consumption, error handling & data formatting' },
      { name: 'Web App Integration', roleInWorkflow: 'Connecting booking forms, WhatsApp webhooks & CRM endpoints' }
    ]
  },
  {
    id: 'ai-workflows',
    name: 'AI Tools & Workflows',
    description: 'Augmenting design exploration, coding speed, debugging accuracy, and automation pipelines.',
    iconName: 'Sparkles',
    accentColor: '#8CF0D0',
    skills: [
      { name: 'Claude', isHighlight: true, roleInWorkflow: 'Complex architectural planning, UI critique & copy generation' },
      { name: 'Claude Code', roleInWorkflow: 'Agentic terminal workflows & fast code scaffolding' },
      { name: 'ChatGPT', roleInWorkflow: 'Brainstorming features, documentation & code review' },
      { name: 'Gemini', roleInWorkflow: 'Multimodal analysis, asset ideation & research' },
      { name: 'Google Antigravity', isHighlight: true, roleInWorkflow: 'End-to-end agentic pair programming & automated testing' },
      { name: 'OpenCode', roleInWorkflow: 'Assisted local coding & repository exploration' },
      { name: 'AI-Assisted Coding', isHighlight: true, roleInWorkflow: 'Accelerated implementation & typed component generation' },
      { name: 'AI-Assisted Debugging', roleInWorkflow: 'Rapid root-cause identification & lint resolution' },
      { name: 'Prompt Engineering', roleInWorkflow: 'Structured instructions for reliable AI outputs' },
      { name: 'Workflow Automation', roleInWorkflow: 'Automating repetitive web development tasks' }
    ]
  },
  {
    id: 'delivery',
    name: 'Delivery & Deployment',
    description: 'Taking digital solutions from concept to dependable production release.',
    iconName: 'GitBranch',
    accentColor: '#3B82F6',
    skills: [
      { name: 'Git & GitHub', isHighlight: true, roleInWorkflow: 'Version control, atomic commits & branch management' },
      { name: 'Website Deployment', roleInWorkflow: 'DNS setup, custom domains & SSL configuration' },
      { name: 'Vercel', isHighlight: true, roleInWorkflow: 'Continuous deployment, preview branches & edge caching' },
      { name: 'Responsive Testing', roleInWorkflow: 'Cross-browser validation across desktop, tablet & mobile' },
      { name: 'Client Requirement Gathering', roleInWorkflow: 'Scoping business needs & translating into practical features' }
    ]
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Business goals, users, pain points & requirements.',
    description: 'Every project begins by uncovering the core business objective and user expectations. I identify who the customer is, what problem the website solves, what actions need to be simplified (e.g. searching properties, requesting quotes, building event packages), and key conversion triggers.',
    deliverables: ['Requirement Matrix', 'User Journey Mapping', 'Competitive Landscape Scan'],
    color: '#5B5CE2'
  },
  {
    step: '02',
    title: 'Structure',
    tagline: 'Information architecture, user journeys & wireframes.',
    description: 'Before writing styles, I structure the content hierarchy. I map page flows, navigation structures, and high-impact hero layouts. This ensures users find critical information within 3 seconds of landing without visual friction.',
    deliverables: ['Information Architecture', 'Low/High Fidelity Wireframes', 'Navigation Flowcharts'],
    color: '#10B981'
  },
  {
    step: '03',
    title: 'Design & Build',
    tagline: 'Visual systems, responsive UI & frontend development.',
    description: 'I design refined visual interfaces in Figma and translate them into clean, performant React and Tailwind code. Utilizing modern component architecture, TypeScript interfaces, and AI-accelerated workflows, I implement modular and maintainable codebases.',
    deliverables: ['Figma Design System', 'Responsive React Components', 'API & Webhook Integrations'],
    color: '#F59E0B'
  },
  {
    step: '04',
    title: 'Refine & Deliver',
    tagline: 'Responsive testing, interaction polish & Vercel deployment.',
    description: 'Thorough QA testing across viewports (375px mobile to 1440px desktop), performance verification, accessibility audits, and smooth interaction polish. Finally, I configure Git repositories and deploy to Vercel for fast, global delivery.',
    deliverables: ['Cross-Device Testing', 'SEO Metadata & Favicons', 'Live Production Deployment'],
    color: '#8CF0D0'
  }
];
