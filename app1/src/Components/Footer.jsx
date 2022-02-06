import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">

            <div class="container ">

                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-md-0">
                       

                        <ul class="list-unstyled mb-0">
                            <li>
                                <Link to="/presentation" class="text-light">Presentation</Link>
                            </li>
                        
                       
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6  mb-md-0">
                 

                        <ul class="list-unstyled mb-0">
                            <li>
                                <Link to="/explication" href="#!" class="text-light">Explication</Link>
                            </li>
                       
                        
                        </ul>
                    </div>

                   

                   

                </div>

            </div>

            <div className="text-center p-3 bg-dark text-light" >
                © 2020 Copyright:
                <Link to="/">MusicLearn.com</Link>
            </div>

        </footer>



    );
};
export default Footer