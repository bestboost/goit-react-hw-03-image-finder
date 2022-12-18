import styled from 'styled-components'; 

export const Search = styled.header`
top: 0;
left: 0;
position: sticky;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
margin-bottom: ${p => p.theme.space[3]}px;
padding-right: ${p => p.theme.space[5]}px;
padding-left: ${p => p.theme.space[5]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.primary};
background-color: ${p => p.theme.colors.background};
box-shadow: ${p => p.theme.shadows.serchbar};
`; 
  export const Form = styled.form`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 37px;

  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  `; 
export const SearchButton = styled.button`
display: inline-block;
width: 48px;
height: 48px;
border: 0;
// background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;

:hover {
    opacity: 1;
  }
`;

export const SearchLabel = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
clip-path: inset(50%);
border: 0;

`; 

export const SearchInput = styled.input`
display: inline-block;
width: 100%;
font: inherit;
font-size: ${p => p.theme.fontSizes.l}px;
border: none;
outline: none;
padding-left: ${p => p.theme.space[3]}px;
padding-right: ${p => p.theme.space[3]}px;

::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;