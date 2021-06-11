import styled from 'styled-components';

export const CommentsWrapperStyles = styled.section`
  color: #333;
  min-height: context-height;

  div {
    margin-top: 5px;
    &:not(:last-child) {
    border-bottom: 0.1px dotted white;
  }
  
  span {
    font-style: italic;
    font-size: 0.9em;
    color: #666;
  }
}`;