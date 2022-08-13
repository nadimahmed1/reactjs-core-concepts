import logo from './logo.svg';
import './App.css';

const name = 'Nadim';
const singer = { name: 'Dr Mahfuz', job: 'singer' }

const singerStyle = {
  color: 'yellow'
}

function App() {
  return (
    <div className="App">
      <Person name="Nadim" nayika="mousumi"></Person>
      <Person name="Ahmed" nayika="Kuyel Mallik"></Person>
      <Person name="Shakil" nayika="sabnur"></Person>
      <h5>New component!! Yeaaa</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  // console.log(props)
  return (
    <div className="habib">
      <h3>Name: Habib Raj</h3>
      <p>profession: Singer</p>
    </div>
  )
}

export default App;
