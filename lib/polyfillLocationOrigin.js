/*
# polyfillLocationOrigin

Brought to you by [Use All Five, Inc.](http://www.useallfive.com)

```
Author: Bret Morris <bret@useallfive.com>
Author URI: [http://www.useallfive.com](http://www.useallfive.com)
Repository: https://github.com/UseAllFive/polyfillLocationOrigin
```

Poyfill for window.location.origin
 */

define(function() {
    // Set portPrepend to an empty string.
    // '' will be used if window.location.port is empty.
    var portPrepend = '';
    // Set window.location.origin if not supported (IE).
    if (!window.location.origin) {
        if (window.location.port !== '') {
            // Prepend the port with a colon.
            portPrepend = ':';
        }
        // Set window.location.origin to match what default 
        // implenetation of window.location.origin in browsers
        // that support it (Chrome).
        window.location.origin = window.location.protocol + '//' + window.location.hostname + portPrepend + window.location.port;
    }
    // AMD modules should return something.
    return {};
});