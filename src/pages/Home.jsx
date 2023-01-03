import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, doneTodo } from '../redux/modules/todo';
import styled from "styled-components";
import '../reset.css'
import '../main.css'
import TodoCard from '../components/TodoCard';


const Home = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  
  const todos = useSelector((state) => state.todos.todos) //todo list 가져오기

  const addListHandler = (e)=>{
    const newTodo={
      title:title,
      desc:desc,
      isDone:false
    }
    e.preventDefault()
    dispatch(addTodo(newTodo));
    setTitle('')
    setDesc('')
  }

  const deleteListHandler = (todoId)=>{
    dispatch(deleteTodo(todoId));
  }

  const doneListHandler = (todoId)=>{
    dispatch(doneTodo(todoId));
  }

  //출력

  return (
    <Wrap>
      <Form action="#" onSubmit={addListHandler}>
        <FormInputBox>
          <Label>제목</Label>
          <Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
          <Label>내용</Label>
          <Input type='text' value={desc} onChange={(e)=>setDesc(e.target.value)} width="350" required/>
        </FormInputBox>
        <ButtonAdd>추가하기</ButtonAdd>
      </Form>
      <Section>
        <Article>
          <H3>Working🔥</H3>
          <Ul>
            {todos.map((todo) => {
                  return(
                    !todo.isDone
                    && <TodoCard key={todo.id} todo={todo} 
                    deleteListHandler={deleteListHandler} doneListHandler={doneListHandler}></TodoCard>
                  )
            })}
          </Ul>
        </Article>
        <Article>
          <H3>Done🎉</H3>
          <Ul>
          {todos.map((todo) => {
                return(
                    todo.isDone
                    && <TodoCard key={todo.id} todo={todo} 
                    deleteListHandler={deleteListHandler} doneListHandler={doneListHandler} 
                    bgColor="#d2d2d2"></TodoCard>
                )
            })}
          </Ul>
        </Article>
      </Section>
    </Wrap>
  );
};

//styled components 영역

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto 20px;
`
const Form = styled.form`
  background-color: #ededed;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
const FormInputBox = styled.div`
    display:flex;
    width:80%;
    align-items: center;
`

const Label = styled.label`
  font-weight: bold;
  width: 5%;
`
const Input = styled.input`
  margin: 0 20px;
  border: none;
  padding: 10px;
  width: ${(props)=> props.width || '250'}px;
  border-radius: 10px;
`
const ButtonAdd = styled.button`

    width: 140px;
    height: 40px;
    border: none;
    background-color: #fa9370;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    :hover{
        background-color: #f44408;
    }
`
const Section = styled.section`
  margin-top: 30px;
  padding: 10px 30px;
`
const Article = styled.article`
`
const H3 = styled.h3`
  font-size: 28px;
  font-weight: bold;
`
const Ul = styled.ul`
  margin: 20px 0 40px;
  display: flex;
  flex-wrap: wrap;
`



export default Home;