const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const XinzLog = (text, color) => {
	return !color ? chalk.yellow('[RATHI] ') + chalk.green(text) : chalk.yellow('[CHARITH] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	XinzLog
}

