BN.addDecl('b-project-editor')
    .dataTemplate(function (ctx) {
        return BN('i-projects-api').getProjectResource(ctx.param('projectId'), ctx.param('path'))
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

        var curPath = BN('i-router').getPath();

        if (Array.isArray(content)) {
            content = {
                block: 'b-project-dir',
                content: content,
                path: curPath
            };
        } else {
            content = {
                block: 'b-project-file-viewer',
                content: content,
                js: {
                    w: data.w,
                    mode: /\.css\/$/.test(curPath) ? 'css' : 'javascript'
                }
            };
        }
        ctx.content(content);
    });