// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map () {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 34.118271, lng: -118.300400}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap
