BN.addDecl('404', 'page', {
    route: '404'
}).staticProp({
    init: function () {

        BN('i-page').setTitle('Page not found');

        return this.out([
            {
                block: 'b-text',
                tag: '',
                content: [
                    {
                        elem: 'h1',
                        content: 'Page not found'
                    }
                ]
            }
        ]);
    }
});
