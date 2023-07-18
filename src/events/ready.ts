import type { Event, EventConfig } from "../types/event.js";

const handler: Event<"ready"> = (client) => {
  console.log(client.user.username);
};

export const config: EventConfig<"ready"> = {
  event: "ready",
  handler,
};
