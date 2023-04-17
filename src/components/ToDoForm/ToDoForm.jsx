import styled from "styled-components";
import { useState } from "react";

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `;

const Form = styled.form`
    display: flex;
    flex-direction: raw;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 1rem;
    `;

const Input = styled.input`
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 4px;
    background: #202020;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    border: none;	
    outline: none;
    box-shadow: 0 0 20px 0 rgba(0,0,0,1);
    &::placeholder{
        color: #55555;
    }
    `;

export const Button = styled.button`
    background: #242424;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    padding: 8px 16px;
    text-align: center;
    border: none;
    box-shadow: 0 0 20px 0 rgba(0,0,0,1);
`;


function ToDoForm(props){
    const {addTodo} = props;
    const [value, setValue] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    return(
        <ContainerForm>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Ingrese una tarea"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                ></Input>
                <Button>Enviar</Button>
            </Form>
        </ContainerForm>
    )

}

export default ToDoForm;