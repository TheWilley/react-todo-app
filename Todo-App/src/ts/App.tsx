import Info from './components/info';
import Controller from './controllers/controller';

function App() {
  return (
    <>
      <section className="todoapp">
        <Controller/>
      </section>
      <Info
        author="TheWillley (William Larsson)"
        github_link="https://github.com/TheWilley/Fruity_Dance_Sprite_Sheet_Generator/commits?author=TheWilley"
      />
    </>
  );
}

export default App;
