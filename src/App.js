import profilepic from "./profilepic.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={profilepic}
          alt="Jane Summey headshot"
          className="profilePic"
        />
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            Resume
          </a>
          <br />
          <a className="navbar-brand" href="#">
            About Me
          </a>
          <br />
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/janesummey"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <a className="navbar-brand" href="#contactMe">
            Contact Me!
          </a>
          <br />
        </nav>
        <br />
        <div className="card">
          <h3>Experience</h3>
          <div className="card-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        <br />
        <div className="card">
          <h3>Skills</h3>
          <div className="card-body">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </div>
        </div>
        <br />
        <div className="card">
          <h3>About Me!</h3>
          <div className="card-body">"Some things about Jane!"</div>
        </div>
        <br />
        <div className="card">
          <h3>Projects</h3>
          <div className="card-body">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </div>
        </div>
      </header>
      <footer>
        <div id="contactMe">
          <h3>Contact Me!</h3>
          <div className="card-body">
            Email: bjanesummey@gmail.com Phone: 123.234.5623
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
