import "dotenv/config";
import { Client } from "discord.js";
import { validateEnvVariables } from "./utils/envValidation.js";

validateEnvVariables();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("messageCreate", (message) => console.log(message.content));

client.login(process.env.DISCORD_API_KEY);
