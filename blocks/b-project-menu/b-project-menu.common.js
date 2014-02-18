BN.addDecl('b-project-menu')
    .blockTemplate(function (ctx) {
        ctx
            .tag('ul')
            .content([
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: BN('i-projects-api').getViewPath(ctx.param('projectId')),
                        content: 'View',
                        target: '_blank'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/build/' + ctx.param('projectId') + '/',
                        content: 'Build'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/clean/' + ctx.param('projectId') + '/',
                        content: 'Clean up'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/create_block/' + ctx.param('projectId') + '/',
                        content: 'Create...'
                    }
                }
            ]);
    })
    .elemTemplate({
        item: function (ctx) {
            ctx.tag('li');
        }
    });