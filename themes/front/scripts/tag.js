function postNote(args, content) {
    console.log(args[1])
    let type=args.join('')
    console.log(`bg-soft-${type}`)
    return `<blockquote class="callout border-${type} bg-soft-${type}">
              ${hexo.render.renderSync({text: content, engine: 'markdown'})}
            </blockquote>`;
}

hexo.extend.tag.register('note', postNote, {ends: true});