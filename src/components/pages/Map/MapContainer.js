import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '80%',
  position: 'relative',

};
// const image

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}]
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
        <div style={{width: '200px', height: '200px', }}>
        <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: 47.49855629475769, lng: -122.14184416996333
        }}>
            {this.displayMarkers()}
        </Map>
        </div>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD22WSZ234tvyetAoFaSTVw3aE8g5lHVGM'
})(MapContainer);
