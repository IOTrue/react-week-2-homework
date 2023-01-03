import { Link } from 'react-router-dom';
import styled from "styled-components";
import '../reset.css'
import '../main.css'


const TodoCard = (props) => {
    const {todo, bgColor, deleteListHandler, doneListHandler} = props
    const {id, title, desc, isDone} = todo
    return(
        <TodoLi key={id} bgColor={bgColor || "transparent"}>
            <Link to={`/detail/${id}`} className="link">상세보기</Link>
            <SpanTitle>{title}</SpanTitle>
            <SpanDesc>{desc}</SpanDesc>
            <ButtonWarp>
            <ButtonDelete onClick={()=>{deleteListHandler(id)}}>삭제하기</ButtonDelete>
            <ButtonDone onClick={()=>doneListHandler(id)}>
                {!isDone ? '완료' : '취소'}
            </ButtonDone>
            </ButtonWarp>
        </TodoLi>
    )
}


//styled components 영역

const TodoLi = styled.li`
width: 23%;
border: 4px solid #fa9370;
border-radius: 12px;
min-height: 160px;
padding: 10px 20px;
margin: 0 0 15px 20px;
word-break: break-word;
background-color: ${(props)=> props.bgColor || 'transparent'};
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
const ButtonWarp = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`
const ButtonDelete = styled.button`
border: 1px solid red;
background-color: transparent;
padding: 8px 40px;
border-radius: 10px;
cursor: pointer;
:hover{
  background-color: red;
  color: #fff;
  font-weight: bold;
}
`
const ButtonDone = styled.button`
border: 1px solid darkgreen;
background-color: transparent;
padding: 8px 40px;
border-radius: 10px;
cursor: pointer;
margin-left: 10px;
:hover{
  background-color: darkgreen;
  color: #fff;
  font-weight: bold;
}
`




export default TodoCard;