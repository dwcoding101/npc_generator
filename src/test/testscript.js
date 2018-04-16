
// Jasmine test runner
var path = require('path');
var fs = require('fs');
var argv = require('yargs')
    .usage('Usage: $0 -d --testBundle=*filepath*')
    .demandOption(['testBundle'])
    .argv;


// if -d as an input the args get displayed
if(argv.d) {
    // used to debug argument input
    console.log('Argument input debug');
    
    // display test bundle file if declared
    if(argv.testBundle) {
        console.log('--testBundle = ' + argv.testBundle );
    }   
}

if (!fs.existsSync(path.resolve(argv.testBundle))) {
    console.log("Error: --testBundle=%s doesn't exist", path.resolve(argv.testBundle));
    process.exit();
}

// initialize and execute
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: true,
    emoji: true,         // boolean or emoji-map object
    beep: true
});
 
// add in the new reporter to jasmine
jasmine.env.clearReporters();
jasmine.addReporter(reporter);

// run the test bundle
jasmine.execute([argv.testBundle]);