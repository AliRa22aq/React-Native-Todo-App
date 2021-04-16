import React, { useState } from 'react'
import { StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Input, Form, Item, Label } from 'native-base';


export const AddTodo = (props: any) => {


    const [text, setText] = useState("");

  return (
    <Container>


      <Header>
        <Body style={{ alignItems: "center" }}>
          <Title>Todo App</Title>
        </Body>
      </Header>


      <Content>
              <Form style={{margin: 20}}>
                  <Item stackedLabel>
                      <Label>Add your todo</Label>
                      <Input onChangeText={setText}/>
                  </Item>
                  <Button 
                        full 
                        success 
                        style={{ margin: 30 }} 
                        onPress= {()=> {
                            console.log("Dispatched", text)
                            props.addTodoItem(text)
                            
                            }}> 
                        <Text> Add Please</Text></Button>
              </Form>
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

  