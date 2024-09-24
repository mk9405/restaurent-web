import "./style.css";

const Hero = () => {
  return (
    <div className="img">
      <div className="flex flex-col gap-10  px-28 py-32 max-sm:px-10 max-lg:px-16 max-lg:py-24 max-sm:py-20 ">
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-7xl font-medium max-sm:text-5xl">Crafting your</h3>
          <h3 className="text-7xl font-medium max-sm:text-5xl">Exceptional Dining</h3>
          <h3 className="text-7xl font-medium max-sm:text-5xl max-sm:w-full" id="span">
            Reservations
          </h3>
        </div>

        <div className="text-white font-normal">
          <p>
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table
          </p>
          <p>today and let us paint your culinary dreams into reality.</p>
        </div>

        <div className="bg-white max-w-[37rem] flex flex-row max-sm:flex-col max-sm:text-center gap-2 justify-center py-3 px-2 rounded-lg">
          <button
            className=" bg-white px-8 py-4 max-sm:w-full text-white text-2xl font-medium rounded-lg"
            id="btn1"
          >
            <div className="flex flex-row" id="text">
              Delivery
            </div>
          </button>

          <button
            className="bg-white px-8 py-4 text-white text-2xl font-medium rounded-lg"
            id="btn"
          >
            <div className="flex flex-row" id="text">
              <span className="flex flex-row">Pick</span>
              &nbsp;<span className="flex flex-row">Up</span>
            </div>
          </button>

          <button
            className="bg-white py-4 text-white text-2xl font-medium rounded-lg"
            id="btn"
          >
            <div className="flex flex-row px-2" id="text">
              <span className="flex flex-row">In</span>
              &nbsp;<span className="flex flex-row">Restaurant</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
