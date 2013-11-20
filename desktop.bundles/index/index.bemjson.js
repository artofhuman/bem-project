({
    block: 'b-page',
    title: 'Index',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'b-page-inner',
            mix:[{ block: 'b-max-width'}],
            content: [
                {
                    block: 'header',
                    tag: 'header'
                },
                {
                    block: 'content',
                },
                {
                    elem: 'footer-blank'
                }
            ]
        },
        {
            block: 'footer',
            mix: [{ block: 'b-max-width'}]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})
