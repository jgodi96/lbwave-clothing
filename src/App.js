import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import {Routes,Route} from 'react-router-dom'
function App() {
  

const Shop = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route path = 'home' element={<Home/>}/>
    <Route path = 'shop' element={<Shop/>}/>
    </Route>
  
    </Routes>
  );
}

export default App;
