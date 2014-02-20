BN.addDecl('b-project-menu')
    .blockTemplate(function (ctx) {
        var projectId = ctx.param('projectId');

        ctx
            .tag('ul')
            .content([
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/clones/' + projectId + '/',
                        content: 'Top dir'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: BN('i-projects-api').getViewPath(projectId),
                        content: 'View',
                        target: '_blank'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/build/' + projectId + '/',
                        content: 'Build'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/clean/' + projectId + '/',
                        content: 'Clean up'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/create_block/' + projectId + '/',
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