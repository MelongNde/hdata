import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  firstName: g.string().length({ min: 2, max: 20 }),
  lastName: g.string().length({ min: 2, max: 20 }),
  dateOfBirth: g.date(),
  adress: g.string(),
  country: g.string(),
  state: g.string(),
  postalCode: g.int(),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  linkedInUrl: g.url().optional(),
  education: g.relation(() => Education).list().optional(),
  experience: g.relation(() => Experience).list().optional()
})

const Education = g.model('Education', {
  date: g.date(),
  inProcess: g.boolean(),
  institution: g.string(),
  degree: g.string(),
  fieldOfStudy: g.string(),
  location: g.string(),
  description: g.string().optional()
})

const Experience = g.model('Experience', {
  from: g.date(),
  to: g.date(),
  currentPosition: g.boolean().optional(),
  position: g.string(),
  company: g.string(),
  location: g.string().optional(),
  description: g.string().optional()
})

export default config({
  schema: g
})
