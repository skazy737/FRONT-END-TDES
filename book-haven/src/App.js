import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Book Haven</div>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Descubra Seu Próximo Livro Favorito</h1>
          <p>Junte-se ao nosso clube do livro e receba livros entregues na sua porta todos os meses.</p>
          <a href="#pricing" className="cta-button">Comece Agora</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Sobre Nós</h2>
        <p>A Book Haven é um serviço de assinatura mensal para amantes de livros. A cada mês, selecionamos livros especialmente para você, com base nas suas preferências.</p>
      </section>

      <section id="features" className="features">
        <h2>Recursos</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Livros Selecionados</h3>
            <p>Nossos especialistas escolhem livros que combinam com seu gosto.</p>
          </div>
          <div className="card">
            <h3>Entrega Conveniente</h3>
            <p>Livros entregues na sua porta todos os meses.</p>
          </div>
          <div className="card">
            <h3>Descontos Exclusivos</h3>
            <p>Obtenha descontos especiais em livros e mercadorias.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Preços</h2>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Básico</h3>
            <p>R$ 50/mês</p>
            <ul>
              <li>1 Livro</li>
              <li>Entrega Padrão</li>
              <li>Descontos Exclusivos</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Padrão</h3>
            <p>R$ 100/mês</p>
            <ul>
              <li>2 Livros</li>
              <li>Entrega Prioritária</li>
              <li>Descontos Exclusivos</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Premium</h3>
            <p>R$ 150/mês</p>
            <ul>
              <li>3 Livros</li>
              <li>Entrega Expressa</li>
              <li>Descontos Exclusivos</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contato</h2>
        <form className="contact-form">
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <textarea placeholder="Sua Mensagem" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Book Haven. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
