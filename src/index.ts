import "dotenv/config";
import { Client, ClientEvents } from "discord.js";
import { validateEnvVariables } from "./utils/envValidation.ts";
import fs from "fs/promises";
import { EventConfig } from "./types/event.js";

validateEnvVariables();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

const eventFiles = (await fs.readdir("./src/events")).filter((file) =>
  file.endsWith(".ts"),
);

for (let i = 0; i < eventFiles.length; i++) {
  import("./events/" + eventFiles[i]).then(
    ({ config }: { config: EventConfig<keyof ClientEvents> }) => {
      client.on(config.event, config.handler);
    },
  );
}

client.login(process.env.DISCORD_API_KEY);
