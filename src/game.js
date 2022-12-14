import { log } from "./utils/log";
import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { logPerf } from "./utils/perf";

import actions from "./constant/actions";

const randomX = () => Math.floor(Math.random() * globalConst.mapWidth);
const randomY = () => Math.floor(Math.random() * globalConst.mapHeight);

const randomMoves = () => {
  return globalConst.me.units.map(u => `${actions.MOVE} ${u.units} ${u.x} ${u.y} ${randomX()} ${randomY()}`).join(";");
};

const randomSpawn = () => {
  var spawn = "";
  for (let index = 0; index < globalConst.myMatter / 10; index++) {
    const randomMyCellIndex = Math.floor(Math.random() * globalConst.me.cells.length);

    const myCell = globalConst.me.cells[randomMyCellIndex];
    spawn += `${actions.SPAWN} 1 ${myCell.x} ${myCell.y};`;
  }
  return spawn;
};

const random = () => {
  console.log(randomSpawn() + randomMoves());
};

export function play() {
  random();
}
