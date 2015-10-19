/* Setup code for jsdom. Create jsdom versions of `document` and `window`
 * objects that would normally be provided by the browser. Then put them
 * in the global object so they will be discovered by React when it
 * accesses `document` or `window`
 */

import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

/* Hoist all jsdom window object properties to Node's global object so that
 * properties provided by window can be used without the `window.`-prefix
 * which is what would happen in a browser environment.
 */
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);