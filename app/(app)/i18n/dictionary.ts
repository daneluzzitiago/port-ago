import type { Locale } from './config'

export const dictionary = {
  pt: {
    nav: {
      home: 'Home',
      degrees: 'Formação',
      experiences: 'Experiências',
      projects: 'Projetos',
      switchLang: 'EN',
    },
    sections: {
      degrees: 'Formação',
      experiences: 'Experiências',
      projects: 'Projetos',
    },
    hero: {
      greeting: 'Olá, eu sou ',
      butCall: ', mas pode me chamar de ',
      iam: 'Sou ',
    },
  },
  en: {
    nav: {
      home: 'Home',
      degrees: 'Degrees',
      experiences: 'Experience',
      projects: 'Projects',
      switchLang: 'PT',
    },
    sections: {
      degrees: 'Degrees',
      experiences: 'Experience',
      projects: 'Projects',
    },
    hero: {
      greeting: "Hello, I'm ",
      butCall: ', but you can call me ',
      iam: "I'm a ",
    },
  },
} as const satisfies Record<Locale, unknown>

export function getDict(locale: Locale) {
  return dictionary[locale]
}
