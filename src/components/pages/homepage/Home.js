import React from 'react';
import Hero from '../../Hero';
import { GoogleMap, useLoadScript, InfoWindow } from "react-google-map";
import { homeObjOne, homeObjThree,
    homeObjTwo, homeObjFour} from './Data';
// import WrappedMap from '../../Map/GoogleMap'


// function Map () {
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: 34.118271, lng: -118.300400}}
//         />
//     );
// }
{/* <WrappedMap googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key={process.env.REACT_APP_GOOGLE_KEY}`} loadingElement={<div style={{height: '100%' }} />}
containerElement={<div style={{height: '100%' }} />}
mapElement={<div style={{height: '100%' }} />}
/> */}
// defaultZoom={10}
// defaultCenter={{ lat: 34.118271, lng: -118.300400}}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function Home() {
    const libraries = ['places'];
    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    };
    const center = {
        lat: 34.118271,
        lng: -118.300400
    }
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApi: process.env.REACT_APP_GOOGLE_KEY,
        libraries,
    });

    if(loadError) return 'Error loading maps';
    if(!isLoaded) return 'Loading Maps'
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
        <Hero {...homeObjTwo}/>
        <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            >

        </GoogleMap>
        </div>
        {/* <Pricing /> */}
        <Hero {...homeObjFour} />
        </>
    )
}

export default Home
