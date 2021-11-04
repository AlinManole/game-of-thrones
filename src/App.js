import React from 'react'
import Character from './components/Character'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor() {
    console.log("constructor")
    super()
    this.state = {
      characters: [],
      favorites:[]
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  componentDidMount() {
    console.log("component did mount")
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => {
        this.setState({ characters: result })
      })
  }

  handleFavoriteClick(e){
    console.log("handle click")
  }

  render() {
    console.log("render")
    return (
      <div className="container col-12 overflow-hiden">
        <div className="row m-2 p-5">
        <h1>Game of thrones</h1>
        {this.state.characters.map((character , index ) => (
            <Character title={character.title} image={character.imageUrl} handleClick={this.handleFavoriteClick} name={character.fullName} />
        ))}
        </div>
      </div>
    )
  }
}

export default App