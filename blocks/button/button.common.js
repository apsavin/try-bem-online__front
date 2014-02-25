BN.addDecl('button')
    .blockTemplate(function (ctx) {
        if (ctx.param('url')) {
            ctx.tag('a');
            ctx.attr('href', ctx.param('url'));
        } else {
            ctx.tag('button');
            ctx.attr('type', ctx.param('type'));
            ctx.attr('name', ctx.param('name'));
            if (ctx.mod('disabled')) {
                ctx.attr('disabled', 'disabled');
            }
        }
    });