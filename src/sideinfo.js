import React from "react";
import photo from './img/photo.jpg';


export const Sideinfo = (props) => {

    const {user, loisirs, qualites, adresse} = props;

    return (
        <div id="side">

        <div id="myname">
             <h1 id="grand-titre"> {user.PRENOM} {user.NOM}</h1>
             <h2>{user.POSTE}</h2>
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
            {loisirs.map((l, i) => {
                return <li key={i} className="textside">{l}</li>
            })}
                
            </ul>
        </div>

        <div >
            <h2 className="titre-side">Soft Skills</h2>
            <ul>
            {qualites.map((l, i) => {
                return <li key={i} className="textside">{l}</li>
            })}
            </ul>
        </div>



        <div >
            <h2 className="titre-side">Coordonnée:</h2>
            <ul>  
                <li className="textside">{user.TEL}</li>
                <li className="textside">{user.EMAIL}</li>
                <li className="textside">{user.PERMIS}</li>
                <li className="textside">{adresse.NUM} {adresse.RUE} {adresse.CODE} {adresse.VILLE}</li>
            </ul>
        </div>
        

</div>
        
       

        </div>
    )
}