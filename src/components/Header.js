function Header({ cities, setCities }) {
  return (
    <header className="w-full flex flex-col justify-center items-center text-white font-poppins">
      <h1 className="text-5xl tracking-wider my-2 ">Weather App</h1>
      <input
        type="text"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        placeholder="Enter Your Location"
        className="w-72 p-1 my-2 bg-[#2e4aae] rounded-xl cursor-pointer placeholder:text-gray-400 placeholder:ml-2 hover:bg-[#354b96] focus:outline-none"
      />
      <button
        type="button"
        class="w-32 p-2 m-2 bg-[#1da1f2] text-md rounded-lg hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50"
      >
        Get Result
      </button>
    </header>
  );
}

export default Header;
