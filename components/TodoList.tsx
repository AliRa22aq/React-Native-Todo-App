import { List, ListItem, Text, CheckBox, Icon, View } from 'native-base'
import React from 'react'

const TodoList = ({todoList}: any) => {
    console.log(todoList)
    return (
        <List>
           { todoList.map((item: any) => (
                 <ListItem key={item.id}> 
                 <Text  style={{flex:1}}> {item.id} </Text>
                 <View style={{flex:1}}>
                 <CheckBox checked={item.status}  />
                 </View>
                 <Text  style={{flex:5}}> {item.task} </Text>
                 <Icon name='trash'  style={{flex:1}} />
                 </ListItem>
            ))}
           
        </List>

    )
}

export default TodoList
