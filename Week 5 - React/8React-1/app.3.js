const title = "My first react element!";
const desc  = "I just learnt how to create a React node and render it into DOM, POWERFUL STUFF!";
const myTitleId = "main-title";
const name = "Warren";

    const header = (
        <header>
        {/*this is a comment in JSX*/}
        <h1 id={ myTitleId }>{ name }'s 1st react element</h1>
        <p className="Main-desc">{ desc }</p>
        <input value={20*2-1}/>
    </header>
    );
    console.log(title);

    ReactDOM.render(
        header,
        document.getElementById('root')
    );
    

    /*react the class is called - className
    
    */