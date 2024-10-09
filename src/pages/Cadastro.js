import React, { useState } from 'react';
import axios from 'axios';

function CADASTRO() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', {
        nome,
        email,
      });
      alert(response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados');
    }
  };

  return (
    <div className="cadastro">
      <h1>Formulário em React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CADASTRO;