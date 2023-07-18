import { ClientEvents } from "discord.js";

export type Event<T extends keyof ClientEvents> = (
  ...args: ClientEvents[T]
) => Promise<void> | void;

export type EventConfig<T extends keyof ClientEvents> = {
  event: T;
  handler: Event<T>;
};
