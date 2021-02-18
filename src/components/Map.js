import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker";
import LocationInfo from "./LocationInfo";

function Map({ eventData, center, zoom }) {
    const key=process.env.REACT_APP_MAP_API;
    const [locInfo, setLocInfo] = useState(null);
    const markers = eventData.map(e => {
        if(e.categories[0].id === 8){
            return  <LocationMarker 
            lat={e.geometries[0].coordinates[1]} 
            lng={e.geometries[0].coordinates[0]}
            onClick={() => setLocInfo({ id: e.id, title: e.title})} />
        } 
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            defaultCenter={center}
            defaultZoom={zoom} >

           {markers}
            </GoogleMapReact>
           {locInfo && <LocationInfo info={locInfo} />} 
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;