import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Data_global as Global, Data_indo as Indo, Data_provinsi as Provinsi } from "./halaman"
import { Container, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return(
    <center>
    <Container>
    <Router>
      <div>
        <h1 className = "tulisan2, mt-5">
          Covid-19 Tracker
        </h1>
        <nav>
          <table>
            <Button variant = "outline-secondary ml-3 mt-2">
              <Link to="/data_global">
                  Data Global
              </Link>
            </Button>
            <Button variant = "outline-secondary ml-1 mt-2">
              <Link to="/data_indo">
                  Data Indonesia
              </Link>
            </Button>
            <Button variant = "outline-secondary ml-1 mt-2">
              <Link to="/data_provinsi">
                  Data Provinsi
              </Link>
            </Button>
          </table>
        </nav>
      </div>
      <Switch>
        <Route path="/data_global">
          <Global/>
        </Route>
        <Route path="/data_indo">
          <Indo/>
        </Route>
        <Route path="/data_provinsi">
          <Provinsi/>
        </Route>
      </Switch>
    </Router>
    </Container>
    </center>
  )
}

export default App;