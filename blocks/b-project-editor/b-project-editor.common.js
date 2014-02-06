BN.addDecl('b-project-editor')
    .dataTemplate(function (ctx) {
        return BN('i-projects-api').get('clones/' + ctx.param('project')).then(function (data) {
            ctx.param('data', data);
            return Vow.fulfill();
        });
    })
    .blockTemplate(function (ctx) {
        var data = ctx.json().data,
            content = data.content;
        if (Array.isArray(data)) {
            content = {
                block: 'dir',
                content: content
            };
        } else {
            if (data.w) {
                content = {
                    block: 'file-editor',
                    content: content
                };
            } else {
                content = {
                    block: 'b-text',
                    elem: 'pre',
                    content: content
                };
            }
        }
        ctx.content(content);
    });