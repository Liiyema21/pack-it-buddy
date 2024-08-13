import React from 'react'

const LandingPage = () => {
  return (
    <div>   
    <main>
      <div className=""
      name='map'>
      <div 
      name="map__section" 
      className="w-full flex flex-col-1 border-2 border-gray-400 rounded-xl py-4 px-2"
      >
    <iframe
    className="mt-20"
    width="750%" 
    height="400px" 
    scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed
    ">
      
    </iframe>
  </div>
        </div>

        <div class=" bg-gray-200 rounded-lg  md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <div
        className="justify-items-center mx-auto "
         name="container"
        >
            <div class="form" className="">
                <input 
                className="input-location w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent
                " type="text" placeholder="Source Location" id="source"></input>
            </div>

            <div class="form">
            <input 
                className="input-location w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent
                " type="text" placeholder="Destination" id="destination"></input>

            </div>
            <div>
            <button  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-[#131a4b] "
          onclick="calcRoute()" name="ride-button">Get Direction</button>
            </div>
            <div>
            <button className= "w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-amber-400 "
          name="ride-button btn"><a href="Form.jsx">Get Quote</a></button>
            </div>

        </div>



    </div>
</main>
</div>
  )
}

export default LandingPage