import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Container, Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';

const App =() =>  {

  const [activities, setActivities] = useState<IActivity[]>([])
  
  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data )
       })
  }, [])

    return (
      <Fragment >
        <NavBar />
        <Container style={{marginTop: '7em'}}>
          <List>
           <List.Item>  {activities.map((activity) => (
             <li key={activity.id}>{activity.title}</li>
             ))}</List.Item>
          </List>
        </Container>
      </Fragment>
    );
}

export default App;
