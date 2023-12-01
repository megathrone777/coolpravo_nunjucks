import { animateAbout } from "./animate-about.js";
import { initHeader } from "./header.js";

$((): void => {
  const primaryColor: string = "#04b404";
  const secondaryColor: string = "#012801";
  const opacityColor: string = "#04b40440";

  initHeader();
  animateAbout(primaryColor, secondaryColor, opacityColor);
});
