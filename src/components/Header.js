function Header({ cities, setCities }) {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <h1>Weather App</h1>
      <input
        type="text"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
      />
      <button>Get Result</button>
    </header>
  );
}

export default Header;
