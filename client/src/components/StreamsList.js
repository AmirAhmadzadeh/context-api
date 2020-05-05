import React, { Component } from 'react'
import StreamsListItem from './StreamsListItem';
import { fetchStreams } from '../store/action/';
import { connect } from 'react-redux';
import classes from './../sass/streamList.module.scss';


class StreamsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchStreams();
  }

  getContent() {
    console.log('amir is here', this.props.streams);
    if (this.props.streams) {
      return this.props.streams.map(streamItem => {
        return <StreamsListItem
          key={streamItem.id}
          des={streamItem.desc}
          title={streamItem.title}
        />
      })
    }
    return 'Loading...';
  }
  render() {
    return (
      <div className={classes.root}>
        {this.getContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: state.streams
  }
}
export default connect(mapStateToProps, {
  fetchStreams
})(StreamsList); 