import { initAudio } from "./audio.js";
import { startFlowers } from "./flowers.js";
import { startParticles } from "./particles.js";
import { startTyping } from "./typing.js";
import { startCounter } from "./counter.js";
import { initSurprise } from "./surprise.js";

const container = document.querySelector(".container");

initAudio();
startFlowers(container);
startParticles(container);
startTyping();
startCounter();
initSurprise();
