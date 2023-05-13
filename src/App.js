
import './App.css';
import Home from './pages/Home';


fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
 response = response.json()
 response.then((result) => {
  console.log(result)
 })
})

function App() {
  return (
     <div>
      <Home/>
     </div> 
  
      
    
  );
}

export default App;
