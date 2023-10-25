// import './App.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ListAssignment from './components/ListAssignment';
// import GradeAssignment from './components/GradeAssignment';
// import AddAssignment from './components/AddAssignment'; 
// import EditAssignment from './components/EditAssignment'; 

// function App() {
//   return (
//     <div className="App">
//       <h2>Gradebook</h2>
//       <BrowserRouter>
//         <div>
//           <Switch>
//             <Route exact path="/" component={ListAssignment} />
//             <Route path="/addAssignment" component={AddAssignment} /> 
//             <Route path="/editAssignment/:id" component={EditAssignment} /> 
//             <Route path="/gradeAssignment" component={GradeAssignment} />
//             <Route render={() => <h1>Page not found</h1>} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import Login from './components/Login';

function App() {

    return (
      <div className="App">
        <Login />
      </div>
    )
}
export default App;