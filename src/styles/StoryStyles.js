import styled from 'styled-components';

export const StoryWrapper = styled.section`
padding-top: 10px;
margin-bottom: 20px;
border-top: 1px solid #ccc;
min-height: 180px;
position: relative;

&:first-of-type {
  border-top: 0;
}

&:last-of-type {
  margin-bottom: 0;
  padding-bottom: 0;
}
`;

export const StoryTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #444;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }

  i {
    color: #C88888;
    margin-left: 10px;
    vertical-align: middle;
    cursor: pointer;
  }
`;

export const StoryDetails = styled.div`
  font-style: italic;
  padding-top: 20px;

  a {
    text-decoration: none;
    color: white;
    background-color: #C88888;
    font-style: normal;
    padding: 5px 10px;
    position: absolute;
    bottom: 0;

    &:hover {
      background-color: #C99;
    }

    &:active {
      background-color: #C89;
    }
  }

  p {
    position: absolute;
    bottom: 0;
    right: 10%;

    &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  }

  .arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
  }

  .down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  }

  .up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  }

  > span:not(:first-child):before {
    content: '';
    margin: 0 7px;
    font-style: italic;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: #C88888;
`;