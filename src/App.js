import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar.js'
function App() {
  return (
    <>
    <Navbar title={"Case Convertor"}/>
    <div className="container">
       <TextForm heading="Enter the text to Change Case"/>
    </div>
    </>
        

  );
}

export default App;
