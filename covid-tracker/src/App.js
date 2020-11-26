import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { data_global, data_indo, data_provinsi } from './component'

const App = () => {
  return(
    <Router>
      <div>
        <h1>
          Covid-19 Tracker
        </h1>
        <nav>
          <table>
            <ul>
              <li>
                <Link to="/data_global">
                  Data Global
                </Link>
              </li>
              <li>
                <Link to="/data_indo">
                  Data Indonesia
                </Link>
              </li>
              <li>
                <Link to="/data_provinsi">
                  Data Provinsi
                </Link>
              </li>
            </ul>
          </table>
        </nav>
      </div>
      <Switch>
        <Route path="/data_global">
          
        </Route>
        <Route path="/data_indo">

        </Route>
        <Route path="/data_provinsi">

        </Route>
      </Switch>
    </Router>
  )
}

export default App;
