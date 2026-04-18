/**
 * Seed script — populates the Payload CMS database with initial data.
 *
 * Usage:
 *   npm run seed
 *
 * This script is safe to run multiple times: it checks for existing records
 * before inserting to avoid duplicates. The admin user is only created if
 * no users exist yet.
 */

import { getPayload } from 'payload'
import config from './payload.config'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const HERO_DATA = {
  name: 'Tiago Daneluzz',
  nickname: 'Tiago',
  role: 'Software Engineer',
  subtitle: 'Building products that people love.',
  ctaLabel: 'Download CV',
  ctaTarget: '/resume.pdf',
}

const DEGREES_DATA = [
  {
    institution: 'Universidade de São Paulo (USP)',
    course: 'Computer Engineering',
    description:
      'I learned to combine Electronic Engineering and Computer Science knowledge. I had the opportunity to deepen my understanding ' +
      'in areas such as embedded systems, robotics, data science, mobile computing, systems development, Internet of ' +
      'Things (IoT), communication networks, artificial intelligence, and software engineering.',
    order: 1,
  },
  {
    institution: 'Centro Universitário de Votuporanga',
    course: 'Logistics Technology',
    description:
      'I learned about various essential aspects of efficient logistics process management. I studied topics such as CRM, Supply ' +
      'Chain, people management, and financial management, which gave me a comprehensive and strategic view of operations. The program ' +
      'prepared me to work in organizing and optimizing workflows, inventory control, cost analysis, and ' +
      'process improvement.',
    order: 2,
  },
] as const

const EXPERIENCES_DATA = [
  {
    companyName: 'Dog Hero',
    companyDescription: 'Pet boarding and walking services',
    position: 'Software Development Summer Intern',
    description:
      'Summer internship program as a software engineer. Implementation and maintenance of an online platform ' +
      'that offers pet services. Used Ruby on Rails and SQL for backend development, while learning HTML and CSS ' +
      'for frontend development.',
    tools: ['RubyOnRails', 'HTML', 'CSS'],
    duration: '2 months (2019)',
    order: 1,
  },
  {
    companyName: 'Responde Aí',
    companyDescription: 'Learning platform',
    position: 'Brand Ambassador at USP',
    description:
      'Engagement and sales campaign for the online teaching platform focused on STEM higher education courses.',
    tools: [],
    duration: '3 months (2019)',
    order: 2,
  },
  {
    companyName: 'Stoq',
    companyDescription: 'Retail solutions',
    position: 'Software Development Intern',
    description:
      'Development of open-source multi-platform ERP using Python, React JS, and PostgreSQL. Level 2 customer support.',
    tools: ['Python', 'JavaScript', 'React', 'Postgres', 'Redux'],
    duration: '7 months (2019)',
    order: 3,
  },
  {
    companyName: 'B2W',
    companyDescription: 'Marketplace',
    position: 'Product Management Intern',
    description:
      'Development of a chatbot using TheBotPlatform (TBP) tool to automate steps in the Tech Internship Program. ' +
      'Program mapping to identify repeated activities and points of highest value delivery. Use of Design Thinking, ' +
      'Product Management, and Agile methodologies. API integration between TBP, Trello, Google Drive, and others through webhooks.',
    tools: ['Python'],
    duration: '2 months (2020)',
    order: 4,
  },
  {
    companyName: 'Monitora',
    companyDescription: 'Consulting',
    position: 'Software Development Intern',
    description:
      'Led the development of functional testing systems using agile methodologies and Scrum framework. ' +
      'Implemented automated testing pipelines with Jira, Zephyr, and Confluence. ' +
      'Enhanced code quality through SonarQube and ESLint integration. ' +
      'Orchestrated deployment and monitoring using Jenkins, Kubernetes, and Kibana.',
    tools: ['Java', 'SpringBoot', 'Postgres', 'MySQL', 'React', 'JavaScript', 'Redux'],
    duration: '9 months (2020)',
    order: 5,
  },
  {
    companyName: 'Quinto Andar',
    companyDescription: 'Digital Real Estate',
    position: 'Software Development Intern → Junior Software Engineer → Software Engineer',
    description:
      'Progressed from intern to Software Engineer, leading frontend development initiatives. ' +
      'Implemented Pix payment integration and property viewing tracking system. ' +
      'Specialized in React and TypeScript development, creating high-impact features. ' +
      'Led technical discoveries and strategic planning for new products. ' +
      'Expanded technical expertise to mobile development with Flutter.',
    tools: [
      'Java', 'SpringBoot', 'Postgres', 'MySQL', 'React',
      'JavaScript', 'Redux', 'TypeScript', 'Flutter', 'Firebase', 'Next',
    ],
    duration: '4 years (2020–2024)',
    order: 6,
  },
  {
    companyName: 'Rei do Pitaco',
    companyDescription: 'Betting and iGaming',
    position: 'Software Engineer',
    description:
      'Architected dynamic interfaces using protobuf contracts and gRPC, optimizing server communication. ' +
      'Implemented a comprehensive KYC flow with facial recognition integration for fraud prevention. ' +
      'Developed cross-platform solutions for both web and mobile applications.',
    tools: ['React', 'JavaScript', 'TypeScript', 'Flutter', 'Next'],
    duration: '4 months (2024–2025)',
    order: 7,
  },
] as const

