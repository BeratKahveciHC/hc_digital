import { BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'

export const services = [
  {
    slug: 'veri-analitigi',
    icon: BarChart2,
    accent: 'primary',
    color: 'text-primary border-primary/20 bg-primary/5',
    dot: 'bg-primary',
  },
  {
    slug: 'yazilim-gelistirme',
    icon: Code2,
    accent: 'accent',
    color: 'text-accent border-accent/20 bg-accent/5',
    dot: 'bg-accent',
  },
  {
    slug: 'yapay-zeka',
    icon: Brain,
    accent: 'sky',
    color: 'text-sky border-sky/20 bg-sky/5',
    dot: 'bg-sky',
  },
  {
    slug: 'raporlama-sistemleri',
    icon: FileBarChart,
    accent: 'primary',
    color: 'text-primary border-primary/20 bg-primary/5',
    dot: 'bg-primary',
  },
  {
    slug: 'teknoloji-danismanligi',
    icon: Lightbulb,
    accent: 'accent',
    color: 'text-accent border-accent/20 bg-accent/5',
    dot: 'bg-accent',
  },
  {
    slug: 'veri-bilimi',
    icon: FlaskConical,
    accent: 'sky',
    color: 'text-sky border-sky/20 bg-sky/5',
    dot: 'bg-sky',
  },
]

export const serviceTitles = {
  tr: {
    'veri-analitigi':          'Veri Analitiği',
    'yazilim-gelistirme':      'Yazılım Geliştirme',
    'yapay-zeka':              'Yapay Zekâ',
    'raporlama-sistemleri':    'Raporlama Sistemleri',
    'teknoloji-danismanligi':  'Teknoloji Danışmanlığı',
    'veri-bilimi':             'Veri Bilimi',
  },
  en: {
    'veri-analitigi':          'Data Analytics',
    'yazilim-gelistirme':      'Software Development',
    'yapay-zeka':              'Artificial Intelligence',
    'raporlama-sistemleri':    'Reporting Systems',
    'teknoloji-danismanligi':  'Technology Consulting',
    'veri-bilimi':             'Data Science',
  },
}
