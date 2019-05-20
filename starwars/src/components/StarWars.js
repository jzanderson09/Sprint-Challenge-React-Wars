import React from 'react';

import './StarWars.css';

const StarWars = props => {
    return(
        <div className="chars-container">
            {props.chars.map(char => {
                return(
                    <div className='char menu-toggle' onClick={props.toggleMenu}>
                        <p>Name: {char.name}</p>
                        <p>Height: {char.height}</p>
                        <p>Mass: {char.mass}</p>
                        <p>Hair Color: {char.hair_color}</p>
                        <p>Skin Color: {char.skin_color}</p>
                        <p>Eye Color: {char.eye_color}</p>
                        <p>Birth Year: {char.birth_year}</p>
                        <p>Gender: {char.gender}</p>
                        <p>Homeworld: <a href={char.homeworld}>{char.homeworld}</a></p>
                        <ul>Films:
                            {char.films.map(film => <a href={film}><li>{film}</li></a>)}   
                        </ul>
                        <ul>Species:
                            {char.species.map(species => <a href={species}><li>{species}</li></a>)}
                        </ul>
                        <ul>Starships:
                            {char.starships.map(ship => <a href={ship}><li>{ship}</li></a>)}
                        </ul>
                        <p>Created: {char.created}</p>
                        <p>Edited: {char.edited}</p>
                        <p>URL: <a href={char.url}>{char.url}</a></p>
                </div>
                );  
            })}
        </div>
    );   
}

export default StarWars;