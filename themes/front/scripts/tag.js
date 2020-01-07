function postNote(args, content) {
    let type=args.join('').split(',')
    return `<blockquote class="callout border-${type} bg-soft-${type}">
              ${hexo.render.renderSync({text: content, engine: 'markdown'})}
            </blockquote>`;
}
function postLabel (args) {
  args = args.join(' ').split('@');
  var classes = args[0] || 'default';
  var text = args[1] || '';

  classes = classes.trim();
  !text && hexo.log.warn('Label text must be defined!');

  return `<span class="p-1 rounded mb-2 bg-${classes} text-white">${text}</span>`;
}

hexo.extend.tag.register('label', postLabel, { ends: false });
hexo.extend.tag.register('note', postNote, {ends: true});