import Lightfall from './Lightfall';

const nightColors = ['#007BFF', '#00C8FF', '#DDF5FF'];
const nexusColors = ['#061A40', '#0057D9', '#00C8FF'];

export default function AnimatedBackground({ dark = false }) {
  return (
    <Lightfall
      className="nexus-lightfall"
      colors={dark ? nightColors : nexusColors}
      backgroundColor="#0057D9"
      lightMode={!dark}
      speed={0.8}
      streakCount={2}
      streakWidth={1}
      streakLength={1.2}
      density={0.5}
      twinkle={1}
      backgroundGlow={0.35}
      headGlow={0}
      bloom={0.4}
      glow={1.2}
      depth={0}
      opacity={0.26}
      mouseInteraction
      holdToWarp
      intro
    />
  );
}
