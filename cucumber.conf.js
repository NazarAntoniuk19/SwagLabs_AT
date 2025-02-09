export const config = {
    runner: 'local',
    specs: [
        './test-cucumber/features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',
        ['cucumberjs-json', {
            jsonFolder: '.tmp/json/',
            language: 'en',
        },
    ],],
    cucumberOpts: {
        require: ['./test-cucumber/features/step-definitions/**/*.js'], // Path to step definitions
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: true,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    }
}
