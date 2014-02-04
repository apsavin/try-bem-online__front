BN.addDecl('b-project-editor')
    .dataTemplate(function (ctx) {
        return BN('i-projects-api').get('clones/' + ctx.param('project')).then(function (data) {
            ctx.param('data', data);
            return Vow.fulfill();
        });
    })
    .blockTemplate(function (ctx) {
        ctx.content(ctx.json().data.id);
    });