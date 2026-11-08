export type Locale = 'en' | 'fr';

export const en = {
  presentation: {
    hello: 'Hello,',
    intro: "I'm",
    description: 'I build simple and reliable things.',
    titles: ['Software Developer', 'Tech Enthusiast', 'Lifelong Learner'],
  },
  experiences: {
    professional: 'Professional experiences',
    scholar: 'Scholar experiences',
    present: 'Present',
    client: 'Client:',
    softwareEngineer: 'Software Engineer',
    master: 'Engineering degree in Computer Science',
    exchange: 'Exchange program',
    prep: 'Preparatory stage for engineering school',
    quebec: 'Quebec, Canada',
  },
  projects: {
    title: 'Projects',
    portfolio: 'This very website, built with Angular and Tailwind CSS.',
    freya:
      'A mobile app for Android to track your menstrual cycle and give advice, built with Kotlin and Jetpack Compose.',
    cloutmetrics:
      'A tool to analyze git repositories and generate metrics, built with Java and Spring Boot.',
  },
  contact: {
    title: 'Get in touch',
    description:
      'Whether you have a question, a project idea or just want to say hi, my inbox is always open.',
  },
  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },
  locale: {
    toEnglish: 'Switch to English',
    toFrench: 'Switch to French',
  },
  footer: {
    builtWith: 'Built with Angular and Tailwind CSS.',
    source: 'View source',
  },
};

export type Dictionary = typeof en;

export const fr: Dictionary = {
  presentation: {
    hello: 'Bonjour,',
    intro: 'Je suis',
    description: 'Je construis des choses simples et fiables.',
    titles: ['Développeur logiciel', 'Passionné de technologie', 'Apprentissage continu'],
  },
  experiences: {
    professional: 'Expériences professionnelles',
    scholar: 'Expériences académiques',
    present: 'Présent',
    client: 'Client :',
    softwareEngineer: 'Ingénieur logiciel',
    master: "Diplôme d'ingénieur en informatique",
    exchange: "Programme d'échange",
    prep: "Cycle préparatoire aux écoles d'ingénieurs",
    quebec: 'Québec, Canada',
  },
  projects: {
    title: 'Projets',
    portfolio: 'Ce site même, construit avec Angular et Tailwind CSS.',
    freya:
      'Une application mobile Android pour suivre votre cycle menstruel et obtenir des conseils, construite avec Kotlin et Jetpack Compose.',
    cloutmetrics:
      'Un outil pour analyser des dépôts git et générer des métriques, construit avec Java et Spring Boot.',
  },
  contact: {
    title: 'Me contacter',
    description:
      'Que vous ayez une question, une idée de projet ou que vous vouliez juste dire bonjour, ma boîte mail est toujours ouverte.',
  },
  theme: {
    toLight: 'Passer en mode clair',
    toDark: 'Passer en mode sombre',
  },
  locale: {
    toEnglish: 'Passer en anglais',
    toFrench: 'Passer en français',
  },
  footer: {
    builtWith: 'Construit avec Angular et Tailwind CSS.',
    source: 'Voir le code source',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr };

/**
 * Presentation texts for the hidden cat mode, unlocked by clicking the avatar.
 * The cat speaks the language of the visitor: meow or miaou.
 */
export const catDictionary: Record<Locale, Dictionary['presentation']> = {
  en: {
    hello: 'Meow,',
    intro: 'Meow',
    description: 'Meow meow meow meow meow meow.',
    titles: ['Meow', 'Meow meow', 'Mrrrp'],
  },
  fr: {
    hello: 'Miaou,',
    intro: 'Miaou',
    description: 'Miaou miaou miaou miaou miaou miaou.',
    titles: ['Miaou', 'Miaou miaou', 'Mrrrp'],
  },
};
