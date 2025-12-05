// ... (previous code)
const [noRepeats, setNoRepeats] = useState(false);
const [lastResult, setLastResult] = useState(null);

const spin = async () => {
  let result;
  do {
    result = weightedRandom(wheel.segments);
  } while (noRepeats && result === lastResult);
  setLastResult(result);
  setHistory([...history, result]);
  // Play sound
  return result;
};

const toggleNoRepeats = () => setNoRepeats(!noRepeats);

return { wheel, spin, customize, history, noRepeats, toggleNoRepeats };