import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-scene">
      <div className="scene-overlay" />

      {/* Ambient glow orb */}
      <div className="ambient-orb" />

      {/* Center message */}
      <div className="contact-center">
        <h2>Let’s Build Something Meaningful</h2>
        <p>I’m always open to ideas, opportunities, and creative collaborations.</p>
      </div>

      {/* Vertical floating nodes */}
      <div className="contact-nodes">
        
        {/* Email */}
        <a
          href="mailto:rainasebastian57@gmail.com"
          className="node"
        >
          <span>Email</span>
          <p>rainasebastian57@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/raina-sebastian-9a4292382"
          target="_blank"
          rel="noopener noreferrer"
          className="node"
        >
          <span>LinkedIn</span>
          <p>linkedin.com/in/raina-sebastian</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rainasebastian57-design"
          target="_blank"
          rel="noopener noreferrer"
          className="node github-node"
        >
          <span>GitHub</span>
          <p>github.com/rainasebastian57-design</p>
        </a>

      </div>

      {/* Footer */}
      <footer className="scene-footer">
        © 2026 Raina Sebastian · Crafted with intention
      </footer>
    </section>
  );
};

export default Contact;
