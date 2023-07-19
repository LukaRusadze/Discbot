import { SlashCommandBuilder } from "discord.js";
import type { CommandConfig, Interaction } from "../../types/command.d.ts";

async function Echo(interaction: Interaction) {
  await interaction.reply(
    interaction.options.getString("message") ?? "echo this shit",
  );
}

export const config = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes your message back")
    .addStringOption((option) => {
      return option
        .setName("message")
        .setDescription("Message to echo back")
        .setRequired(true);
    }),
  execute: Echo,
};
