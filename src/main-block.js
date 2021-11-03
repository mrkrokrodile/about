import React from "react";
import photopixel from './img/photopixel.png';


export const Mainblock  = () => {
    return (

    
    <div id="main-block">
    <div className="nes-container is-rounded">

        <div className="containers presentation">
             <div className="nes-container with-title is-centered">
             <h2 className="title">Présentation</h2>
                  
       <section className="message -right">
     
        <div className="nes-balloon from-right">
          <p id="textpresent">Je suis un développeur web, j'ai
             pour objectif de devenir full
             stack, et je suis en recherche de
             stage.
        </p>
        </div>
        
        <div id="pixelbox">
            <img id="photopixel" src={photopixel}></img>
        </div>
        
        
        
      </section>

                  
             </div> 
        </div>

        <div className="containers">
             <div className="nes-container is-rounded with-title is-centered">
                 <h2 className="title">Connaissances</h2>

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

                 <progress className="nes-progress" value="20" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/48/000000/figma--v2.png"/>

                 <progress className="nes-progress" value="75" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/48/000000/adobe-illustrator--v2.png"/>

                 <progress className="nes-progress" value="60" max="100"></progress>
                 </div>

                 <div className="skills">
                 <img className="logo" src="https://img.icons8.com/color/48/000000/great-britain.png"/>

                 <progress className="nes-progress" value="80" max="100"></progress>
                 </div>
                 
             </div> 
        </div>

        <div className="containers">
             <div className="nes-container with-title is-centered">
                 <h2 className="title">EXPERIENCE PROFESSIONNELLE</h2>
                 
            <ul>
                <li className="textside">
                 <h2 className="titre-side">Stage</h2>
                 <h3 className="textside">03/2021 - 05/2021</h3>
                 <p className="textside">Création d’une application en PHP de gestion de document
                    numérisés pour le département d’Ille et Vilaine, avec mise en
                    place de recherche par OCR grâce à l'API tesseract.</p>
                </li>

                <li className="textside">
                <h2 className="titre-side">CDD</h2>
                 <h3 className="textside">11/2018 - 02/2019</h3>
                 <p className="textside">Assistant gestion des stocks à CLUBELETRONICS à DINARD.</p>
                </li>


                <li className="textside">
                <h2 className="titre-side">Interim</h2>
                 <h3 className="textside">Opérateur</h3>
                 <ul className="textside">
                     <li className="textside">10/2018 - 12/2018 PSA</li>
                     <li className="textside"> 09/2018 CANON BRETAGNE</li>
                     <li className="textside">05/2018 - 07/2018 SANDEM</li>
                     <li className="textside">09/2017 DELTA DORE</li>                    
                 </ul>
                </li>
            </ul>
             </div> 
        </div>

        <div className="containers">
             <div className="nes-container with-title is-centered">
                 <h2 className="title">Formations</h2>
                
            <ul>
                <li className="textside"> 
                <h2 className="titre-side">Développeur web et web mobiles</h2>
                 <p className="titre-side">2020- 2021 Institut Marie Thérèse Solacroup</p>
                 </li>

                 <li className="textside"> 
                <h2 className="titre-side">Développeur d'application hybride</h2>
                 <p className="titre-side">2019 Buroscope à CESSON</p>
                 </li>

                 <li className="textside"> 
                <h2 className="titre-side">BTS SNEC système numérique: électroniques et communications</h2>
                 <p className="titre-side">2014-2016 lycée Alfred Kastler</p>
                 </li>

                
            </ul>
             </div> 
        </div>
    </div>
</div>
)
}