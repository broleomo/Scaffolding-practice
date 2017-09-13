import Section from './Section.js'



export default class Actor extends Section{
  render (){
    return (
      <li className="list-group-item" key={actor.id}>
      <ul>
      <li>
      <div>Name: {actor.name} </div>
      </li>
      <li>
      <div>Alias: {actor.also_known_as}</div>
      </li>
      <li>
      <div>Popularity: {actor.popularity}</div>
      </li>
      <li>
      <div>Birthday: {actor.birthday} </div>
      </li>

      <li>
      <div>Date of Death: {actor.deathday === null ? "Still Alive" :  actor.deathday } </div>
      </li>
      <li>
      <div>Gender: {actor.gender === 1 ? "Female" : "Male" }</div>
      </li>
      <p>Biography: {actor.biography}</p>
      </ul>
      </li>
    )
  }
}
