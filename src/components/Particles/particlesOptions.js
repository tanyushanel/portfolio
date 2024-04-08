export const particlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
        resize: true,
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: { distance: 100, duration: 0.5 },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 0.5,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 2.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "star",
    },
    size: {
      value: { min: 0.1, max: 2.5 },
    },
  },
  detectRetina: true,
};
