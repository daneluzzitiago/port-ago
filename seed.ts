/**
 * Bilingual seed — populates the Payload CMS database in both PT and EN.
 *
 * Usage:
 *   npm run seed
 */

import { getPayload } from 'payload'
import config from './payload.config'
import type { Experience } from './payload-types'

type Tool = NonNullable<Experience['tools']>[number]

// ─── Bilingual data ──────────────────────────────────────────────────────────

const HERO = {
  shared: { name: 'Tiago L. Daneluzzi', nickname: 'Dan', ctaTarget: 'about' },
  pt: {
    role: 'Desenvolvedor Full Stack',
    subtitle: 'Bem-vindo ao meu site! Aqui você encontra um pouco sobre mim e minhas experiências',
    ctaLabel: 'Mais sobre mim',
  },
  en: {
    role: 'Full Stack Developer',
    subtitle: 'Welcome to my website! Here you will find a bit about me and my experiences',
    ctaLabel: 'More about me',
  },
}

const DEGREES = [
  {
    shared: { institution: 'Universidade de São Paulo (USP)', order: 1 },
    pt: {
      course: 'Engenharia de Computação',
      description:
        'Aprendi a combinar conhecimentos de Engenharia Eletrônica e Ciência da Computação. ' +
        'Tive a oportunidade de aprofundar meu entendimento em áreas como sistemas embarcados, robótica, ' +
        'ciência de dados, computação móvel, desenvolvimento de sistemas, Internet das Coisas (IoT), ' +
        'redes de comunicação, inteligência artificial e engenharia de software.',
    },
    en: {
      course: 'Computer Engineering',
      description:
        'I learned to combine Electronic Engineering and Computer Science knowledge. I had the opportunity ' +
        'to deepen my understanding in areas such as embedded systems, robotics, data science, mobile computing, ' +
        'systems development, Internet of Things (IoT), communication networks, artificial intelligence, ' +
        'and software engineering.',
    },
  },
  {
    shared: { institution: 'Centro Universitário de Votuporanga', order: 2 },
    pt: {
      course: 'Tecnologia em Logística',
      description:
        'Aprendi sobre diversos aspectos essenciais da gestão eficiente de processos logísticos. Estudei temas como CRM, Supply ' +
        'Chain, gestão de pessoas e gestão financeira, o que me deu uma visão abrangente e estratégica das operações. O curso ' +
        'me preparou para atuar na organização e otimização de fluxos de trabalho, controle de estoque, análise de custos e ' +
        'melhoria de processos. Além disso, aprendi a lidar com as demandas do mercado, coordenando equipes e recursos ' +
        'de forma eficaz para atender às necessidades de empresas e clientes.',
    },
    en: {
      course: 'Logistics Technology',
      description:
        'I learned about various essential aspects of efficient logistics process management. I studied topics such as CRM, Supply ' +
        'Chain, people management, and financial management, which gave me a comprehensive and strategic view of operations. The program ' +
        'prepared me to work in organizing and optimizing workflows, inventory control, cost analysis, and ' +
        'process improvement. Additionally, I learned to handle market demands, effectively coordinating teams and resources ' +
        'to meet the needs of companies and clients.',
    },
  },
]

