const{override,addDecoratorsLegacy,fixBabelImports,addLessLoader,addWebpackAlias }=require('customize-cra');
const path = require("path");
module.exports=override(
    // 添加装饰器语法
    addDecoratorsLegacy(),
    // antd 组件按需加载
    fixBabelImports('import', {
            libraryName: 'antd',
            ibraryDirectory: 'es',
            style: true,
        }
    ),
    // 使用 Less
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
);