function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Prashant's Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <p>
        Welcome to my portfolio! I am a web developer with a passion for
        creating dynamic and responsive web applications.
      </p>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
      <div className="portfolio-gallery">
        <img src="images/image1.jpg" alt="Project 1" className="img-fluid" />
        <img src="images/image2.jpg" alt="Project 2" className="img-fluid" />
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section id="blogs" className="container">
      <h2>Blogs</h2>
      <div className="blogs-list">
        <a href="blogs/blog1.html">Online Jasypt Encryption/Decryption</a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>You can reach me at: email@example.com</p>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