const EXPERIENCES = [
  {
    shared: { companyName: 'Dog Hero', tools: ['RubyOnRails', 'HTML', 'CSS'] as Tool[], iconPath: 'dog-hero.svg', order: 1 },
    pt: {
      companyDescription: 'Serviços de hospedagem e passeio para pets',
      position: 'Estagiário de Desenvolvimento de Software (Verão)',
      description:
        'Programa de estágio de verão como engenheiro de software. Implementação e manutenção de uma plataforma ' +
        'online que oferece serviços para pets. Utilizei Ruby on Rails e SQL para desenvolvimento backend, ' +
        'enquanto aprendia HTML e CSS para desenvolvimento frontend.',
      duration: '2 meses (2019)',
    },
    en: {
      companyDescription: 'Pet boarding and walking services',
      position: 'Software Development Summer Intern',
      description:
        'Summer internship program as a software engineer. Implementation and maintenance of an online platform ' +
        'that offers pet services. Used Ruby on Rails and SQL for backend development, while learning HTML and CSS ' +
        'for frontend development.',
      duration: '2 months (2019)',
    },
  },
  {
    shared: { companyName: 'Responde Aí', tools: [] as Tool[], iconPath: 'responde-ai.svg', order: 2 },
    pt: {
      companyDescription: 'Plataforma de ensino',
      position: 'Embaixador da Marca na USP',
      description:
        'Campanha de engajamento e vendas para a plataforma de ensino online focada em cursos superiores de exatas.',
      duration: '3 meses (2019)',
    },
    en: {
      companyDescription: 'Learning platform',
      position: 'Brand Ambassador at USP',
      description:
        'Engagement and sales campaign for the online teaching platform focused on STEM higher education courses.',
      duration: '3 months (2019)',
    },
  },
  {
    shared: { companyName: 'Stoq', tools: ['Python', 'JavaScript', 'React', 'Postgres', 'Redux'] as Tool[], iconPath: 'stoq.svg', order: 3 },
    pt: {
      companyDescription: 'Soluções para varejo',
      position: 'Estagiário de Desenvolvimento de Software',
      description:
        'Desenvolvimento de ERP multiplataforma open-source utilizando Python, React JS e PostgreSQL. Suporte ao cliente nível 2.',
      duration: '7 meses (2019)',
    },
    en: {
      companyDescription: 'Retail solutions',
      position: 'Software Development Intern',
      description:
        'Development of open-source multi-platform ERP using Python, React JS, and PostgreSQL. Level 2 customer support.',
      duration: '7 months (2019)',
    },
  },
  {
    shared: { companyName: 'B2W', tools: ['Python'] as Tool[], iconPath: 'b2w.svg', order: 4 },
    pt: {
      companyDescription: 'Marketplace',
      position: 'Estagiário de Gestão de Produtos',
      description:
        'Desenvolvimento de um chatbot utilizando a ferramenta TheBotPlatform (TBP) para automatizar etapas do ' +
        'Programa de Estágio Tech. Mapeamento do programa para identificar atividades repetidas e pontos de maior ' +
        'entrega de valor. Uso de Design Thinking, Gestão de Produtos e metodologias ágeis. Integração de APIs ' +
        'entre TBP, Trello, Google Drive e outros através de webhooks.',
      duration: '2 meses (2020)',
    },
    en: {
      companyDescription: 'Marketplace',
      position: 'Product Management Intern',
      description:
        'Development of a chatbot using TheBotPlatform (TBP) tool to automate steps in the Tech Internship Program. ' +
        'Program mapping to identify repeated activities and points of highest value delivery. Use of Design Thinking, Product ' +
        'Management, and Agile methodologies. API integration between TBP, Trello, Google Drive, and others through webhooks.',
      duration: '2 months (2020)',
    },
  },
  {
    shared: {
      companyName: 'Monitora',
      tools: ['Java', 'SpringBoot', 'Postgres', 'MySQL', 'React', 'JavaScript', 'Redux'] as Tool[],
      iconPath: 'monitora.svg',
      order: 5,
    },
    pt: {
      companyDescription: 'Consultoria',
      position: 'Estagiário de Desenvolvimento de Software',
      description:
        'Liderei o desenvolvimento de sistemas de testes funcionais utilizando metodologias ágeis e framework Scrum. ' +
        'Implementei pipelines de testes automatizados com Jira, Zephyr e Confluence. ' +
        'Melhorei a qualidade do código através da integração com SonarQube e ESLint. ' +
        'Orquestrei deploy e monitoramento usando Jenkins, Kubernetes e Kibana.',
      duration: '9 meses (2020)',
    },
    en: {
      companyDescription: 'Consulting',
      position: 'Software Development Intern',
      description:
        'Led the development of functional testing systems using agile methodologies and Scrum framework. ' +
        'Implemented automated testing pipelines with Jira, Zephyr, and Confluence. ' +
        'Enhanced code quality through SonarQube and ESLint integration. ' +
        'Orchestrated deployment and monitoring using Jenkins, Kubernetes, and Kibana.',
      duration: '9 months (2020)',
    },
  },
  {
    shared: {
      companyName: 'Quinto Andar',
      tools: ['Java', 'SpringBoot', 'Postgres', 'MySQL', 'React', 'JavaScript', 'Redux', 'TypeScript', 'Flutter', 'Firebase', 'Next'] as Tool[],
      iconPath: 'quinto-andar.svg',
      order: 6,
    },
    pt: {
      companyDescription: 'Imobiliária Digital',
      position: 'Estagiário de Desenvolvimento ~ Engenheiro de Software Júnior ~ Engenheiro de Software',
      description:
        'Progredi de estagiário a Engenheiro de Software, liderando iniciativas de desenvolvimento frontend. ' +
        'Implementei integração de pagamento via Pix e sistema de acompanhamento de visitas a imóveis. ' +
        'Especializei-me em desenvolvimento React e TypeScript, criando funcionalidades de alto impacto. ' +
        'Liderei descobertas técnicas e planejamento estratégico para novos produtos. ' +
        'Expandi minha expertise técnica para desenvolvimento mobile com Flutter.',
      duration: '4 anos (2020-2024)',
    },
    en: {
      companyDescription: 'Digital Real Estate',
      position: 'Software Development Intern ~ Junior Software Engineer ~ Software Engineer',
      description:
        'Progressed from intern to Software Engineer, leading frontend development initiatives. ' +
        'Implemented Pix payment integration and property viewing tracking system. ' +
        'Specialized in React and TypeScript development, creating high-impact features. ' +
        'Led technical discoveries and strategic planning for new products. ' +
        'Expanded technical expertise to mobile development with Flutter.',
      duration: '4 years (2020-2024)',
    },
  },
  {
    shared: {
      companyName: 'Rei do Pitaco',
      tools: ['React', 'JavaScript', 'TypeScript', 'Flutter', 'Next'] as Tool[],
      iconPath: 'rei-do-pitaco.svg',
      order: 7,
    },
    pt: {
      companyDescription: 'Apostas e iGaming',
      position: 'Engenheiro de Software',
      description:
        'Arquitetei interfaces dinâmicas usando contratos protobuf e gRPC, otimizando comunicação com o servidor. ' +
        'Implementei um fluxo completo de KYC com integração de reconhecimento facial para prevenção de fraudes. ' +
        'Desenvolvi soluções multiplataforma para aplicações web e mobile.',
      duration: '4 meses (2024-2025)',
    },
    en: {
      companyDescription: 'Betting and iGaming',
      position: 'Software Engineer',
      description:
        'Architected dynamic interfaces using protobuf contracts and gRPC, optimizing server communication. ' +
        'Implemented a comprehensive KYC flow with facial recognition integration for fraud prevention. ' +
        'Developed cross-platform solutions for both web and mobile applications.',
      duration: '4 months (2024-2025)',
    },
  },
]

