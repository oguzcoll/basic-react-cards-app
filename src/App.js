import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident adipisci eos vel voluptatem delectus eaque, eligendi, nemo officia repellendus odit sint at earum dolor quaerat itaque id expedita consectetur?"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap5}
                title="Boostrap 5"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident adipisci eos vel voluptatem delectus eaque, eligendi, nemo officia repellendus odit sint at earum dolor quaerat itaque id expedita consectetur?"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident adipisci eos vel voluptatem delectus eaque, eligendi, nemo officia repellendus odit sint at earum dolor quaerat itaque id expedita consectetur?"
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident adipisci eos vel voluptatem delectus eaque, eligendi, nemo officia repellendus odit sint at earum dolor quaerat itaque id expedita consectetur?"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
