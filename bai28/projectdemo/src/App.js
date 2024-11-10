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
      <div className='main-content'>
        <Content text="Nhà cái Châu Á" number={10} active={false} />
        <MainContent />
        <Content text="Nhà cái Châu Âu" number={5} active={true} />
      </div>
      <Footer />
    </>
  );
}

export default App;
