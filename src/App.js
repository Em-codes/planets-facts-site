import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewPlanetDetails from "./ViewPlanetDetails";
import Home from "./Home";
import Navbar from './components/Navbar'

function App() {

  return (
    
    <Router>
      <div className="">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/planets/:id">
            <ViewPlanetDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route
//               exact
//               path="/view-contact-details/:id"
//               component={ViewUserDetails}
//             />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;