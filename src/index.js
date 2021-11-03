import React from "react";
import ReactDOM from "react-dom";
import { Mainblock } from "./main-block";
import { Sideinfo } from "./sideinfo";
import data from '../data.json';



const App = () => {
    return (
        <div>
            <div id="homepage">

                <div>

                <Sideinfo adresse={data.ADRESSE}  user={data.USER} loisirs={data.LOISIRS} qualites={data.QUALITES}/>
                </div>
               <div>

               <Mainblock />
               </div>
              
            </div>
           
            
             
        </div>
       
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));