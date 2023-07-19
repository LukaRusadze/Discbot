import { SlashCommandBuilder } from "discord.js";
import { CommandConfig, Interaction } from "../types/command.js";

async function Ping(interaction: Interaction) {
  await interaction.reply("pong");
}

export const config: CommandConfig = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  execute: Ping,
};
