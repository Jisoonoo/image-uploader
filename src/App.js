import './App.css';
import {Card, CardHeader, CardContent, Avatar, IconButton, CardMedia} from '@mui/material/'
import { MoreVert } from '@mui/icons-material';
import ProfilePic from './oreki.jpg'

function App() {

  const date = new Date();
  
  console.log(date);

  return (
    <div className='container'>
      <Card variant='outlined' className='cardBox'>
        <CardHeader
          avatar={
            <Avatar sx={{backgroundColor: 'red'}} arial-label='recipe'>
              R
            </Avatar>
          }
          title='Oreki'
          subheader='ochigdor'
          action={
            <IconButton>
              <MoreVert/>
            </IconButton>
          }
        />
        <CardMedia
          component='img'
          image={ProfilePic}
          alt='trash'
        />
        <CardContent>
          ASd
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
