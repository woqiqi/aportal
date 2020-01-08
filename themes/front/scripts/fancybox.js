var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;


const cheerio = require('cheerio'); 

const { basename } = require('path');
const { tocObj } = require('hexo-util');


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
  for (const [title, menu] of Object.entries(sidebar)) {
    if(menu){
      for (const [text, link] of Object.entries(menu)) {
        if(text=='index'){
          result += `<h5 class="hs-sidebar__heading"><a href="${link}">${self.__(prefix + title)}</a></h5><ul class="hs-sidebar__nav">`;
        }else{
          result += `<li class="hs-sidebar__item"><a href="${link}" class="hs-sidebar__link ${link==path?'active':''}" >${self.__(prefix + text)}</a></li>`;
        }
      }
    }
    result +='</ul>'
  }
  return result;
});

hexo.extend.helper.register('header_doc_sidebar', function(className) {
  const sidebar = this.site.data.sidebar['docs'];
  // const path = basename(this.path);
  let result = '';
  const self = this;
  const prefix = 'sidebar.docs.';
  for (const [title, menu] of Object.entries(sidebar)) {
    for (const [text, link] of Object.entries(menu)) {
      if(text=='index'){
        result += `<li><a class="nav-link u-header__sub-menu-nav-link" href="${self.url_for('docs/'+link)}">${self.__(prefix + title)}</a></li>`;
      }
    }
  }
  return result;
});

hexo.extend.helper.register('myToc', function(content) {
  let data=tocObj(content)
  result="";
  data.forEach(e=>{
    // active
    result+= `<li class="hd-doc-section-nav-item"><a href="#${e.id}">${e.text}</a></li>`
  })
  return result;
});

