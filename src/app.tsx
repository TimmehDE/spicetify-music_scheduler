import { createGreeting } from "./core/hello";

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Show message on start.
  Spicetify.showNotification(createGreeting("Tim"));
  console.log("[music-scheduler] loaded");
}

export default main;