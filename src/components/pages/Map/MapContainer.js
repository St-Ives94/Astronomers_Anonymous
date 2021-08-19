import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import Geocode from "react-geocode";

// const mapStyles = {
//   width: '100%',
//   height: '100%',
//   position: 'relative',

// };
// const image

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          stores: [{latitude: 34.391520, longitude: -118.080950},
                  {latitude: 34.114540, longitude: -118.284637},
                  {latitude: 34.789680, longitude: -96.683130},
                  {latitude: 32.867409, longitude: -116.418747},
                  {latitude: 34.086106, longitude: -117.312651},
                  {latitude: 34.225437, longitude: -118.057232},
                  {latitude: 34.118509, longitude: -118.300476},
                  {latitude: 38.726799, longitude: -120.868048},
                  {latitude: 35.699485, longitude: -111.666170},
                  {latitude: 32.358426, longitude: -111.700619}
                ]
        }
      }

      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         icon={{url: '/images/telescope.svg',
        scaledSize: new window.google.maps.Size(30,30),
        origin: new window.google.maps.Point(0,0),
        anchor: new window.google.maps.Point(15, 15),
      }}

         />
        })
      }
  render() {
    return (
        <div className="container">
          <div className='map-container'>
          <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{
            lat: 34.114540, lng: -118.284637
          }}>
              {this.displayMarkers()}
          </Map>
          </div>
        </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
