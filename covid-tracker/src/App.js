import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Data_global, Data_indo, Data_provinsi } from './halaman'

const App = () => {
  return(
    <Router>
      <div>
        <center>
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
        </center>
      </div>
      <Switch>
        <Route path="/data_global">
          <Data_global/>
        </Route>
        <Route path="/data_indo">
          <Data_indo/>
        </Route>
        <Route path="/data_provinsi">
          <Data_provinsi/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;