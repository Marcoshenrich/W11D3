import ReactSlider from "react-slider";
import "./Hygrometer.css";
import ClimateProvider, { useClimate } from '../../context/ClimateContext.js'


function Hygrometer() {
  const {humidity, setHumidity} = useClimate()
  const slideHandler = (e) => {
    setHumidity(e)
  }
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={slideHandler}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;