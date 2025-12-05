// ... (previous code)
const [rotation, setRotation] = React.useState(0);
const [isSpinning, setIsSpinning] = React.useState(false);

const weightedRandom = (segments) => {
  const totalProb = segments.reduce((sum, seg) => sum + seg.prob, 0);
  let random = Math.random() * totalProb;
  for (let seg of segments) {
    random -= seg.prob;
    if (random <= 0) return seg;
  }
};

const handleSpin = () => {
  if (isSpinning) return;
  setIsSpinning(true);
  triggerHaptic('spin');
  const result = weightedRandom(wheel.segments);
  const targetAngle = (wheel.segments.indexOf(result) * (360 / wheel.segments.length)) + 360 * 5; // 5 full spins
  const spinDuration = 3000; // 3 seconds
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / spinDuration;
    const easeOut = 1 - Math.pow(1 - progress, 3);
    setRotation(easeOut * targetAngle);
    if (progress < 1) requestAnimationFrame(animate);
    else {
      setIsSpinning(false);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    }
  };
  requestAnimationFrame(animate);
};

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  // Draw wheel as before
  drawWheel();
  ctx.restore();
}, [wheel, rotation]);

// ... (rest unchanged)
