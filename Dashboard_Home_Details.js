import { BsCardChecklist } from "react-icons/bs"

const Dashboard_Home_Details = () => {
    return ( 
        <div className="Conference_Home">
           <p> My confrences </p>
       <div className="Conference_Home_Details_Link">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">Ongoing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Upcoming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Completed</a>
            </li>
        </ul>
        </div>
        
        <div className="Conference_Home_Details_Link_cards">
            
        </div></div>
        

      
     );
}
 
export default Dashboard_Home_Details;