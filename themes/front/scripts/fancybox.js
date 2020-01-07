var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;


const cheerio = require('cheerio'); 

const { basename } = require('path');

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift(),
    thumbnail = '';

  if (args.length && rUrl.test(args[0])){
    thumbnail = args.shift();
  }

  var title = args.join(' ');

  return '<a class="fancybox" href="' + original + '" title="' + title + '">' +
    '<img src="' + (thumbnail || original) + '" alt="' + title + '">'
    '</a>' +
    (title ? '<span class="caption">' + title + '</span>' : '');
});

hexo.extend.helper.register('page_anchor', str => {
  const $ = cheerio.load(str, {decodeEntities: false});
  const headings = $('h1, h2, h3, h4, h5, h6');
  if (!headings.length) return str;
  headings.each(function() {
    const id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append(`<a class="article-anchor" href="#${id}" aria-hidden="true"></a>`);
  });

  return $.html();
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  const type = this.page.canonical_path.split('/')[0];
  const sidebar = this.site.data.sidebar[type];
  // const path = basename(this.path);
  let result = '';
  const self = this;
  const prefix = 'sidebar.' + type + '.';
  const path = basename(this.path);
  if (typeof sidebar === 'undefined') {
    return '';
  }
  for (const [link, menu] of Object.entries(sidebar)) {
    result += `<li class="hs-sidebar__item"><a href="${menu}" class="hs-sidebar__link ${menu==path?'active':''}" >${self.__(prefix + link)}</a></li>`;
  }

  return result;
});