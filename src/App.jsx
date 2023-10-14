// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import { Canvas } from "@react-three/fiber";
// import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import useGame from "./stores/useGame.js";
import Game from "./Game.jsx";
import Interface from "./interface/Interface";
import Controls from "./utils/Controls";
import MainMenu from "./interface/MainMenu.jsx";

// Prevent right click
document.addEventListener("contextmenu", (e) => e.preventDefault());

export default function App() {
  const isInGame = useGame((state) => state.isInGame);
  // const pixalated = useGame((state) => state.pixalated);

  return (
    <>
      {isInGame ? (
        <Controls>
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6],
            }}
          >
            {/* {pixalated && (
              <EffectComposer>
                <Pixelation granularity={5} />
              </EffectComposer>
            )} */}
            <Game />
          </Canvas>
          <Interface />
        </Controls>
      ) : (
        <MainMenu />
      )}
    </>
  );
}
