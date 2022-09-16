require('dotenv').config()
const { REST, Routes } = require('discord.js')

const commands = [
  {
    name: 'ping',
    description: 'Replies with pong'
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)
