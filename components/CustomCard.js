import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = (props) => (
  <Card style={{marginHorizontal : 12,marginBottom: 8,}} onPress={props.onPress}>
    <Card.Content>
      <Text variant="titleSmall" style={{color : "#1F415B",fontWeight : "400",marginBottom : 10}}>{props.title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: props.image }}/>
    <Card.Content>
      <Text variant="bodyMedium">{props.price}</Text>
      <Text variant="bodyMedium">{props.rating}</Text>
      <Text variant="bodyMedium">{props.description}</Text>
    </Card.Content>
  </Card>
);


export default CustomCard