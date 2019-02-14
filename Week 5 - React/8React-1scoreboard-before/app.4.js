const title = "My first react element!";
const desc  = "I just learnt how to create a React node and render it into DOM, POWERFUL STUFF!";
const myTitleId = "main-title";
const name = "Warren";

function Header () {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Player 1</span>
        </header>
    );
}

    ReactDOM.render(
        <Header/>,  //self enclosed tag used to call the function
        document.getElementById('root')
    );
    