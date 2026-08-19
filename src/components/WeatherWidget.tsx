const WeatherWidget = () => {

const isWarmer = false; // This is a placeholder. You can replace it with actual logic to determine if it's warmer or colder.

const weatherWidgetStyle =  isWarmer ? "p-4 text-center rounded shadow-md bg-yellow-200 " : "p-4 text-center rounded shadow-md bg-blue-200"

  return (
    <div className={` ${weatherWidgetStyle} `}>
      <h2  className="font-bold font-sans text-3xl">Location</h2>
      <p className="text-lg"><span className="font-semibold">Sunny</span>, <span>75°F</span></p>
    </div>
  );
};

export default WeatherWidget;