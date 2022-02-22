import "./App.css";
import Allcontacts from "./contacts.json";
import { useState } from "react";

const contacts = Allcontacts.slice(0, 20);
//console.log(contacts);
const randomContact =
  Allcontacts[Math.floor(Math.random() * Allcontacts.length)];
console.log(`This is randomContact = ${randomContact.name}`);

function App() {
  const [Contacts, setCount] = useState();
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    alt="profile"
                    style={{ height: "100px" }}
                  />
                </td>
                <td>{eachContact.name} </td>
                <td>{eachContact.popularity.toFixed(2)} </td>
                {eachContact.wonOscar ? (
                  <td>🏆</td>
                ) : (
                  <td>
                    <p></p>
                  </td>
                )}
                {eachContact.wonEmmy ? (
                  <td>🥇</td>
                ) : (
                  <td>
                    <p></p>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
