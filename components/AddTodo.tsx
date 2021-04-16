import React from 'react'
import { StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Input } from 'native-base';


const AddTodo = () => {

    return (
        <Container>

        <Header>
          <Body style={{ alignItems: "center", flex:5 }}>
            <Title>Todo App</Title>
          </Body>
        </Header>

        <Content>
          <Text> Todo App </Text>
          <Button full success style={{ margin: 30 }}><Text> Add </Text></Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
}

export default AddTodo
