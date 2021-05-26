import './App.css';
import Footer from './components/global/footer';
import Header from './components/global/header';
import Home from './components/pages/home';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
