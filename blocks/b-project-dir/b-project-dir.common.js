BN.addDecl('b-project-dir')
    .blockTemplate(function (ctx) {
        var json = ctx.json(),
            content = json.content.map(function (file) {
                return {
                    elem: 'file',
                    content: file.content,
                    mods: {
                        w: file.w,
                        r: file.r
                    },
                    path: json.path + file.content + '/'
                };
            });
        ctx.tag('ul').content(content, true);
    })
    .elemTemplate({
        file: function (ctx) {
            ctx.tag('li');
            if (ctx.mods().r) {
                var json = ctx.json();
                ctx.content({
                    block: 'b-link',
                    url: json.path,
                    content: json.content
                }, true);
            }
        }
    });