import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { log } from "./utils/log";
import { resetPerf } from "./utils/perf";

const { POSSIBLE_MOVES } = debugConst;

function readGameData() {
  var inputs = readline().split(" ");
  const myMatter = parseInt(inputs[0]);
  const oppMatter = parseInt(inputs[1]);
  globalConst.myMatter = myMatter;
  globalConst.oppMatter = oppMatter;
  globalConst.map = new Array(globalConst.mapWidth);
  globalConst.map.fill(new Array(globalConst.mapHeight));
  globalConst.me = { cells: [], units: [], recyclers: [] };
  globalConst.op = { cells: [], units: [], recyclers: [] };
  globalConst.empty = { cells: [] };
  for (let y = 0; y < globalConst.mapHeight; y++) {
    for (let x = 0; x < globalConst.mapWidth; x++) {
      readCell(x, y);
    }
  }

  function readCell(x, y) {
    const inputs = readline().split(" ");
    const scrapAmount = parseInt(inputs[0]);
    const owner = parseInt(inputs[1]); // 1 = me, 0 = foe, -1 = neutral
    const units = parseInt(inputs[2]);
    const recycler = parseInt(inputs[3]);
    const canBuild = parseInt(inputs[4]);
    const canSpawn = parseInt(inputs[5]);
    const inRangeOfRecycler = parseInt(inputs[6]);
    const cell = {
      x,
      y,
      scrapAmount,
      owner,
      units,
      recycler,
      canBuild,
      canSpawn,
      inRangeOfRecycler
    };
    globalConst.map[x][y] = cell;
    switch (owner) {
      case 1:
        globalConst.me.cells.push(cell);
        if (units > 0) {
          globalConst.me.units.push(cell);
        }
        if (recycler === 1) {
          globalConst.me.recyclers.push(cell);
        }
        break;
      case 0:
        globalConst.op.cells.push(cell);
        if (units > 0) {
          globalConst.op.units.push(cell);
        }
        if (recycler === 1) {
          globalConst.op.recyclers.push(cell);
        }
        break;
      default:
        globalConst.empty.cells.push(cell);
        break;
    }
  }
}

export default function readDatas() {
  readGameData();
}
