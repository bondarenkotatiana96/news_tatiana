import React from 'react';
import { CommentsWrapperStyles } from '../styles/CommentsWrapperStyles';

class StoryComments extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }
  
  async componentDidMount() {
    this._isMounted = true;

    const result = await Promise.all(this.props.comments.map((kid) => 
      fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`)
        .then((response) => response.json())
        .then((data) => [data.by, data.text]
        )));
        (this._isMounted) && this.setState({comments: result});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <CommentsWrapperStyles>
        <h4>Comments</h4>
            
        {this.state.comments.map(comment => {
          return (
            <div>
              <span>by: {comment[0]}</span>
              <p dangerouslySetInnerHTML={{ __html: comment[1] }}></p>
            </div>
          )
        })}
      </CommentsWrapperStyles>
    );
  }
}

export default StoryComments;