const PROJECTS_DATA = [
  {
    title: 'Gymbo',
    description: 'Platform for creating and tracking workout performance in weight training.',
    projectUrl: 'https://gymbo.com.br',
    tools: ['Firebase', 'React', 'TypeScript', 'Next'],
    isWorkInProgress: false,
    order: 1,
  },
  {
    title: 'Port Ago',
    description: 'Port Ago (By Tiago) is my portfolio website — the one you\'re looking at right now.',
    githubUrl: 'https://github.com/daneluzzitiago/port-ago',
    tools: ['React', 'TypeScript', 'Next'],
    isWorkInProgress: false,
    order: 2,
  },
  {
    title: 'Go, players!',
    description:
      'My first Golang project: a local application using SQLite to store players and tournaments information. ' +
      'It manages tournaments where players compete until there\'s a winner.',
    githubUrl: 'https://github.com/daneluzzitiago/go-players',
    tools: ['Go'],
    isWorkInProgress: false,
    order: 3,
  },
  {
    title: 'Google Login',
    description: 'Simple tutorial demonstrating Google authentication implementation in web applications.',
    githubUrl: 'https://github.com/daneluzzitiago/google-login',
    tools: ['JavaScript', 'Firebase'],
    isWorkInProgress: false,
    order: 4,
  },
  {
    title: 'Blackjack — Genetic Algorithm',
    description:
      'Genetic Algorithm application that learns to play Blackjack and develops a decision matrix based on player cards. ' +
      'Developed during my Evolutionary Algorithms course.',
    githubUrl: 'https://github.com/daneluzzitiago/21_evolutivo',
    tools: ['C'],
    isWorkInProgress: false,
    order: 5,
  },
  {
    title: 'CSGO Game State Listener',
    description:
      'My final thesis project. An application that listens to CSGO match state changes, identifies events, and records ' +
      'them along with map coordinates (X,Y) to create event heatmaps.',
    githubUrl: 'https://github.com/daneluzzitiago/csgo-gamestate-integration',
    tools: ['Nodejs', 'JavaScript'],
    isWorkInProgress: false,
    order: 6,
  },
  {
    title: 'Herois de mesa',
    description: 'Board game developed as part of my university coursework.',
    githubUrl: 'https://github.com/daneluzzitiago/herois_de_mesa',
    tools: ['Java'],
    isWorkInProgress: false,
    order: 7,
  },
  {
    title: 'Tetris',
    description: 'Tetris game implementation created during my undergraduate studies.',
    githubUrl: 'https://github.com/daneluzzitiago/tetris',
    tools: ['Java'],
    isWorkInProgress: false,
    order: 8,
  },
] as const

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function seed() {
  const payload = await getPayload({ config })

  // --- Admin user -----------------------------------------------------------
  const { totalDocs: userCount } = await payload.find({ collection: 'users', limit: 1 })
  if (userCount === 0) {
    const email = process.env.SEED_ADMIN_EMAIL ?? 'admin@portfolio.local'
    const password = process.env.SEED_ADMIN_PASSWORD ?? 'changeme123'
    await payload.create({ collection: 'users', data: { email, password } })
    console.log(`✓ Admin user created (${email})`)
  } else {
    console.log('· Admin user already exists, skipping.')
  }

  // --- Hero global ----------------------------------------------------------
  await payload.updateGlobal({ slug: 'hero', data: HERO_DATA })
  console.log('✓ Hero global updated.')

  // --- Degrees --------------------------------------------------------------
  const { totalDocs: degreeCount } = await payload.find({ collection: 'degrees', limit: 1 })
  if (degreeCount === 0) {
    for (const degree of DEGREES_DATA) {
      await payload.create({ collection: 'degrees', data: degree })
    }
    console.log(`✓ ${DEGREES_DATA.length} degrees created.`)
  } else {
    console.log('· Degrees already exist, skipping.')
  }

  // --- Experiences ----------------------------------------------------------
  const { totalDocs: expCount } = await payload.find({ collection: 'experiences', limit: 1 })
  if (expCount === 0) {
    for (const experience of EXPERIENCES_DATA) {
      await payload.create({ collection: 'experiences', data: experience })
    }
    console.log(`✓ ${EXPERIENCES_DATA.length} experiences created.`)
  } else {
    console.log('· Experiences already exist, skipping.')
  }

  // --- Projects -------------------------------------------------------------
  const { totalDocs: projectCount } = await payload.find({ collection: 'projects', limit: 1 })
  if (projectCount === 0) {
    for (const project of PROJECTS_DATA) {
      await payload.create({ collection: 'projects', data: project })
    }
    console.log(`✓ ${PROJECTS_DATA.length} projects created.`)
  } else {
    console.log('· Projects already exist, skipping.')
  }

  console.log('\nSeed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
