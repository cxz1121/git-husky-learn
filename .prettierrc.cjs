//prettierrc配置
module.exports = {
  printWidth: 120, //一行最多可以有多少字符
  tabWidth: 2, //tab缩进长度
  useTabs: false, //是否使用tab缩进
  semi: false, //语句末尾是否加分号
  singleQuote: true, //是否使用单引号
  trailingComma: 'none', //多行时尽可能尾随逗号
  bracketSpacing: true, //对象大括号直接是否有空格，大括号前后有空格
  endOfLine: 'auto', //换行符，auto表示自动识别
  arrowParens: 'avoid', //箭头函数，只有一个参数的时候是否需要括号
  htmlWhitespaceSensitivity: 'strict', //html的空格敏感度
  vueIndentScriptAndStyle: true //vue文件script和style标签缩进
}
