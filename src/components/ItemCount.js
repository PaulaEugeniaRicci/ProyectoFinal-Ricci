import { useState } from 'react';

const ItemCount = ({ stock }) => {

  const styles = {
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-24 p-0.5",
  }

  const [counter, setCounter] = useState(1)

  const addCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }
  
  const minusCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="mt-8">
      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-row">
          <div className="flex">
            <span onClick={minusCounter} className={"border-r-0" + (styles.symbol)}>
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 10H15.8327" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              </svg>
            </span>
            <input id="counter" aria-label="input" className={styles.counter} type="text" value={counter} onChange={(e) => e.target.value} />
            <span onClick={addCounter} className={"border-l-0" + (styles.symbol)}>
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.1665V15.8332" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ItemCount;