import React, { Component } from 'react'
import BootStrapBasics from './BootStrapBasics'
import NavBars from './NavBars'
import NavBar2 from './NavBar2'
import BootstrapGrid from './BootstrapGrid'
import ImageGallery from './ImageGallery'
import PurrfectMatch from './PurrfectMatch'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class BasicExample extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='container flex1'>
            <div>
              <ul className='list1'>
                <li><Link to='/'>Image Gallery</Link></li>
                <li><Link to='/bootstrapbasics'>BootStrapBasics</Link></li>
                <li><Link to='/navbars'>NavBar</Link></li>
                <li><Link to='/navbar2'>NavBar2</Link></li>
              </ul>
            </div>
            <div>
              <ul className='list1'>
                <li><Link to='/bootstrapgrid'>BootStrap Grid</Link></li>
                <li><Link to='/purrfectmatch'>Purrfect Match</Link></li>
              </ul>
            </div>
          </div>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/bootstrapbasics' component={BootStrap} />
          <Route path='/navbars' component={NavBar} />
          <Route path='/navbar2' component={NavBar1} />
          <Route path='/bootstrapgrid' component={Grid} />
          <Route path='/purrfectmatch' component={LandingPage} />
        </div>
      </Router>
    )
  }
}
const Home = () => (
  <div>
    <ImageGallery />
  </div>
)

const BootStrap = () => (
  <div>
    <BootStrapBasics />
  </div>
)

const NavBar = () => (
  <div>
    <NavBars />
  </div>
)

const NavBar1 = () => (
  <div>
    <NavBar2 />
  </div>
)

const Grid = () => (
  <div>
    <BootstrapGrid />
  </div>
)

const LandingPage = () => (
  <div>
    <PurrfectMatch />
  </div>
)
