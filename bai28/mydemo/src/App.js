import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className='main--content'>
        <Content text="Messi - Miami" number={8} active={true} />
        <MainContent />
        <Content text="Ronaldo - Al Nars" number={5} active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
