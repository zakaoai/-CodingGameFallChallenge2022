import debugConst from "./constant/debug";
import { globalConst } from "./constant/global";
import { log } from "./utils/log";

export default function init() {
  var inputs = readline().split(" ");
  const width = parseInt(inputs[0]);
  const height = parseInt(inputs[1]);
  globalConst.mapWidth = width;
  globalConst.mapHeight = height;
}
