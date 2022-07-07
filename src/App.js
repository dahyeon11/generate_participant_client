import logo from './logo.svg';
import './App.css';
import { Button, Input, IconButton, Chip } from '@mui/material';
import { useRef, forwardRef, useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const inputRef = useRef(null)

  const inputTrigger = useCallback(() => {
    inputRef.current.click()
  }, [inputRef.current])

  const [ file, setFile ] = useState('')

  useEffect(() => {
    console.log(file)
    //console.log(inputRef.current, '123')
  }, [file])

  const deleteFile = () => {
    setFile('')
    inputRef.target.value = ''
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file.target.files[0]);
    //formData.append("comment", commentValue);
    //formData.append("content_id", classData.content_id);

    axios({
      method: "post",
      url: 'http://localhost:2645/xlsx',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    });

  }




  return (
    <div className="App" style={{'height': '100vh'}}>
      <div style={{'display': 'flex', 'height': '100%', 'justify-content': 'center', 'align-items': 'center', 'flex-direction': 'column'}}>
        <div style={{'margin': 'auto 0 auto 0'}}>
        <label htmlFor="contained-button-file">
        <input accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" type='file' ref={inputRef} style={{'display': 'none'}} onChange={setFile.bind(this)} />
        </label>
        <Button variant="contained" alt='123123' onClick={inputTrigger} >Microsoft EXCEL 로 부터 가져오기</Button>

        <div style={{"margin": "0 0 60px 0"}} />
        {file && <Chip label={file.target.value} variant="outlined" onDelete={deleteFile} />}

        <div style={{"margin": "0 0 60px 0"}} />
        
        {file ? <Button variant="contained" onClick={handleSubmit}>보내기</Button> : <Button variant="contained" disabled>보내기</Button>}
        </div>
      </div>
    </div>
  );
}

export default App;
