BN.addDecl('page-index', 'page', {
    route: /^\/$/
}).staticProp({
    init: function () {

        BN('i-page').setTitle('Try BEM online');

        return this.out([
            {
                block: 'b-text',
                tag: '',
                content: [
                    {
                        elem: 'h1',
                        content: 'Try BEM online'
                    },
                    {
                        elem: 'p',
                        content: 'There is a "Hello, world!" front-end project done BEM, bundled into this page with iframe:'
                    }
                ]
            },
            {
                block: 'project-presenter',
                url: BN('i-config').example
            },
            {
                block: 'b-text',
                elem: 'p',
                content: [
                    'You can ',
                    {
                        block: 'button',
                        url: '/clone/',
                        content: 'clone'
                    },
                    ' this project and play with it online.'
                ]
            }
        ]);
    }
});
