import React from "react";
import ReactDOM from "react-dom";


const App = () => {
    return (
        <div>
            <div id="homepage">
                <div id="side">

                      <h1 id="grand-titre">Gaëtan Beurel</h1>
                      <h2>Développeur web</h2>

               </div>
                <div id="main-block">
                    <div className="nes-container is-rounded">
                        <div className="containers">
                             <div class="nes-container with-title is-centered">
                                 <p class="title">Connaissances</p>
                                 <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                             </div> 
                        </div>
                    </div>
                </div>
              
            </div>
           
            
             
        </div>
       
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));