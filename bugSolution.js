```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [someOtherState, setSomeOtherState] = useState(false);

  useEffect(() => {
    // Correct condition with all relevant dependencies
    if (count > 0 && someOtherState) {
      console.log('Count is greater than 0 and someOtherState is true');
    }
  }, [count, someOtherState]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeOtherState(!someOtherState)}>Toggle</button>
    </div>
  );
}
```