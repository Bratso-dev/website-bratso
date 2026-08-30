import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHome from './components/SectionHome';
import SectionServices from './components/SectionServices';
import SectionProductions from './components/SectionProductions';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'productions', label: 'Produções' },
  { id: 'about', label: 'Sobre nós' },
  { id: 'contact', label: 'Contato' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <SectionHome setActiveSection={setActiveSection} />;
      case 'services':
        return <SectionServices />;
      case 'productions':
        return <SectionProductions />;
      case 'about':
        return <SectionAbout />;
      case 'contact':
        return (
          <SectionContact
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />
      <main className="content-area">{renderSection()}</main>
      <Footer setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
