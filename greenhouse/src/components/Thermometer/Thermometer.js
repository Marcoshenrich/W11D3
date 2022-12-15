import ReactSlider from "react-slider";
import './Thermometer.css';
import ClimateProvider, { useClimate } from '../../context/ClimateContext.js'


function Thermometer() {
  const {temperature, setTemperature} = useClimate()
  console.log(temperature);
  const slideHandler =(e) =>{
    // e.preventDefault();
    setTemperature(e.target)
  }
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {"x"}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={slideHandler}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;