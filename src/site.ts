// Two builds from one codebase:
//   npm run build          -> public site with contact details
//   npm run build:upwork   -> Upwork-safe site, no direct contact details
export const isUpwork = import.meta.env.VITE_VARIANT === 'upwork'

// Contact details are compiled out of the Upwork build entirely, not just hidden.
const contact = isUpwork
  ? { linkedin: '', email: '', whatsapp: '', phone: '' }
  : {
      linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-amin-41b081186',
      email: 'mailto:ahmedmohamed.amin@hotmail.com',
      whatsapp: 'https://wa.me/201001386765',
      phone: '+20 100 138 6765',
    }

export const links = {
  upwork: 'https://www.upwork.com/freelancers/~014374bc72fbd449f5',
  github: 'https://github.com/Ahmed-Serag19',
  ...contact,
}

export const openCv = () => window.dispatchEvent(new Event('cv:open'))
