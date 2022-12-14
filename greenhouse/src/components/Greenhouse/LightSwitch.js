import './LightSwitch.css';
import {useTheme} from "../../context/ThemeContext.js"

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();
  const clickHandler =(e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // console.log(e.target)
    if(e.target.className === 'on' && themeName === 'night'){
      setThemeName('day')
    } else if (e.target.className === 'off' && themeName === 'day'){
      setThemeName('night')
    }
  }

  return (
    <div className="light-switch day">
      <div className="on" onClick={clickHandler}>DAY</div>
      <div className="off" onClick={clickHandler}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;