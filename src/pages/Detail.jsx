import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getDetailTodo } from '../redux/modules/todo';
import styled from "styled-components";


const Detail = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const paramId = parseInt(param.id)
    dispatch(getDetailTodo(paramId))
    const todos = useSelector((state) => state.todos.todoDetail) //todo list 가져오기
    const {id, title, desc, isDone} = todos

    const DetailCard = (props) => {
        return(
            <CardDiv key={id}>
                    {props.isDone || null}
                    <SpanId>ID : {id}</SpanId>
                    <SpanTitle>{title}</SpanTitle>
                    <SpanDesc>{desc}</SpanDesc>
                    <Link to={`/`} className="prevLink">이전으로</Link>
            </CardDiv>
        )
    }
    //출력
    return(
        !isDone
        ? <DetailCard isDone={<SpanDoneFalse>진행중🔥</SpanDoneFalse>}></DetailCard>
        : <DetailCard isDone={<SpanDoneTrue>완료🎉</SpanDoneTrue>}></DetailCard>
    )
        
}

//styled componenets 영역
const CardDiv = styled.div`
  width: 400px;
  border: 4px solid #fa9370;
  border-radius: 12px;
  min-height: 120px;
  padding: 20px;
  margin: 0 0 15px 20px;
  word-break: break-word;
  background-color:transparent;
  position: relative;
  margin: 200px auto 100px;
`
const SpanId = styled.span`
    
`
const SpanTitle = styled.span`
  display: block;
  margin-top: 22px;
  font-size: 24px;
  font-weight: bold;
`
const SpanDesc = styled.span`
  display: block;
  margin-top: 22px;
`
const SpanDoneTrue = styled.span`
    color:red;
    font-weight: bold;
    position: absolute;
    top: -30px;
    left: 0;
`
const SpanDoneFalse = styled.span`
    color:darkgreen;
    font-weight: bold;
    position: absolute;
    top: -30px;
    left: 0;
`


export default Detail;