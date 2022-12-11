const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const inputEl = useRef(null);
  const [first, setFirst] =  useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] =  useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(e.target.value) === first*second){
      setResult('정답입니다!')
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      setValue('')
      inputEl.current.focus();
    } else {
      setResult('틀렸습니다')
      setValue('');
      inputEl.current.focus();
    }
  };
  return (
    <>
      <div>{first} 곱하기 {second} 는?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
