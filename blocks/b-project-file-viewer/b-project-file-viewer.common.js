BN.addDecl('b-project-file-viewer')
    .blockTemplate(function (ctx) {
        ctx.tag('pre')
            .cls('prettyprint')
            .content({
                tag: 'code',
                content: ctx.content()
            }, true);
    });