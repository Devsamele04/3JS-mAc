import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Maccontainer from "./components/Maccontainer";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="nav line flex gap-10 absolute top-5 left-1/2 -translate-x-1/2">
        {[
          "iphone",
          "ipad",
          "ios",
          "mac",
          "contact",
          "iphone",
          "ipad",
          "ios",
          "mac",
          "contact",
          "services",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-30 left-1/2 -translate-x-1/2 font-['Helvetica']">
        <h1 className="masked text-5xl tracking-tighter font-[700]">
          Macbook Pro.
        </h1>
        <h5> oh so pro ! </h5>
        <p className="text-center w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quis
          officiis dicta ea, ullam facilis,
        </p>
      </div>
      <Canvas camera={{ fov: 15, position: [0, -10, 200] }}>
        <OrbitControls enableZoom={false} />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <Maccontainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
