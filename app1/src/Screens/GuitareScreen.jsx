import { Link } from "react-router-dom";
const GuitareScreen = () => {
    return (
        <div classNmae="container-fluid">
        <div className="row">

    
     <div className="col-6 bg-primary text-light">
             <ul>
             <Link to="/play" className="text-light" > 
                <li> music tendance 1  </li>
            </Link>
                <li>music tendance 2</li>
                <li>music tendance 3</li>
                <li>music tendance 4</li>
            </ul>

     </div>
     <div className="col-6 bg-primary text-light">
           
             <Link to="/creation" className="text-light" > 
                 création de musique  
            </Link>
                
     </div>
            <div className="bg-danger col-6">
            <ul>
             <Link to="/play" className="text-light" > 
                <li>music favoris 1  </li>
            </Link>
                <li>music favoris 2</li>
                <li>music favoris 3</li>
                <li>music favoris 4</li>
            </ul>
            </div>
            <div className="col-6 bg-success">
            <ul>
             <Link to="/play" className="text-light" > 
                <li>music actu 1</li> 
            </Link>
                <li>music actu 2</li>
                <li>music actu 3</li>
                <li>music actu 4</li>
            </ul>
            </div>
            <div className="col-6 bg-warning">
            <ul>
             <Link to="/play" className="text-light" > 
                <li>music créé 1</li> 
            </Link>
                <li>music créé 2</li>
                <li>music créé 3</li>
                <li>music créé 4</li>
            </ul>
            </div>
        </div>
        </div>
    );

};
export default GuitareScreen;