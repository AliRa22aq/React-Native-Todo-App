import { List, ListItem, Text, CheckBox, Icon, View } from 'native-base'
import React from 'react'

const TodoList = ({todoList, setTodoList}: any) => {
    console.log(todoList)

    const updateCheckbox = (id: number) => {
        const updatedList = todoList.map((item: any)=> {
            if(item.id == id){
                return {
                    ...item, status: !item.status
                }
            }
            return item
        })

        setTodoList(updatedList)
    }

    const deleteTodo = (id: number) => {
        const updatedList = todoList.filter((item:any) => {return (item.id != id)})
        setTodoList(updatedList)
    }
    deleteTodo

    return (
        <List>
           { todoList.map((item: any) => (
                 <ListItem key={item.id}> 
                 <Text  style={{flex:1}}> {item.id} </Text>
                 <View style={{flex:1}}>
                 <CheckBox 
                 onPress={()=> updateCheckbox(item.id)}
                 checked={item.status}  />
                 </View>
                 <Text  style={{flex:5}}> {item.task} </Text>
                 <Icon 
                 onPress={()=> deleteTodo(item.id)}
                 name='trash'  style={{flex:1}} />
                 </ListItem>
            ))}
           
        </List>

    )
}

export default TodoList
