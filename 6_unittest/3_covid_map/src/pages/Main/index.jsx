import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";

const Main = () => {
  const [geo, setGeo] = useState();
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  console.log(geo);
  return (
    <div className="h-[calc(100vh-74px)] text-white bg-zinc-800 overflow-hidden flex flex-col justify-center items-center wrapper md:pt-20">
      <h1 className="px-6 pb-6">
        Detay Görüntüle:
        {geo?.properties?.name ? geo.properties.name : "(ülke seçin)"}
      </h1>

      <ComposableMap
        height={1000}
        projectionConfig={{ rotate: [-10, 0, 0], scale: 287 }}
      >
        <ZoomableGroup>
          <Graticule stroke="gray" strokeWidth={0.3} />
          <Sphere stroke="gray" strokeWidth={0.3} />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link to={`/detail?code=${geo.id}`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setGeo(geo)}
                    onMouseLeave={() => setGeo(null)}
                    style={{
                      default: {
                        fill: "#EEE",
                      },

                      hover: {
                        fill: "rgb(54 197 94)",
                      },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;
