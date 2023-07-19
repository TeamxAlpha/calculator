



// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counter </h1>
//       <MyButton />
//       <MyButton1 />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }


// function MyButton1() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     if (count >= 0 ){
//     setCount(count - 1);
//   }
// }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }


import {useState} from 'react';

const MyButton = ( {label, onClick, disabled=false})=>
{

  console.log('Label of this button',label)
  return(
    <button onClick={onClick} disabled={disabled}>{label}</button>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((counter) => counter + 1);
    console.log(count)
  };

  const decrement = () => {
    if (count > 0) {
      setCount((counter) => counter- 1);
    }
  };

  const reset = ()=>{
    setCount(0);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <MyButton label={'Reset'} onClick={reset} />
      <MyButton label={'increment'} onClick={increment} />
      <MyButton label={'Decrement'} onClick={decrement} disabled= {count === 0} />
    </div>
  );
};

export default Counter;


