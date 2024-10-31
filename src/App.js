import './App.css';
import './style/landingPage.css';
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end of trending section */}

      <div className='superhero'>
        <Superhero/>
      </div>
    </div>
  );
}

export default App;
