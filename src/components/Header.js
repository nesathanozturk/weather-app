function Header({ cities, setCities }) {
  return (
    <header className="w-full flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl tracking-wider my-2 ">Weather App</h1>
      <input
        type="text"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        placeholder="Enter Your Location"
        className="w-72 p-1 my-2 bg-[#263159] rounded-xl cursor-pointer placeholder:text-gray-400 hover:bg-[#212b4c] focus:outline-none"
      />
      <button
        type="button"
        class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg w-32 text-sm p-2 m-2"
      >
        Get Result
      </button>
    </header>
  );
}

export default Header;
