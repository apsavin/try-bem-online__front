BN.addDecl('page-project', 'page', {
    route: /^\/clones\/(.+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Your project');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Play with your project now!'
            },
            {
                block: 'b-text',
                elem: 'p',
                content: [
                    'You can take a look on your project\'s ',
                    {
                        block: 'b-link',
                        url: BN('i-router').getPath() + 'view/',
                        target: '_blank',
                        content: 'page'
                    },
                    '.'
                ]
            },
            {
                block: 'b-project-editor',
                project: matchers[1]
            }
        ]);
    }
});
