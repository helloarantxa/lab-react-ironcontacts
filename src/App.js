import contacts from "./contacts.json"
import { useState } from "react";
import './App.css';

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

const addRandom= ()=>{
let remaining =contacts.filter((contact)=>{
  return !contactList.includes(contact)
})
let addContact = remaining[Math.floor(Math.random()*remaining.length)];
setContactList([...contactList, addContact]);

};

const sortPopularity = () =>{
  let sortedByPopularity = [...contactList].sort((a, b) => b.popularity - a.popularity );
  setContactList(sortedByPopularity);
};

const deleteContact = (id) => {
  const updatedContactList = contactList.filter ((contact)=> contact.id !==id)
  setContactList(updatedContactList);
};

const sortName = () =>{
  let sortedByName = [...contactList].sort((a, b) => a.name.localeCompare(b.name) );
  setContactList(sortedByName);
};

  return (
    <div className="App">
    <h1>IronContacts</h1>

    <div><button onClick={addRandom}>add random contact</button>
    <button onClick={sortPopularity}>Sort by Popularity</button>
    <button onClick={sortName}>Sort by Name</button></div>
      
    <br/>
     <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {contactList.map((contact)=>{
          return (
            <tr>
              <td>
                <img src= {contact.pictureUrl} alt={contact.name}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <span>🏆</span> : <span>😭</span>}</td>
              <td>{contact.wonEmmy ? <span>🏆</span> : <span>😭</span>}</td>
              <td>
                <button onClick={()=> deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
     </table>
     
    </div>
  );
}

export default App;
