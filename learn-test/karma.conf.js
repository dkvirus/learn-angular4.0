// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // 定义了files配置的基础文件路径。
    basePath: '',
    // 指定使用何种测试框架
    frameworks: ['jasmine', '@angular/cli'],
    // 插件
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    // 测试报告配置
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    // 表示当修改了测试或者被测试文件时，是否重新执行测试用例。
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
