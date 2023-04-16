import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #202020;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,1);
`;
const Titulo = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;


function ContainerForm({children}){
    return(
        <Container>
            <Titulo>ToDo List</Titulo>
            {children}
        </Container>
    );
}

export default ContainerForm;