BN.addDecl('button')
    .blockTemplate(function (ctx) {
        ctx.tag('button')
            .attr('type', ctx.param('type'));
    });