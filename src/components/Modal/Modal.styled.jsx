import styled from 'styled-components'; 

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);

`;

export const Modal = styled.div`
position: absolute;
top: 10%;
left: 20%;
transform: translate (-50%, 50%);
display: flex;
justify-content: center;
align-items: center;
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
width:60%;
height: 80%;
padding: ${p => p.theme.space[5]}px;
color: ${p => p.theme.colors.red};
background-color: ${p => p.theme.colors.primary};

`;
 
export const ModalImage = styled.img`
position: absolute;
transform: translate (-50%, 50%);
display: flex;
justify-content: center;
align-items: center;
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
width:100%;
height: 100%;

 `;