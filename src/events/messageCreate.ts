import type { Event, EventConfig } from "../types/event.js";

const handler: Event<"messageCreate"> = (message) => {
  console.log(message.content);
};

export const config: EventConfig<"messageCreate"> = {
  event: "messageCreate",
  handler,
};
