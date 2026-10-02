// Two builds from one codebase:
//   npm run build          -> public site with contact details and CV
//   npm run build:upwork   -> Upwork-safe site, no direct contact details
export const isUpwork = import.meta.env.VITE_VARIANT === 'upwork'

// Contact details are compiled out of the Upwork build entirely, not just hidden.
const contact = isUpwork
  ? { linkedin: '', email: '', whatsapp: '', cv: '' }
  : {
      linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-amin-41b081186',
      email: 'mailto:ahmedmohamed.amin@hotmail.com',
      whatsapp: 'https://wa.me/201001386765',
      cv: '/Ahmed_Mohamed_Frontend_Developer.pdf',
    }

export const links = {
  upwork: 'https://www.upwork.com/freelancers/~014374bc72fbd449f5',
  github: 'https://github.com/Ahmed-Serag19',
  ...contact,
}
