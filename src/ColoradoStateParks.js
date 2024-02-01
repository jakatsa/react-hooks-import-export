import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife, elevation } from "./parks/RockyMountain";
function ColoradoStateParks() {
  howManyParks();
  elevation();
  wildlife();
  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <p>{trees}</p>
    </>
  );
}
export default ColoradoStateParks;
