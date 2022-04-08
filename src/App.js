import About from "./About";
import Team from "./Team/Team";

function App() {
  return (
    <section>
      <About></About>
      <Team title="Our Developers" ></Team>
      <Team title="Our Team" layout="style-2"></Team>
    </section>
  );
}

export default App;
