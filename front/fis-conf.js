// release to dev machine
// fisp release -d project

var CONFIG = {
    deploy: {
        receiver: 'http://localhost/receiver.php',
        root: '/Applications/MAMP/htdocs/'
    }
};

//configure plugin
fis.config.set('modules.lint.js', 'jshint');
//configure plugin settings
fis.config.set('settings.lint.jshint', {
    //ignored some files
    //ignored : 'static/libs/**.js',
    ignored : [ 'static/**.js'],

    //using Chinese reporter
    i18n : 'zh-CN',

    //jshint options
    curly : true,
    eqeqeq : true,
    forin : true,
    immed : true,
    latedef : true,
    newcap : true,
    noarg : true,
    noempty : true,
    node : true
});

fis.config.merge({
    namespace: 'front',

    // 采用百度的前端模板
    // 语法文档: http://baidufe.github.io/BaiduTemplate/
    tmpl: 'bdtmpl',
    pack : {
        'pkg/lib-pkg.js' : '/static/**.js',
        'pkg/utils-pkg.js' : '/widget/utils/**.js'
    },
    project : { exclude : ['node_modules', 'test', 'createWidget.js'] },
    // 插件配置
    modules: {
        // inline插件
        preprocessor: {
            tpl: 'inline'
        },
        modules : {
            optimizer : {
                js : 'uglify-js',
                css : 'clean-css',
                png : 'png-compressor' 
            }
        }
    },
    // 部署配置
    deploy: {
        //使用fis release --dest project 来使用这个配置
        project : [
            {
                receiver: CONFIG.deploy.receiver,
                from: '/template',
                to: CONFIG.deploy.root + 'views/',
            },
            {
                receiver: CONFIG.deploy.receiver,
                from: '/static',
                to: CONFIG.deploy.root,
            },
            {
                receiver: CONFIG.deploy.receiver,
                from: '/config',
                to: CONFIG.deploy.root,
            }
        ]
    }
});