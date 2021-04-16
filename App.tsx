import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Input } from 'native-base';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';



export default function App() {


  const [isReady, setIsReady] = useState(false);
  const [showAddTodoScreen, setShowAddTodoScreen] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "First Item",
      status: true,
    },
    {
      id: 2,
      task: "Second Item",
      status: false,
    },
    {
      id: 3,
      task: "Third Item",
      status: false,
    }
  ]);

  useEffect(() => {
    (
      async() => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setIsReady(true);
      }
    )()
  }, [])

  if(!isReady) {
    return (
      <Text> Loading....!!!! </Text>
      )
  }

  if(showAddTodoScreen) {
    return (
      <Text> <AddTodo /> </Text>
    )
  }

  return (
    <Container>
      <Header>
        <Body style={{ alignItems: "center" }}>
          <Title>Todo App</Title>
        </Body>
      </Header>
      <Content>
        <Text> Todo App </Text>
        <Button full success style={{ margin: 30 }}
                onPress= {()=> {setShowAddTodoScreen(true)}}

        ><Text> Add Todo </Text></Button>
        <TodoList todoList={todoList} />
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
