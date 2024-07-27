import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Button from "./components/ui/Button";
import ColorBox from "./components/ColorBox";
import ExpebsiceFunction from "./components/ExpebsiceFunction";

function App() {

  const [counter, setCounter] = useState<number>(0);
  const [backgroundColor,setbackgroundColor] = useState('teal');
  const onIncreseCounter = useCallback(()=>{
    setCounter((prev) => prev + 1)
  },[]); // You Should Write Dependency List (useCallback) => save momoized function in memory [counter] => re-render when counter value change
  const ToggleColor = useCallback(() => {
    setbackgroundColor(backgroundColor == 'teal' ? 'purple':'teal')
  },[])

  // To Solve re-render Component Based On Props Change in object use (useMemo hook ) =>  is important of Optimization 
  const memoizedColorObject = useMemo(()=>{
    return {backgroundColor,color:'white'}
  },[])

  return (
    <>
      <main className="space-y-6 flex flex-col justify-center items-center">
        <h1 className="font-semibold">performance and optimization</h1>
        <div>
          <h3>Counter : {counter}</h3>
          <div className="flex justify-center mb-10">
            {/**  onClick Function Every time this function re-creation when parent component re-rendered use callback hook to solve this problem*/}
            <Button onClick={onIncreseCounter}>
              Increase Counter App
            </Button>
          </div>
        </div>
        <ColorBox boxStyleObj={memoizedColorObject}/> {/** when prop as only value is no problem to prevent re-render by using memo function, the problem will start when prop is object because evey time parent component re-rendering ,the object props will new created in memory as reference type  */}
        <Button onClick={ToggleColor}>Toggle Background</Button>
        {/*
        <Counter />
        <LoginForm />
      */}
      <ExpebsiceFunction/>
      </main>
    </>
  );
}

export default App;
