import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,

} from "react-google-maps";




function Map() {

  return (
      <>
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 30.044420, lng: 31.235712 }}/>
  
        </>
  );
}



const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapApp() {
    return (
      <div style={{ height: "50vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBstJi5BTZ-f01B7T0qLaRF23-T0nqZijk`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }