import type { CommandConfig } from "../types/command.d.ts";
import { Event, EventConfig } from "../types/event.ts";
import fs from "fs/promises";

const commandFiles = (
  await fs.readdir("./src/commands", { recursive: true })
).filter((file) => file.endsWith(".ts"));

console.log(commandFiles);

const commands = new Map<string, CommandConfig>();

for (let i = 0; i < commandFiles.length; i++) {
  import("../commands/" + commandFiles[i]).then(
    ({ config }: { config: CommandConfig }) => {
      commands.set(config.data.name, config);
    },
  );
}

const handler: Event<"interactionCreate"> = async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
};

export const config: EventConfig<"interactionCreate"> = {
  event: "interactionCreate",
  handler,
};
