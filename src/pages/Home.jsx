import react from "react";
import { charmeleon, mewtwo, jolteon, squirtle, umbreon } from '../images';
function Home(params) {
  return (
    <div className="content">
      <h1>pokedex</h1>

      <div className="banner-1">
        <div className="title-banner-1">Since of Pokémon</div>
        <div className="banner-1-desc">
          Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996,
          and is centered on fictional creatures called "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and train Pokémon to battle other Pokémon for sport. All media works within the franchise are set in the Pokémon
          universe. The English slogan for the franchise is "Gotta Catch ‘Em All!". There are currently 913 Pokémon species.
        </div>
      </div>

      <div className="banner-2">
        <div className="title-banner-2">
          <div className="card-pokemon-home">
            <div className='img'>
              <img src={charmeleon} alt="" />
            </div>
            <div className="desc">
              <h2>charmeleon</h2>
            </div>
          </div>
          <div className="card-pokemon-home">
            <div className='img'>
              <img src={mewtwo} alt="" />
            </div>
            <div className="desc">
              <h2>charmeleon</h2>
            </div>
          </div>
          <div className="card-pokemon-home">
            <div className='img'>
              <img src={jolteon} alt="" />
            </div>
            <div className="desc">
              <h2>charmeleon</h2>
            </div>
          </div>
          <div className="card-pokemon-home">
            <div className='img'>
              <img src={squirtle} alt="" />
            </div>
            <div className="desc">
              <h2>squirtle</h2>
            </div>
          </div>
          <div className="card-pokemon-home">
            <div className='img'>
              <img src={umbreon} alt="" />
            </div>
            <div className="desc">
              <h2>umbreon</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-3">

      </div>
    </div>
  );
}
export default Home;
