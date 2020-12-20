import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
      <Grid>
      <Grid.Column width={10}>

          <List>
          <List.Item>  {activities.map((activity) => (
             <li key={activity.id}>{activity.title}</li>
             ))}</List.Item>
          </List>
        </Grid.Column>

      </Grid>
  )
}

export default ActivityDashboard