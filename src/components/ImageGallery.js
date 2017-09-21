import React, { Component } from 'react'
import ImageGalleryNavBar from './ImageGalleryNavBar'
import ImageGalleryGrid from './ImageGalleryGrid'
export default class ImageGallery extends Component {
  render () {
    return (
      <div>
        <div>
          <ImageGalleryNavBar />
        </div>
        <div className='container'>
          <div className='jumbotron'>
            <h1><span className='glyphicon glyphicon-camera' aria-hidden='true' /> The Image Gallery</h1>
            <p>A Bunch Of Cool Images</p>
          </div>
        </div>
        <div>
          <ImageGalleryGrid />
        </div>
      </div>
    )
  }
}
