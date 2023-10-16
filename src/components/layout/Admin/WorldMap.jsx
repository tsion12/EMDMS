import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Features from "./features.json";

const WorldMap = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ }}>
      <Geographies geography={Features}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#ECEFF1"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
