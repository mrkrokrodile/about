import React from "react";


export const Mainblock  = () => {
    return (

    
    <div id="main-block">
    <div className="nes-container is-rounded">
        <div className="containers">
             <div className="nes-container is-rounded with-title is-centered">
                 <p className="title">Connaissances</p>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>   

                 <progress className="nes-progress" value="60" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/officel/50/000000/php-logo.png"/>  

                 <progress className="nes-progress" value="50" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/96/000000/react-native.png"/>

                 <progress className="nes-progress" value="20" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/fluency/96/000000/node-js.png"/>

                 <progress className="nes-progress" value="20" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/ios/50/000000/wordpress--v5.png"/>

                 <progress class="nes-progress" value="20" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/48/000000/figma--v2.png"/>

                 <progress class="nes-progress" value="75" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/48/000000/adobe-illustrator--v2.png"/>

                 <progress className="nes-progress" value="60" max="100"></progress>
                 </div>
                 
             </div> 
        </div>

        <div className="containers">
             <div className="nes-container with-title is-centered">
                 <p className="title">Experiences</p>
                 <p>ya</p>
             </div> 
        </div>

        <div className="containers">
             <div className="nes-container with-title is-centered">
                 <p className="title">Formations</p>
                 <p>yo</p>
             </div> 
        </div>
    </div>
</div>
)
}