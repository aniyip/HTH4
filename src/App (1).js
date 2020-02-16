import React, { useState } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow  
} from "react-google-maps";
import {checkpoints} from "./stops.js";

function Map(){
  console.log(checkpoints);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null);

  return(
    <GoogleMap 
    defaultZoom={16}
    defaultCenter={{lat: 42.335548, lng: -71.168495}}
    >
      {checkpoints.map((stop) => (
          // {console.log(stop)}
          <div>
        <Marker 
          key={stop.NAME} 
          position={{
            lat: stop.coordinates[1],
            lng: stop.coordinates[0]
          }}
          onClick={() => {
            setSelectedCheckpoint(stop);
          }}
        ><div>Hello</div></Marker></div>
        ))}

      {selectedCheckpoint && (
        <InfoWindow
          position={{
            lat: selectedCheckpoint.coordinates[1],
            lng: selectedCheckpoint.coordinates[0]
          }}  
          onCloseClick={() => {
            setSelectedCheckpoint (null);
          }}
        >
          <div>
            <h2>{selectedCheckpoint.NAME}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {



  return ( 
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap 
        //googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=$AIzaSyBt2nSEVjo_QgzJKbhdjLyKmffjxziec_U&callback=initMap`} 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBt2nSEVjo_QgzJKbhdjLyKmffjxziec_U&callback=Map`} 
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    </div>
  );
}
