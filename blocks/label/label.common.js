BN.addDecl('label')
    .blockTemplate(function (ctx) {
        ctx.tag('label');
    })
    .elemTemplate({
        content: function (ctx) {
            ctx.tag('span');
        }
    });
