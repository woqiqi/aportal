function postNote(args, content) {
    let type=args.join(' ')
    return `<blockquote class="callout border-${type} bg-soft-${type}">
              ${hexo.render.renderSync({text: content, engine: 'markdown'})}
            </blockquote>`;
}
function fullImg(args, content) {
    let type=args.join('').split(',')
    let width=type[2]?type[2]:'70%';
    let height=type[3]?type[3]:(type[2]?type[2]:'')
    return `<div width='100%' class='text-center'><img class='pb-2 text-center ${type[1]}' height='${height}' width='${width}' src='${type[0]}' ></img></div>`;
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
hexo.extend.tag.register('fullimg', fullImg, {ends: false});
hexo.extend.tag.register('fi', fullImg, {ends: false});