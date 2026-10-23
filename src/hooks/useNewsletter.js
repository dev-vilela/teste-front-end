import { useState } from 'react';

export function useNewsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (!accepted) {
      alert('Por favor, aceite os termos e condições.');
      return;
    }

    setMessage('Obrigado por se inscrever na nossa newsletter!');
    setName('');
    setEmail('');
    setAccepted(false);
    setTimeout(() => setMessage(''), 4000);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    accepted,
    setAccepted,
    message,
    handleSubmit,
  };
}
