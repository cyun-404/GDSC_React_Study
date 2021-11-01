const path = require('path'); //node에서 제공하는 경로 조작 라이브러리
const webpack = require('webpack');

module.exports = {
  mode: 'development', //배포용
  devtool: 'inline-source-map', //개발 시 inline-source-map, 배포시 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  //=========================================================================
  /**
   * [웹팩 내부 순서]
   * 1) entry(입력/병합할 파일) 읽음
   * 2) module(=loaders) 적용
   * 3) plugins(웹팩의 합치는 entry, module, output 외의 확장 프로그램) 적용
   * 4) output(출력/병합 결과물)으로 병합
   */
  //=========================================================================

  entry: {
    //WordRelay, react, react-dom는 client에서 import하기 때문에 웹팩이 알아서 인식해줌
    //css, js(x), json등 모든 파일 가능
    //resolve 설정 시, 확장자 넣지 않아도 된다.    
    app: './client',
  },
  module: {
    rules: [{
      //rule 적용할 파일들 (js, jsx)
      test: /\.jsx?$/,
      //적용할 rule -> babel 적용 
      loader: 'babel-loader',
      //babel-loader 옵션들
      options: {
        //presets : 플러그인들의 묶음
        presets: [
          //{} : @babel/preset-env에 대한 설정
          ['@babel/preset-env', {
            targets: {
              /**
               * 바벨에 브라우저에 맞춰 최신문법을 구문법으로 맞춰주는데, 적용해야할 브라우저가 많으면 바벨이 할일이 많아져 느려지므로 제한 필요
               * browserslist 사이트에서 해당 옵션 찾기 ex. '> 5% in KR' : 한국에서 점유율 5% 이상인 브라우저
               */
              //browsers: ['> 1% in KR'], //문법바뀜 -> package.json에 browserslist로 추가
            },
            debug: true,  //개발용일때
          }],
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  plugins : [
    //모든 loader > options에 debug : true 적용 
    //new webpack.LoaderOptionsPlugin({ debug : true }),
  ],
  output: {
    filename: 'app.js',
    //경로 합치기 -> 현재폴더(D:\react-game\2.끝말잇기\dist) + (현재폴더 하위의) dist 폴더
    path: path.join(__dirname, 'dist'),
  },
};