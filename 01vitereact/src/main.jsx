import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h2>Custom App</h2>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'click me to visit google'
// }
const anotherUser = "Chai aur Code"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target : '_blank'},
    'click me to visit google',
    anotherUser
) 



const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
   //MyApp() afterall myapp is a func.
    // <MyApp />
    // ReactElement
    //anotherElement //--> converts into object by babel transpiler
    // <App/>
    reactElement  
)
