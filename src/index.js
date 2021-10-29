import React from "react";
import ReactDOM from "react-dom";
import { Mainblock } from "./main-block";
import { Sideinfo } from "./sideinfo";



const App = () => {
    return (
        <div>
            <div id="homepage">

                <div>

                <Sideinfo />
                </div>
               <div>

               <Mainblock />
               </div>
              
            </div>
           
            
             
        </div>
       
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));