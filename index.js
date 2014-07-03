/*
 * FOR THE TESTS TO WORK, YOU NEED TO HAVE YOUR EXT JS SDK FOLDER ON THE SAME LEVEL AS THE EXT SCHEDULER/GANTT FOLDER
 */

var Harness = Siesta.Harness.Browser.ExtJS;
var extRoot = '../extjs-5.0.0/';

Harness.configure({
    title : 'Ext Scheduler Test Suite',

    disableCaching                 : false,
    keepResults                    : false,
    overrideSetTimeout             : true,
    preload                        : [
        extRoot + 'packages/ext-theme-classic/build/resources/ext-theme-classic-all.css',
        extRoot + 'build/ext-all-debug.js'

    ]
});

Harness.start.apply(Harness, [
    {
        group  : 'Form fields',
        items : [
            'checkbox.t.js'
        ]
    },
    {
        group  : 'Buttons',
        items : []
    }
]);
