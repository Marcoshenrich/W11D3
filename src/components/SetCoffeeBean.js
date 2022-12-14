import {useCoffeeContext} from '../context/CoffeeContext.js'

const SetCoffeeBean = ({ coffeeBeans }) => {
  // console.log(coffeeBean)
  const {coffeeBean,setCoffeeBeanId} = useCoffeeContext()

  const coffeeHandler =(e) => {
    e.preventDefault();
    e.stopPropagation();
    setCoffeeBeanId(e.target.value)
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select value = {coffeeBean.id}
        name="coffee-bean"
        onChange={coffeeHandler}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;