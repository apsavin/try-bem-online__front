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
                        content: 'Root dir'
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
                        mix: {
                            block: 'b-project-maker',
                            mods: {
                                position: 'local'
                            },
                            js: {
                                projectId: projectId
                            }
                        },
                        target: '_blank',
                        content: 'Build'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        url: '/clean/' + projectId + '/',
                        mix: {
                            block: 'b-project-maker',
                            mods: {
                                position: 'local'
                            },
                            js: {
                                projectId: projectId,
                                method: 'clean'
                            }
                        },
                        target: '_blank',
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