import { buildLanding } from "./buildLanding.js";

export const initPage = () => {
  buildLanding();
};

export const clearApp = (container: HTMLElement) => {
  container.innerHTML = "";
};
