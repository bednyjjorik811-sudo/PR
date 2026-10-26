import './App.css'
import hermioneImg from './assets/hermione.jpg'
import dracoImg from './assets/draco.jpg'

const characters = [
  {
    name: 'Hermione Granger',
    image: hermioneImg,
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
  },
  {
    name: 'Draco Malfoy',
    image: dracoImg,
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandCore: 'unicorn tail-hair',
    alive: 'yes',
  },
  {
    name: 'Hermione Granger',
    image: hermioneImg,
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
  },
]

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="title">Harry Potter</h1>
          <p className="subtitle">
            View all characters from the Harry Potter universe
          </p>
          <form className="filters">
            <label className="field">
              <span className="field-label">Name</span>
              <input
                className="field-control"
                type="text"
                placeholder="Hermione"
              />
            </label>
            <label className="field">
              <span className="field-label">School</span>
              <select
                className="field-control field-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
              </select>
            </label>
          </form>
        </div>
      </header>
      <main className="container">
        <ul className="cards">
          {characters.map((character, index) => (
            <li className="card" key={index}>
              <img className="card-img" src={character.image} alt="" />
              <div className="card-body">
                <h2 className="card-name">{character.name}</h2>
                <p className="card-info">Actor: {character.actor}</p>
                <p className="card-info">Gender: {character.gender}</p>
                <p className="card-info">House: {character.house}</p>
                <p className="card-info">Wand core: {character.wandCore}</p>
                <p className="card-info">Alive: {character.alive}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
