import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export type CommandConfig = {
  data: SlashCommandBuilder;
  execute: (Interaction: Interaction) => Promise<void> | void;
};

export type Interaction = ChatInputCommandInteraction<CacheType>;
