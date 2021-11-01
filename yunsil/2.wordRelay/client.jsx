//html에서 라이브러리 가져오는것과 달리, node 모듈 시스템에 의한 import
const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

//jsx문법을 사용하면 jsx확장자 파일로 만드는게 시맨틱적으로 좋다.
//jsx는 js문법이 아니기때문에 바벨 필요
ReactDom.render(<WordRelay/>,document.querySelector('#root')); 

