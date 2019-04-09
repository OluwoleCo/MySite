import React from 'react';

import favicon from 'static-assets/favicon.png';
import twitterCard from 'static-assets/twitter-card.png';

export default function HTML(props) {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!../public/styles.css'),
        }}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="theme-color" content="#00f" />
        <meta name="author" content="Oluwole Oyekanmi" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@OluwoleCo" />
        <meta name="twitter:creator" content="@OluwoleCo" />
        <meta
          name="twitter:image"
          content={`http://oluwole.co${twitterCard}`}
        />

        {props.headComponents}
        {css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('Built at ${Date(new Date().getTime())}')`,
          }}
        />
        <script>
          window['_fs_debug'] = false;
          window['_fs_host'] = 'fullstory.com';
          window['_fs_org'] = 'KCX9J';
          window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) {m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); } return;}
    g=m[e]=function(a,b,s){g.q ? g.q.push([a, b, s]) : g._api(a, b, s); };g.q=[];
          o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
          y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l, { uid: i }, s); if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l, v, s)};g.event=function(i,v,s){g('event', { n: i, p: v }, s)};
    g.shutdown=function(){g("rec", !1)};g.restart=function(){g("rec", !0)};
    g.consent=function(a){g("consent", !arguments.length || a)};
    g.identifyAccount=function(i,v){o = 'account'; v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
      })(window,document,window['_fs_namespace'],'script','user');
</script>
      </body>
    </html>
  );
}
