import React from 'react';

const StarWars = props => {
    return(
        props.chars.map(char => {
            return(
                <div className='char-container'>
                    <p>Name: {char.name}</p>
                    <p>Height: {char.height}</p>
                    <p>Mass: {char.mass}</p>
                    <p>Hair Color: {char.hair_color}</p>
                    <p>Skin Color: {char.skin_color}</p>
                    <p>Eye Color: {char.eye_color}</p>
                    <p>Birth Year: {char.birth_year}</p>
                    <p>Gender: {char.gender}</p>
                    <p>Homeworld: {char.homeworld}</p>
                    <ul>Films:
                        {char.films.map(film => <li>{film}</li>)}   
                    </ul>
                    <ul>Species:
                        {char.species.map(species => <li>{species}</li>)}
                    </ul>
                    <ul>Starships:
                        {char.starships.map(ship => <li>{ship}</li>)}
                    </ul>
                    <p>Created: {char.created}</p>
                    <p>Edited: {char.edited}</p>
                    <p>URL: {char.url}</p>
                </div>
            );
        })
    );
}

export default StarWars;