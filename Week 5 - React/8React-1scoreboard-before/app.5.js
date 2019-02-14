const Header=()=>{
    return(
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Player 1</span>
        </header>
        )
}

const Player=()=>{
    return(
        <div className="player">
        <span className="player-name">Warren</span>
        <Counter/>  {/* calls the counter function, so is a function in a function (Composition)*/}
        </div>
        )
    }

const Counter=()=>{
    return(
        <div className="counter">
        <button className="counter-action"> - </button>
        <span className="counter-score">10</span>
        <button className="counter-action"> + </button>
        </div>
        )   
    }

    const App=()=>{
        return(
            <div className="scoreboard">
            <Header/>
            {/* Players list */}
            <Player/>
            </div>
        )
    }


    ReactDOM.render(
        <App/>,  //self enclosed tag used to call the function
        document.getElementById('root')
    );
    

    //components start with a capital letter, regular functions dont.