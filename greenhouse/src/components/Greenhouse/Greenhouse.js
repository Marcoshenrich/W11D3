import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext.js'

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme()




  return (
    <section>

      {( themeName === "day") && <img
        className='greenhouse-img'
        src={dayImage}
        alt='greenhouse'
      />}

      {( themeName === "night") && <img
        className='greenhouse-img'
        src={nightImage}
        alt='greenhouse'
      />}
    
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;