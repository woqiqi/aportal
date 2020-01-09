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
          result += `<h5 class="hs-sidebar__heading"><a href="${self.url_for('docs/'+title+'/'+link)}">${self.__(prefix + title)}</a></h5><ul class="hs-sidebar__nav">`;
        }else{
          result += `<li class="hs-sidebar__item"><a href="${self.url_for('docs/'+title+'/'+link)}" class="hs-sidebar__link ${link==path?'active':''}" >${self.__(prefix + text)}</a></li>`;
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
        result += `<li><a class="nav-link u-header__sub-menu-nav-link" href="${self.url_for('docs/'+title+'/'+link)}">${self.__(prefix + title)}</a></li>`;
      }
    }
  }
  return result;
});

hexo.extend.helper.register('myToc', function(content) {
  let data=tocObj(content)
  result="";
  data.forEach((e,i)=>{
    result+= `<li class="hd-doc-section-nav-item">
      <a href="#${e.id}">${e.text}</a>`
    if(data[i+1]&&e.level<data[i+1].level){
      result+=myToc(e,i,data,true)
    }
    result+= `</li>`
  })
  return result;
});

hexo.extend.helper.register('page_nav', function() {
  const type = this.page.canonical_path.split('/')[0];
  const sidebar = this.site.data.sidebar[type];
  let arr=this.page.canonical_path.split('/')
  arr.splice(0,1)
  // const path = basename(this.path);
  const list = {};
  const prefix = 'sidebar.' + type + '.';

  for (const i in sidebar) {
    for (const j in sidebar[i]) {
      if(j=='index'){
        list[i+'/'+sidebar[i][j]] = i;
      }else{
        list[i+'/'+sidebar[i][j]] = j;
      }
    }
  }

  const keys = Object.keys(list);
  const index = keys.indexOf(arr.join('/'));
  let result = '';
  let len=6
  if (index > 0) {
    if(index==keys.length - 1){
      len=12
    }else{
      len=6
    }
    result += `  <div class="col-sm-${len}">
                  <a class="card shadow text-right p-4 transition-3d-hover" href="${this.url_for(type+'/'+keys[index - 1])}">
                    <span class="media align-items-center">
                      <span class="fas fa-arrow-left mr-2"></span>
                      <span class="media-body">
                        <span class="d-block text-secondary">上一页</span>
                        <span class="d-block font-weight-semi-bold">${this.__(prefix + list[keys[index - 1]])}</span>
                      </span>
                    </span>
                  </a>
                </div>`;
  }

  if (index < keys.length - 1) {
    if(index==0){
      len=12
    }else{
      len=6
    }
    result += `<div class="col-sm-${len}">
                <a class="card shadow p-4 transition-3d-hover" href="${this.url_for(type+'/'+keys[index + 1])}">
                  <span class="media align-items-center">
                    <span class="media-body">
                      <span class="d-block text-secondary">下一页</span>
                      <span class="d-block font-weight-semi-bold">${this.__(prefix + list[keys[index + 1]])}</span>
                    </span>
                    <span class="fas fa-arrow-right ml-2"></span>
                  </span>
                </a>
              </div>`;
  }

  return result;
});


function myToc(e,i,data,flag2){
  let flag=true
  let flag1=false
  let result='<ul>';
  while (flag) {
    if(flag2){
      el=i+1;
    }else{
      el=i;
    }
    let a=data[el]
    if(a&&(a.level>e.level)){
      flag1=true;
      result+=`<li class="hd-doc-section-nav-item"><a href="#${a.id}">${a.text}</a>`;
      data.splice(el,1);
      if(data[el]&&(data[el].level>a.level)){
        result+=myToc(a,el,data);
      }
      result+='</li>'
    }else{
      flag=false;
    }
  }
  result+='</ul>'
  return flag1?result:''
}