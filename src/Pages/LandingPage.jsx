import React, { useEffect } from 'react';

const LandingPage = () => {
  let map, directionsService, directionsRenderer;
  let sourceAutoComplete, destinationAutoComplete;

  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        if (window.google) {
          initMap();
        }
      };
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCKqk4I-ZPHLGueUz17Xhl-oCz0MZ2YVx0&libraries=places`);

    function initMap() {
      if (!window.google) {
        console.error('Google Maps JavaScript API not loaded.');
        return;
      }

      map = new window.google.maps.Map(document.getElementById('map__section'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13
      });

      window.google.maps.event.addListener(map, 'click', function (event) {
        this.setOptions({ scrollwheel: true });
      });

      directionsService = new window.google.maps.DirectionsService();
      directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true
      });

      const sourceInput = document.getElementById('source');
      const destinationInput = document.getElementById('destination');

      sourceAutoComplete = new window.google.maps.places.Autocomplete(sourceInput);
      destinationAutoComplete = new window.google.maps.places.Autocomplete(destinationInput);

      sourceAutoComplete.bindTo('bounds', map);
      destinationAutoComplete.bindTo('bounds', map);
    }
  }, []);

  const calcRoute = () => {
    const start = document.getElementById('source').value;
    const end = document.getElementById('destination').value;

    if (!directionsService || !directionsRenderer) {
      console.error('Directions service or renderer not initialized.');
      return;
    }

    const request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  };

  return (
    <div  className='px-4 py-20'>
      <main>
        <div name='map'>
          <div
            id="map__section"
            className="w-full flex flex-col-1 border-2 border-gray-400 rounded-xl py-4 px-2"
            style={{ height: '400px' }}
          ></div>
        </div>

        <div className="bg-gray-200 rounded-lg md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="justify-items-center mx-auto" name="container">
            <div className="form">
              <input
                className="input-location w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Source Location"
                id="source"
              />
            </div>

            <div className="form">
              <input
                className="input-location w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Destination"
                id="destination"
              />
            </div>

            <div>
              <button
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-[#131a4b]"
                onClick={calcRoute}
              >
                Get Direction
              </button>
            </div>

            <div>
              <button className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-amber-400">
                <a href="Form.jsx">Get Quote</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
