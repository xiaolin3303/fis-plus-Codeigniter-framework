var CONFIG = {
    deploy: {
        receiver: 'http://localhost/receiver.php',
        root: '/Applications/MAMP/htdocs/'
    }
};

fis.config.merge({
    namespace: 'phpserver',

    // 部署配置
    deploy: {
        //使用fis release -d project 来使用这个配置
        project : [
            {
                receiver: CONFIG.deploy.receiver,
                from: '/application',
                to: CONFIG.deploy.root,
            },
            {
                receiver: CONFIG.deploy.receiver,
                from: '/plugin',
                to: CONFIG.deploy.root,
            }
        ]
    }
});