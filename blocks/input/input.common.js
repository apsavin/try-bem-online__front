BN.addDecl('input')
    .blockTemplate(function (ctx) {
        ctx.tag('input')
            .attr('type', ctx.param('type') || 'text')
            .attr('name', ctx.param('name'));
        if (ctx.param('required')) {
            ctx.attr('required', true);
        }
    });