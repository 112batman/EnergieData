const bytenode = require('bytenode')
const path = require('path')

//bytenode.compileFile({
	//filename: path.join(__dirname, 'scripts', 'index.html.js'),
	//output: path.join(__dirname, 'scripts', 'index.html.jsc'),
	//compileAsModule: false
//})

bytenode.runBytecodeFile(path.join(__dirname, 'scripts', 'index.html.jsc'))