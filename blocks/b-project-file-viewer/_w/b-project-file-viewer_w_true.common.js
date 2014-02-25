BN.addDecl('b-project-file-viewer')
    .blockTemplate({
        w_true: function (ctx) {
            ctx.tag('form');
            var submit = {
                block: 'button',
                type: 'submit',
                content: 'Save'
            };
            ctx.content([
                submit,
                {
                    elem: 'text',
                    content: ctx.content()
                },
                {
                    elem: 'preloader-holder',
                    content: {
                        block: 'preloader',
                        mods: {
                            hidden: 'true'
                        }
                    }
                },
                submit
            ], true);
        }
    });