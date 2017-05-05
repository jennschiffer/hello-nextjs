import React from 'react'
import Markdown from 'react-markdown'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore, loadChapter } from '../store'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

class Chapter extends React.Component {
  static getInitialProps ({ query: { chapter }, store, chapterContent }) {
    store.dispatch(loadChapter(chapter));
    return { chapterContent }
  }
  
  render() {
    return (
      <div>
        <Header />
      
        <Markdown source={this.props.chapterContent} />
      
        <Navigation />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadChapter: bindActionCreators(loadChapter, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Chapter)