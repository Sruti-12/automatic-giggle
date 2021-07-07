import './App.css';
import Dashboard from './Dashboard'
import Dashboard_Home from './Dashboard_Home'
import Dashboard_Home_Details from './Dashboard_Home_Details'

import 'bootstrap/dist/css/bootstrap.min.css';
import{AiOutlineHome} from "react-icons/ai";
import Picker from 'emoji-picker-react';



function App() {
  return (
    <div>
    
      <Dashboard_Home />
      <Dashboard_Home_Details />
      <div style={{ margin: `60px`, display: `flex`, flexDirection: `row`, justifyContent: `left` }}>
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHE-tKgTaktgfR6R6xPUzBy5Am6ZLbbKwpg&usqp=CAU"} alt="Sample" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title " style={{ verticalAlign: 'left'}}>Philips Trimmer</div>
                </div>
            </div>
            <div className="e-card-content">
                Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                than 4 ordinary trimmers.
            </div>
        </div>
    </div>
  </div>
      <Dashboard />
      
    </div>
    ); 
}

export default App;
