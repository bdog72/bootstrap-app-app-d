import React, { Component } from 'react'

export default class BootstrapGrid extends Component {
  render () {
    const style = {
      border: '2px solid black',
      background: 'red'
    }
    const style1 = {
      border: '1px solid black',
      background: 'yellow'
    }
    const style2 = {
      background: 'brown',
      color: 'white',
      border: '1px solid white'
    }

    return <div className='container'>
      <div className='row'>
        <div style={style} className='col-lg-6'>COL-LG-6</div>
        <div style={style} className='col-lg-6'>COL-LG-6</div>
      </div>
      <div className='row'>
        <div style={style} className='col-lg-2'>COL-LG-2</div>
        <div style={style} className='col-lg-8'>COL-LG-8</div>
        <div style={style} className='col-lg-2'>COL-LG-2</div>
      </div>
      <hr />
      <div className='row'>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
        <div style={style1} className='col-lg-1 col-md-2'>Col-lg-1</div>
      </div>
      <hr />
      <div className='row'>
        <div style={style1} className='col-lg-3 col-md-3 col-sm-6'>
          <div className='row'>
            <div style={style2} className='col-lg-6'>Bdog</div>
            <div style={style2} className='col-lg-6'>Bdog</div>
          </div>
        </div>
        <div style={style1} className='col-lg-3 col-md-3 col-sm-6'>Bdog</div>
        <div style={style1} className='col-lg-3 col-md-3 col-sm-6'>Bdog</div>
        <div style={style1} className='col-lg-3 col-md-3 col-sm-6'>Bdog</div>
      </div>
    </div>
  }
}
