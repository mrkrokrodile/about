import React from "react";
import photo from './img/photo.jpg';

export const Sideinfo = () => {
    return (
        <div id="side">

        <div id="myname">
             <h1 id="grand-titre">Gaëtan Beurel</h1>
             <h2>Développeur web</h2>
        </div>

        <div className="container">
            <div id="cadrephoto">
                    <img id="photo" src={photo}></img>
            </div>
        </div>

<div className="nes-container">

        <div >
            <h2 className="titre-side">Loisirs</h2>
            <ul>
                <li className="textside">Jeux vidéos</li>
                <li className="textside">Jeux de société</li>
                <li className="textside">Marche a pieds</li>
            </ul>
        </div>

        <div >
            <h2 className="titre-side">Soft Skills</h2>
            <ul>
                <li className="textside">Minutieux</li>
                <li className="textside">Patient</li>
                <li className="textside">Flexible</li>
                <li className="textside">Créatif</li>
                <li className="textside">esprit créatif</li>
            </ul>
        </div>



        <div >
            <h2 className="titre-side">Coordonée:</h2>
            <ul>  
                <li className="textside">0786210716</li>
                <li className="textside">gaetan.beurel@gmail.com</li>
                <li className="textside">permis B et véhicule</li>
                <li className="textside">82 rue Jacque Cartier 35430 LA VILLE ES NONAIS</li>
            </ul>
        </div>
        

</div>
        
       

        </div>
    )
}