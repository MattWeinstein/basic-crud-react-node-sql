import { useState } from 'react';
import './App.css';

function App() {

const [name, setName]= useState('')
const [age, setAge]= useState(0)
const [country, setCountry]= useState('')
const [position, setPosition]= useState('')
const [wage, setWage]= useState(0)

const displayInfo = () => {
  console.log(name + age + country + position + wage)
}
  return (
    <div className="App">
      <div className='informationWrapper'>
        <label>Name</label>
        <input type='text' onChange={(event)=>{
          setName(event.target.value)
        }}>
        </input>
        <label>Age</label>
        <input type='number' onChange={(event)=>{
          setAge(event.target.value)
        }}>
        </input>
        <label>Country</label>
        <input type='text' onChange={(event)=>{
          setCountry(event.target.value)
        }}>
        </input>
        <label>Position</label>
        <input type='text' onChange={(event)=>{
          setPosition(event.target.value)
        }}></input>
        <label>Wage (year)</label>
        <input type='number' onChange={(event)=>{
          setWage(event.target.value)
        }}></input>
        <button onClick={displayInfo} >Add employee</button>
      </div>
    </div>
  );
}

export default App;
