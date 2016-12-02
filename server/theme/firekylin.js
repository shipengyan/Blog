module.exports = {
    name: 'firekylin',
    author: 'github.com/75team/firekylin', // imigrate by smallpath
    option: {
        logoUrl: '/static/logo.png',
        sidebarImageUrl: 'https://oebegwmfv.qnssl.com/webp/20161202/234424_bg8.jpg',
        sidebarMoveCss: '',
        sidebarFontColor: '#fff !important',
        menu: [{ 
                "option": "home", 
                "url": "/", 
                "label": "首页" ,
                
            }, 
            { 
                "option": "archive", 
                "url": "/archive", 
                "label": "归档" 
            }, 
            { 
                "option": "tags", 
                "url": "/tag", 
                "label": "标签" 
            }, 
            { 
                "option": "user", 
                "url": "/about", 
                "label": "关于" 
            }, 
            { 
                "option": "link", 
                "url": "/link", 
                "label": "友链" 
        }],
    }
}