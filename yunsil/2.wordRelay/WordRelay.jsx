const React = require('react');
const {useState, useRef} = React;

const WordRelay = ()=>{
    const [word, setWord] = useState('하이');
    const [value, setValue] = useState('');
    const [result, setResult] = useState(''); 
    const inputRef = useRef(null);

    const onSubmitForm = (e)=>{
        e.preventDefault();
        if(word[word.length-1] ===value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e)=>{
        setValue(e.target.value);
    }

    //JS에서 for, class 는 예약어이므로 htmlFor, className를 사용한다.
    //-> 렌더 되면 for, class로 바뀐다.
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button id="wordInput" className="wordInput">입력</button>
            </form>
            <div>{result}</div>
        </>
    );    
}

 
//node.js 모듈시스템
module.exports = WordRelay;