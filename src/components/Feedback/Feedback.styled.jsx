import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border-radius: 8px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  border: 2px solid white;
  cursor: pointer;

  background-color: ${p => {
  switch (p.option) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'palevioletred';
    case 'bad':
      return 'blueviolet';
    default:
      return 'blue';
  }
  }};
`

export const Text = styled.p`
  color: red;
`
export const List = styled.ul`
  list-style-type: none;
`
