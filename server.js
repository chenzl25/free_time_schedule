var http = require('http');
var fs = require('fs');
var index = "index.html";
var error = "error404.html";
var querystring = require('querystring');
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/library');
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    console.log('db open');
});
var list = ['Mon_m1', 'Tue_m1', 'Wed_m1', 'Thu_m1', 'Fri_m1', 'Sat_m1', 'Sun_m1',
			'Mon_m2', 'Tue_m2', 'Wed_m2', 'Thu_m2', 'Fri_m2',
			'Mon_a1', 'Tue_a1', 'Wed_a1', 'Thu_a1', 'Fri_a1', 'Sat_a1', 'Sun_a1',
			'Mon_a2', 'Tue_a2', 'Wed_a2', 'Thu_a2', 'Fri_a2',
			'Mon_d1', 'Tue_d1', 'Wed_d1', 'Thu_d1', 'Fri_d1', 'Sat_d1', 'Sun_d1'];
var workerSchema = new mongoose.Schema({
    name: String,
    id: String,
    note: String,
    workTime: {
        Mon_m1: Boolean,Tue_m1: Boolean,Wed_m1: Boolean,Thu_m1: Boolean,Fri_m1: Boolean,Sat_m1: Boolean,Sun_m1: Boolean,
        Mon_m2: Boolean,Tue_m2: Boolean,Wed_m2: Boolean,Thu_m2: Boolean,Fri_m2: Boolean,
        Mon_a1: Boolean,Tue_a1: Boolean,Wed_a1: Boolean,Thu_a1: Boolean,Fri_a1: Boolean,Sat_a1: Boolean,Sun_a1: Boolean,
        Mon_a2: Boolean,Tue_a2: Boolean,Wed_a2: Boolean,Thu_a2: Boolean,Fri_a2: Boolean,
        Mon_d1: Boolean,Tue_d1: Boolean,Wed_d1: Boolean,Thu_d1: Boolean,Fri_d1: Boolean,Sat_d1: Boolean,Sun_d1: Boolean,
    }
});
var Response = function(req, res, filePath) {
    //读取文件，读取完成后给客户端响应
    fs.readFile(filePath, function(err, data) {
        if (err) { //如果失败，就返回错误文件
            if (filePath != error) //如果失败的不是错误文件，才返回错误文件
                Response(req, res, error);
        } else {
            var i = filePath.lastIndexOf('.');
            var suffix = filePath.substr(i + 1, filePath.length);
            var post_data = '';
            if (filePath == 'table.html') {
                req.on('data', function(data) {
                    post_data += data;
                });
                req.on('end', function() {
                    post_data = post_data.toString();
                    console.log('the end of the POST data:\n' + post_data);
                    var query = querystring.parse(post_data);
                    var id = query.id;
                    var name = query.name;
                    if (!id || !name) {
                        req.url = '/redirct';
                        Response(req, res, index);
                        return;
                    }
                    res.writeHead(200, {
                        'Content-type': "text/html"
                    });
                    data = data.toString();
                    data = data.replace(/<%id%>/g, id.toString());
                    data = data.replace(/<%name%>/g, name.toString());
                    res.write(data);
                    res.end();
                });
            } else if (req.url == '/submit') {
                req.on('data', function(data) {
                    post_data += data;
                });
                req.on('end', function() {
                    post_data = post_data.toString();
                    console.log('the end of the POST data:\n' + post_data);
                    var query = querystring.parse(post_data);
                    var tem = {workTime:{}};
                    tem.id = query.id;
                    tem.name = query.name;
                    tem.note = query.note;
                    for (var i of list) {
                    	if (i in query)
                    		tem.workTime[i] = true;
                    	else
                    		tem.workTime[i] = false;
                    }
                    console.log(query);
                    var workerModel = mongoose.model('Worker', workerSchema);
                    var w = new workerModel(tem);
                    w.save(function(err,doc) {
                    	if (err) {
                    		console.log(err);
                    	} else {
                    		console.log('save!')
                    	}
                    });
                    res.writeHead(200, {
                        'Content-type': "text/html"
                    });
                    res.end(data);
                });
            } else {
                if (req.url == '/redirct') {
                    res.writeHead(302, {
                        'Location': 'index'
                    });
                } else {
                    res.writeHead(200, {
                        'Content-type': "text/" + suffix
                    });
                }
                res.end(data);
            }
        }
    });
};
var server = http.createServer(function(req, res) {
    console.log(req.url);
    if (req.url == '/index' || req.url == '/') {
        Response(req, res, index);
    } else if (req.url == '/table' || req.url == '/submit') {
        Response(req, res, req.url.substring(1) + '.html');
    } else {
        Response(req, res, req.url.substring(1));
    }
});

server.listen('3000', function() {
    console.log("服务器启动");
});
