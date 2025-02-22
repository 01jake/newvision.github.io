
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/newvision.github.io /',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3100, hash: '81b94c36a72dee6f0b4188a75f244fcd3337966815b8f6d8bf58f040516651a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3405, hash: '205ef1806b1dc4c3247cc89bec0e5b24ce8755ad1ccf7726217a3cd357ea98e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U6YR7ISZ.css': {size: 83, hash: 'E32RobdTPzE', text: () => import('./assets-chunks/styles-U6YR7ISZ_css.mjs').then(m => m.default)}
  },
};
