import React from "react";

export default class Content extends React.Component {
  render() {
    return <a href={this.props.url}>{this.props.url}</a>;
  }
}
