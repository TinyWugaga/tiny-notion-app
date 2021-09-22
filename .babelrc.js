const env = require('./env-config')

module.exports = {
    presets: ["next/babel"],
    plugins: [
        ["styled-components", { "ssr": true }],
        ["transform-define", env]
    ]
}