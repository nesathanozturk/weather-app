function Header({ cities, setCities, getData }) {
  return (
    <header className="w-full flex flex-col justify-center items-center text-white font-poppins">
      <h1 className="text-5xl tracking-wider mt-4 my-2 max-sm:text-4xl">
        Weather App
      </h1>
      <input
        type="text"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        placeholder="Enter Your Location"
        className="w-72 p-1.5 my-2 bg-[#1da1f2] rounded-md placeholder:text-gray-200 placeholder:tracking-wide hover:bg-[#1da1f2]/90 focus:outline-none max-sm:w-64 max-sm:p-1 max-sm:text-sm"
      />
      <button
        onClick={getData}
        className="w-32 p-1.5 m-2 bg-[#1da1f2] text-md rounded-lg hover:bg-[#1da1f2]/90 focus:outline-none max-sm:p-1 max-sm:text-sm"
      >
        Get Weather
      </button>
    </header>
  );
}

export default Header;
