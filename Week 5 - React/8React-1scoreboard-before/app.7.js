const players = [
    {name:"Warren", score:10},
    {name:"Ste", score:20},
    {name:"Bob", score:30},
    {name:"Keith", score:40}
]

const Header=(props)=>{
    return(
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players:{ props.totalPlayers }</span>
        </header>
        )
    }      

const Player=(props)=>{
    return(
        <div className="player">
        <span className="player-name">{ props.name }</span>
        <Counter score={ props.score }/>  {/* calls the counter function, so is a function in a function (Composition)*/}
        </div>
        )
    }

const Counter=(props)=>{
    return(
        <div className="counter">
        <button className="counter-action"> - </button>
        <span className="counter-score">{ props.score }</span>
        <button className="counter-action"> + </button>
        </div>
        )   
    }

    const App=(props)=>{
        return(
            <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length}/>
            {/* Players list */}
            
            {props.initialPlayers.map(player =>
                <Player 
                    name={player.name}
                    score ={player.score}
                    key={player.id.tostring()}
                    />
            )}
            </div>
        )
    }


    ReactDOM.render(
        <App initialPlayers={players}/>,  //self enclosed tag used to call the function
        document.getElementById('root')
    );
    

//Prop is read only( or immutable), the parent component owns and controls the porperty value!!! IMPORTANT!!!!!