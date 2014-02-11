BN.addDecl('b-project-dir')
    .blockTemplate(function (ctx) {
        var json = ctx.json(),
            content = json.content.map(function (file) {
                return {
                    elem: 'file',
                    content: file.content,
                    mods: {
                        w: file.w.toString(),
                        r: file.r.toString()
                    },
                    path: json.path + file.content + '/'
                };
            });
        if (json.hasParent) {
            var pathsParts = json.path.split('/');
            pathsParts.pop();
            pathsParts.pop();
            content.unshift({
                elem: 'file',
                content: '..',
                mods: {
                    w: 'false',
                    r: 'true'
                },
                path: pathsParts.join('/') + '/'
            });
        }
        ctx.tag('ul').content(content, true);
    })
    .elemTemplate({
        file: function (ctx) {
            ctx.tag('li');
        },
        file_r_true: function (ctx) {
            var json = ctx.json();
            ctx.content({
                block: 'b-link',
                url: json.path,
                content: json.content
            }, true);
        },
        file_r_false: function (ctx) {
            ctx.attr('title', 'In offline version only');
        }
    });