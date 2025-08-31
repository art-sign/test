import logo from './logo.svg';
import './App.css';
import image1 from './Utils/Photo.jpeg'
import image2 from './Utils/image2.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
         
        </p>
        <a
          className="App-link"
          
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={image1} alt="Logo" width="70%"/>
         <br/>
           <img src={image2} width="70%"/>
        </a>
      </header>
    </div>
  );
}

export default App;
