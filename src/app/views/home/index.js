import React, { Component } from 'react';

class HomePageContainer extends Component {
  static async getInitialProps({ store, req }) {
    //return store.getState();
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          quidem, in tempore, neque cupiditate ducimus incidunt at,
          reprehenderit fuga culpa tenetur ullam suscipit ex ipsa harum optio
          mollitia eaque aspernatur!
        </p>
      </div>
    );
  }
}

export default HomePageContainer;
