// import axios from "axios";
// import React, { useEffect, useState } from "react";


// export default  function App() {

  // const [countries, setCountries] = useState([]);

  // Fetch api ile bağlanma
  
//  useEffect(() => {
//    fetch("https://restcountries.com/v2/all")
//    .then(response => response.json())
//    .then(response => setCountries(response));
//    .catch(error => console.log({error}));
//  }, []);




// Axios ile bağlanma (npm i axios)

//  useEffect(() => {
//    axios.get('https://restcountries.com/v2/all')
//    .then(response => setCountries(response.data));
//  }, []);

//  return (
//    <div className="App">
//       <h1>Hello Batuhan</h1>

//       {countries.map(country => {
//         return (
//           <div key={country.name}>
//             <h2>{country.name}</h2>
//             <h4>{country.capital}</h4>
//             <p>
//               <img src={country.flag} alt={country.name} style={{width: "100px"}} />
//             </p>
//           </div>
//         );
//       })}
//      </div>
//    );
//  }





import { useEffect, useState } from "react";
import React from "react";

function App() {

  const [users, setUsers] = useState(false)


  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (res.ok && res.status === 200) {
        return res.json()
      }
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err))

  }, []);

  return (
    <ul>
      {users && users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}


export default App;









