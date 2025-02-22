
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3079, hash: '2a47d121ff00995813e2148a89f92680e36c3cab1685a90c7dc649cd05990e83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3384, hash: '20927569c82ee3f2bf813c2d4ac9ec8fc355e044940bff316fb4b7fc83c84d23', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U6YR7ISZ.css': {size: 83, hash: 'E32RobdTPzE', text: () => import('./assets-chunks/styles-U6YR7ISZ_css.mjs').then(m => m.default)}
  },
};
