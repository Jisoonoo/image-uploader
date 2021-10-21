import './App.css';
import { useState } from 'react';
import {Card, CardHeader, CardContent, Avatar, Button, CardMedia} from '@mui/material/'
// import { MoreVert, ThumbUp, Comment, Share } from '@mui/icons-material';
// import ProfilePic from './oreki.jpg'
import MountainPicture from './image.svg'

function App() {

  const [File, setFile] = useState()

  function dropHandler(event) {
    // console.log(event.dataTransfer.items);

    const file = event.dataTransfer.items[0].getAsFile();

    var newFile = new FileReader();

    newFile.onload = function () {
      setFile(newFile);
    }
    newFile.readAsDataURL(file);

    event.preventDefault();
  }
  function dragHandler(ev){
    ev.preventDefault();
  }

  // console.log(File);

  return (
    <div className='container'>
      <Card variant='outlined' className='cardBox' sx={{borderRadius: '6px'}}>
        <CardContent sx={{textAlign: 'center'}}>
          <div style={{fontWeight: 'bold'}} className='text'>Upload your image</div>
          <div style={{fontSize: '12px'}}>File should be JPEG, PNG and GIF</div>
        </CardContent>
        <CardContent
          className = 'pictureUploader'
          onDrop={event => dropHandler(event)}
          onDragOver={event => dragHandler(event)}
        >
          <img
            src={MountainPicture}
            alt=''
            style={{width: '110px', height: '88px', userDrag: 'none'}}
          />
          <div style={{fontSize: '13px'}}>Drag & Drop your image here</div>
        </CardContent>
        <CardContent sx={{textAlign: 'center'}}>
          <div style={{fontSize: '14px', fontFamily: 'sans-serif', color: '#BDBDBD'}}>Or</div>
        </CardContent>
        <Button variant='contained' sx={{textTransform: 'none', marginBottom: '25px'}}>
          Choose a file
        </Button>
      </Card>
    </div>
  );
}

export default App;
