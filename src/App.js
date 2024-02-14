
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from './HomeScreen';


function App() {
  return (
    <div className="app">
      
      
      <BrowserRouter >
      
            <Routes >
              
              <Route path="/" element={<HomeScreen />} />
              <Route path='/' element={<About/>}/>
              
            

            

          
        </Routes>
            
        
      </BrowserRouter>
      

    </div>
  );
}
export default App;


