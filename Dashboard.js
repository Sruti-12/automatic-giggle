import{AiOutlineHome} from "react-icons/ai";
import{ BsGrid1X2} from "react-icons/bs";
import {MdPeopleOutline} from "react-icons/md"
import { VscBellDot } from "react-icons/vsc"
import { AiOutlineQuestionCircle } from "react-icons/ai"
const Dashboard = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>

    return ( 
        
        
        <div className="iconBar">
        <a className="active" href="#"><AiOutlineHome /><i class="fa fa-home"></i></a> 
        <a href="#"><i class="fa fa-search"><BsGrid1X2 /></i></a> 
        <a href="#"><i class="fa fa-envelope"><MdPeopleOutline /></i></a> 
        <a href="#"><i class="fa fa-globe"><VscBellDot/></i></a>
        <a href="#"><i class="fa fa-trash"><AiOutlineQuestionCircle/></i></a> 
        </div>


     );
}

export default Dashboard;
