import { Welcome } from '../welcome/welcome'

export function meta() {
  return [
    { title: 'Chatbot AI Embedded' },
    {
      name: 'description',
      content: 'Welcome to Chatbot AI Embedded web application!',
    },
  ]
}

export default function Home() {
  return <Welcome />
}
