import './App.css'
import Accordion from './Accordion'

function App() {
  const faqs = [
    {
      id: 1,
      label: "What is Frontend Mentor, and how will it help me?",
      panel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi, molestiae nisi similique voluptates autem.",
    },
    {
      id: 2,
      label: "Is Frontend Mentor free?",
      panel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi, molestiae nisi similique voluptates autem.",
    },
    {
      id: 3,
      label: "Can I use Frontend Mentor projects in my portfolio?",
      panel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi, molestiae nisi similique voluptates autem.",
    },
    {
      id: 4,
      label: "How can I get help if I'm stuck on a challenge?",
      panel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi, molestiae nisi similique voluptates autem.",
    }
  ];
  return (
    <div className="main">
      <Accordion title="FAQs" data={faqs} />
    </div>
  )
}

export default App
