var fs = require("fs");
var path = require('path');

var arguments = process.argv.splice(2);

if (arguments.length === 0) {
	console.log('missing `widgetName` name param');
	process.exit();
}

var widget = arguments[0];
var dir = arguments[1] || '';
var directory = dir;
if (directory) {
	directory += '/';
}
if (dir) {
	dir = dir + '-';
}

var htmlTpl = [];
htmlTpl.push(`<div class="fis-widget-${dir}${widget}">`)
htmlTpl.push('');
htmlTpl.push('</div>');
htmlTpl.push('');
htmlTpl.push('{%script%}');
htmlTpl.push(`	require('./${widget}.js').create('.fis-widget-${dir}${widget}', {})`);
htmlTpl.push('{%/script%}');

htmlTpl = htmlTpl.join('\n');

var styleTpl = [];
styleTpl.push(`.fis-widget-${dir}${widget} {`);
styleTpl.push('');
styleTpl.push('}');
styleTpl = styleTpl.join('\n');

var jsTpl = [];
jsTpl.push(`module.exports = Widget.extend({`);
jsTpl.push(`	init: function () {`);
jsTpl.push(``);
jsTpl.push(`	}`);
jsTpl.push(`});`);

jsTpl = jsTpl.join('\n');


function mkdirSync (dir, mode) {
	mode = mode || 0755;

	if(!fs.existsSync(dir)) {
		fs.mkdirSync(dir, mode)
	} else {
		console.log('Directory [' + dir + '] has existed');
		process.exit();
	}
}

function writeFile (filename, content) {
	fs.open(filename, 'w', '0644', function (e, fd) {
	    
	    if(e) throw e;
	    
	    fs.write(fd, content, function(e){
	        if(e) throw e;
	        fs.closeSync(fd);
	    });
	});
}

var widgetPath = 'widget/' + directory;
mkdirSync (widgetPath + widget);

writeFile (widgetPath + widget + '/' + widget + '.inline.less', styleTpl);
writeFile (widgetPath + widget + '/' + widget + '.js', jsTpl);
writeFile (widgetPath + widget + '/' + widget + '.tpl', htmlTpl);

console.log('Create Widget Success!');