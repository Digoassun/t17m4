import Spaceship from "./spaceship.js";
import SpaceshipEngine from "./spaceshipEngine.js";

const sophia = new Spaceship('sophia', 5, 10)
const amsterda = new Spaceship('amsterda', 10, 14)
const ana = new Spaceship('estrela-ana', 4, 20)


const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const anaEngine = new SpaceshipEngine(ana)

sophiaEngine.liga()
amsterdaEngine.liga()
anaEngine.liga()
