import React, { Component } from 'react'

export default class NavBars extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a href='#' className='navbar-brand'>Bdoggies</a>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
              <div>
                <ul className='nav navbar-nav navbar-right'>
                  <li><a href='#'>Sign up</a></li>
                  <li><a href='#'>Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
