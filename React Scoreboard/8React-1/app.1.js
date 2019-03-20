const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'This is the title.'},
    'My first react element!'
);

const desc = React.createElement(
    'p',
    null,
    'I just learnt how to create a React node and render it into DOM, POWERFUL STUFF!'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);
    console.log(title);

    ReactDOM.render(
        header,
        document.getElementById('root')
    );
    
    /* ID must be there for css to be able to target it.
    Title must have a value or must be "Null"

    1 ReactDom.render will render the information from the HTML
    */