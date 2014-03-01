BN.addDecl('b-project-maker')
    .blockTemplate(function (ctx) {
        ctx.content([
            {
                block: 'preloader'
            },
            {
                block: 'b-text',
                elem: 'h2',
                mix: {
                    block: 'b-project-maker',
                    elem: 'queue'
                }
            }
        ], true);
    });