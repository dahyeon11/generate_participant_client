import logo from './logo.svg';
import './App.css';
import { Button, Input, IconButton, Chip } from '@mui/material';
import { useRef, forwardRef, useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const inputRef = useRef(null)

  const inputTrigger = useCallback(() => {
    inputRef.current.click()
  }, [inputRef.current])

  const [ file, setFile ] = useState('')

  useEffect(() => {
    console.log(file)
  }, [file])

  const deleteFile = () => {
    setFile('')
  }




  return (
    <div className="App" style={{'height': '100vh'}}>
      <div style={{'display': 'flex', 'height': '100%', 'justify-content': 'center', 'align-items': 'center', 'flex-direction': 'column'}}>
        <div style={{'margin': 'auto 0 auto 0'}}>
        <label htmlFor="contained-button-file">
        <input accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" type='file' ref={inputRef} style={{'display': 'none'}} onChange={setFile.bind(this)} />
        </label>
        <Button variant="contained" alt='123123' onClick={inputTrigger} >Microsoft EXCEL 로 부터 가져오기</Button>

        <div style={{"margin": "0 0 100px 0"}} />
        {file && <Chip label={file.target.value} variant="outlined" onDelete={deleteFile} />}

        <div style={{"margin": "0 0 100px 0"}} />
        
        {file ? <Button variant="contained">보내기</Button> : <Button variant="contained" disabled>보내기</Button>}
        </div>
      </div>
    </div>
  );
}

export default App;
