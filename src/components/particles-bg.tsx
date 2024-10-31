"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Failed to initialize particles engine:", error);
      }
    };

    initEngine();
  }, []);

  const options = useMemo<ISourceOptions>(
    () =>
      ({
        name: "particles-bg",
        key: "particles-bg",
        smooth: true,
        detectRetina: true,
        particles: {
          number: {
            value: 200,
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            options: {
              stroke: { width: 1, color: "#000000" },
              polygon: { sides: 12 },
            },
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.8,
              count: 50,
              decay: 0.015,
              startValue: "random",
              sync: false,
              mode: "increase",
            },
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 0.8,
              count: 50,
              decay: 0.015,
              startValue: "random",
              sync: false,
              mode: "increase",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.02,
            width: 1,
          },
          move: {
            enable: true,
            speed: 12,
            direction: MoveDirection.none,
            random: true,
            straight: false,
            outModes: {
              default: OutMode.bounce,
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
              distance: 200,
            },
          },
          collisions: {
            enable: true,
            bounce: {
              horizontal: {
                value: 0.69,
              },
              vertical: {
                value: 0.8,
              },
            },
            absorb: {
              speed: 0.1,
            },
            mode: "bounce",
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
              delay: 0.5,
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.3 },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
      }) satisfies ISourceOptions,
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
