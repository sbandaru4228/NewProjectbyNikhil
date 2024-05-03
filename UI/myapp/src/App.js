// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
// import Sample from './sample';
// import Counter from './component/Counter';
// import CounterObject from './component/CounterObject';
// import ConditionalRendering from './component/ConditionalRendering';
// import Car from './component/Car';
// import Usestate from './component/Usestate';
// import Newcolor from './component/Newcolor';
// import BookLists from './component/BookLists';
 import Registration from './component/FormAndEventHandling/Registration';
// import Registration1 from './component/FormAndEventHandling/Registration1';
// import NewRegistration from './component/FormAndEventHandling/NewRegistration';
import RegistrationAPIintegration from './component/FormAndEventHandling/RegistrationAPIintegration';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// const employee={
//   firstN:"Satheesh",
//   LastN:"Muthyam",
//   Age:28,
//   Salary:10000000,
//   address:
//   {
//   city:"Hyd",
//   state:"TS",
//   country:"IND"
//   }
// }
function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      {/* <Registration1/> */}
      <RegistrationAPIintegration/>
 {/* <ConditionalRendering/>
      {/* <Counter/>
      <CounterObject/> */}
      {/* <Car carName="Mustang"/>
      <Greet firstName="satheeh" LastName="Muthyam1" /> 
      <Greet firstName="sandeep" LastName="Muthyam2" />
      <Greet firstName="Gopaiah" LastName="Muthyam3" />
      <Greet firstName="Shobha" LastName="Muthyam4" />
      <Sample food="chiken" data={employee}></Sample>
      <Usestate />
      <Newcolor/>
      <BookLists></BookLists>  */}
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/greetclass" element={<GreetClass />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/greet" element={<Greet />} /> */}

      </Routes>
    </Router>
    </div>
  );
}
export default App;