const PROJECTS = [
  {
    shared: { title: 'Gymbo', projectUrl: 'https://gymbo.com.br', tools: ['Firebase', 'React', 'TypeScript', 'Next'] as Tool[], imgPath: '/gymbo.png', order: 1 },
    pt: { description: 'Plataforma para criação e acompanhamento de desempenho de treinos de musculação.' },
    en: { description: 'Platform for creating and tracking workout performance in weight training.' },
  },
  {
    shared: { title: 'Google Login', githubUrl: 'https://github.com/daneluzzitiago/google-login', tools: ['JavaScript', 'Firebase'] as Tool[], imgPath: '/google-login.png', order: 2 },
    pt: { description: 'Tutorial simples demonstrando a implementação de autenticação Google em aplicações web.' },
    en: { description: 'Simple tutorial demonstrating Google authentication implementation in web applications.' },
  },
  {
    shared: { title: 'Port Ago', githubUrl: 'https://github.com/daneluzzitiago/port-ago', tools: ['React', 'TypeScript', 'Next'] as Tool[], order: 3 },
    pt: { description: 'Port Ago (By Tiago) é meu site de portfólio — este que você está vendo agora.' },
    en: { description: "Port Ago (By Tiago) is my portfolio website — the one you're looking at right now." },
  },
  {
    shared: { title: 'Go, players!', githubUrl: 'https://github.com/daneluzzitiago/go-players', tools: ['Go'] as Tool[], order: 4 },
    pt: {
      description:
        'Meu primeiro projeto em Golang: uma aplicação local usando SQLite para armazenar informações de jogadores ' +
        'e torneios. Gerencia torneios onde jogadores competem até haver um vencedor.',
    },
    en: {
      description:
        "My first Golang project: a local application using SQLite to store players and tournaments information. " +
        "It manages tournaments where players compete until there's a winner.",
    },
  },
  {
    shared: { title: 'Blackjack - GA', githubUrl: 'https://github.com/daneluzzitiago/21_evolutivo', tools: ['C'] as Tool[], order: 5 },
    pt: {
      description:
        'Aplicação de Algoritmo Genético que aprende a jogar Blackjack e desenvolve uma matriz de decisão ' +
        'baseada nas cartas do jogador. Desenvolvido durante meu curso de Algoritmos Evolutivos.',
    },
    en: {
      description:
        'Genetic Algorithm application that learns to play Blackjack and develops a decision matrix based on player cards. ' +
        'Developed during my Evolutionary Algorithms course.',
    },
  },
  {
    shared: { title: 'CSGO - Game State Listener', githubUrl: 'https://github.com/daneluzzitiago/csgo-gamestate-integration', tools: ['Nodejs', 'JavaScript'] as Tool[], order: 6 },
    pt: {
      description:
        'Meu projeto de TCC. Uma aplicação que escuta mudanças de estado de partidas de CSGO, identifica eventos ' +
        'e os registra junto com coordenadas do mapa (X,Y) para criar mapas de calor de eventos.',
    },
    en: {
      description:
        'My final thesis project. An application that listens to CSGO match state changes, identifies events, and records ' +
        'them along with map coordinates (X,Y) to create event heatmaps.',
    },
  },
  {
    shared: { title: 'Heróis de Mesa', githubUrl: 'https://github.com/daneluzzitiago/herois_de_mesa', tools: ['Java'] as Tool[], order: 7 },
    pt: { description: 'Jogo de tabuleiro desenvolvido como parte do meu curso universitário.' },
    en: { description: 'Board game developed as part of my university coursework.' },
  },
  {
    shared: { title: 'Tetris', githubUrl: 'https://github.com/daneluzzitiago/tetris', tools: ['Java'] as Tool[], order: 8 },
    pt: { description: 'Implementação do jogo Tetris criada durante minha graduação.' },
    en: { description: 'Tetris game implementation created during my undergraduate studies.' },
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

type Locale = 'pt' | 'en'
type PayloadInstance = Awaited<ReturnType<typeof getPayload>>

async function clearCollection(payload: PayloadInstance, collection: 'degrees' | 'experiences' | 'projects') {
  const { docs } = await payload.find({ collection, limit: 200, pagination: false })
  await Promise.all(docs.map((doc) => payload.delete({ collection, id: doc.id })))
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Clearing existing data...')
  await Promise.all([
    clearCollection(payload, 'experiences'),
    clearCollection(payload, 'degrees'),
    clearCollection(payload, 'projects'),
  ])

  // --- Hero (both locales) --------------------------------------------------
  for (const locale of ['pt', 'en'] as Locale[]) {
    await payload.updateGlobal({
      slug: 'hero',
      locale,
      data: { ...HERO.shared, ...HERO[locale] },
    })
  }
  console.log('✅ Hero global updated (pt + en).')

  // --- Degrees (both locales) -----------------------------------------------
  for (const degree of DEGREES) {
    const doc = await payload.create({
      collection: 'degrees',
      locale: 'pt',
      data: { ...degree.shared, ...degree.pt },
    })
    await payload.update({ collection: 'degrees', id: doc.id, locale: 'en', data: degree.en })
  }
  console.log(`✅ ${DEGREES.length} degrees created (pt + en).`)

  // --- Experiences (both locales) -------------------------------------------
  for (const exp of EXPERIENCES) {
    const doc = await payload.create({
      collection: 'experiences',
      locale: 'pt',
      data: { ...exp.shared, ...exp.pt },
    })
    await payload.update({ collection: 'experiences', id: doc.id, locale: 'en', data: exp.en })
  }
  console.log(`✅ ${EXPERIENCES.length} experiences created (pt + en).`)

  // --- Projects (both locales) ----------------------------------------------
  for (const proj of PROJECTS) {
    const doc = await payload.create({
      collection: 'projects',
      locale: 'pt',
      data: { ...proj.shared, ...proj.pt },
    })
    await payload.update({ collection: 'projects', id: doc.id, locale: 'en', data: proj.en })
  }
  console.log(`✅ ${PROJECTS.length} projects created (pt + en).`)

  console.log('\n🎉 Seed complete!')
  await payload.db.destroy?.()
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
