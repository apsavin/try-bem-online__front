BN.addDecl('b-project-editor')
    .dataTemplate(function (ctx) {
        return BN('i-projects-api').get('clones/' + ctx.param('project'))
            .then(function (data) {
                ctx.param('data', data);
            })
            .fail(function (err) {
                ctx.param('data', err);
            });
    })
    .blockTemplate(function (ctx) {
        var data = ctx.json().data,
            content = data.content;

        if (!content) {
            ctx.content({
                block: 'b-project-error',
                content: data.status
            });
            return;
        }

        if (Array.isArray(content)) {
            content = {
                block: 'b-project-dir',
                content: content,
                path: BN('i-router').getPath()
            };
        } else {
            if (data.w) {
                content = {
                    block: 'file-editor',
                    content: content
                };
            } else {
                content = {
                    block: 'b-project-file-viewer',
                    content: content
                };
            }
        }
        ctx.content(content);
    });