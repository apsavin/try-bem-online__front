BN.addDecl('b-project-file-viewer')
    .blockTemplate({
        w_false: function (ctx) {
            ctx.content({
                elem: 'text',
                content: ctx.content()
            }, true);
        }
    });