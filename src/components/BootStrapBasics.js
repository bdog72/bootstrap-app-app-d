import React, { Component } from 'react'

export default class BootStrapBasics extends Component {
  render () {
    const butt = {
      margin: '10px'
    }
    return (
      <div className='container'>
        <h1>BootStrap Basics</h1>
        <button style={butt} className='btn btn-success btn-xs'>Click Me</button>
        <button style={butt} className='btn btn-success btn-xs active'>Click Me</button>
        <button style={butt} className='btn btn-success btn-xs disabled'>Click Me</button>
        <a href='https://www.getbootstrap.com' className='btn btn-info btn-lg'>Bootstrap Docs</a>
        <div style={butt} className='jumbotron'>
          <h1>This is a Jumbotron</h1>
          <p>gagggshshhsdfkfiiriuyhcbbcjffkfllfllfl</p>
          <button className='btn btn-success btn-lg'>Hello There</button>
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input type='email' className='form-control' id='exampleInputEmail1' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputFile'>File input</label>
            <input type='file' id='exampleInputFile' />
            <p className='help-block'>Example block-level help text here.</p>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' /> Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
        <form className='form-inline'>
          <div className='form-group'>
            <label htmlFor='exampleInputName2'>Name</label>
            <input type='text' className='form-control' id='exampleInputName2' placeholder='Jane Doe' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail2'>Email</label>
            <input type='email' className='form-control' id='exampleInputEmail2' placeholder='jane.doe@example.com' />
          </div>
          <button type='submit' className='btn btn-default'>Send invitation</button>
        </form>
      </div>
    )
  }
}
