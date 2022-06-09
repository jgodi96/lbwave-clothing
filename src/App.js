import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";
import {Routes,Route} from 'react-router-dom';

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
    <Route index element={<Home/>}/>
    <Route path = 'shop' element={<Shop/>}/>
    <Route path = 'sign-in' element={<SignIn/>}/>

    </Route>
  
    </Routes>
  );
}

export default App;
