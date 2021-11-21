import './MyComponent.css';

let myStyle = {
    "color":"white",
    "background-color":"dodgerblue",
    "padding": "10px",
    "font-family":"arial",
}

let mySuperStyle = {
    "color": "yellow",
    "font-size" : '16px',
    'font-weight' : 'bold',
    'border': '1px solid yellow',
    'background-color':'black',
    'padding':'5px',
    'border-radius':'8px',
    'cursor':'pointer',
    'margin':'10px'
}

const MyComponent = () => {
    return (
        <div>
            {/*<h1 style={myStyle}>This is a header</h1>*/}
            <h1 className={'newStyle'}>This is a header</h1>
            <p>This is a paragraph</p>
            <a href="#">This is a link</a>
            <h3>This is a form</h3>
            <form>
                <input type="text"/>
                <button style={mySuperStyle}>Submit</button>
            </form>
            <img src={'https://reactjs.org/logo-og.png'} alt={'react-img'}/>
            <ul>
                <h3>This is a list:</h3>
                <li>Thing one</li>
                <li>Thing two</li>
                <li>Thing three</li>
            </ul>
        </div>
    )
}
export default MyComponent;
