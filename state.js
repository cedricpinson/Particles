/** -*- compile-command: "jslint-cli state.js" -*-
 *
 * Copyright (C) 2011 Cedric Pinson
 *
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Authors:
 *  Cedric Pinson <cedric.pinson@plopbyte.net>
 *
 */

var targetOrigin = '*'; // This will be the gallery url, but for testing '*' is easier
var DemoState = {
    running: false,
};

window.addEventListener("message", function(e) {
    if ("start_demo" == e.data) {
        DemoState.running = true;

    } else if ("stop_demo" == e.data) {
        DemoState.running = false;
        window.parent.postMessage('finished_exit', targetOrigin);

    } else if ("auto_play_mode" == e.data) {
        /* OPTIONAL PART OF THE PROTOCOL! HARDCODED FOR TESTING */
        setTimeout(function () {
            window.parent.postMessage('show_exit_ui', targetOrigin);
        }, 5000);
    }
}, false);


window.addEventListener("load", function() {

    webGLStart();
    //  viewer.setScene(createScene());
    //  viewer.run();

    window.parent.postMessage('loaded', targetOrigin);
    if (AutoStart === true) {
        window.postMessage('start_demo', targetOrigin);
    }
} ,true);


