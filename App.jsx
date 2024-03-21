import {useState} from 'react';
import PlayingWithArrays from './PlayingWithArrays';


const App = ()=>{
    const [message, setMessage] = useState("hello");
    const [user, setUser] = useState({
        name: 'mu',
        age: 18,
        class: "CWEB602",
        location: "Saskatoon",
        hobby:["aa","bb","cc"]
    });

    const userHandle = ()=>{
        setUser({
            name: 'mu1',
            age: 20,
            class: "CWEB602",
            location: "Saskatoon",
            hobby:["aa","bb","cc"] 
        })
    }
    const messageHandle = ()=>{
        setMessage(prompt("add a new message: "));
    }
    return (
        <>
        <p>{message}</p>
        <input type="button" value="change" onClick={messageHandle}/>
        <p>{user.name} who's age is {user.age} is in {user.location} now, try to learn {user.class}</p>
        <input type="button" value="change user" onClick={userHandle}/>
        <PlayingWithArrays />
        </>
    )
}

export default App;