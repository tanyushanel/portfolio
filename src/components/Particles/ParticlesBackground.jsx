import Particles from "@tsparticles/react";

import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "./particlesOptions";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => particlesOptions, []);

  const containerStyle = {
    height: "0",
  };

  return (
    <div style={containerStyle}>
      {!init && <div>Loading...</div>}
      {init && <Particles id="tsparticles" options={options} />}
    </div>
  );
};
export default ParticlesBackground;
