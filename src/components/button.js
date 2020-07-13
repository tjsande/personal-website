import React from 'react';

class Button extends React.Component {
  render() {
    return (
        <a class="button" href={this.props.buttonLink}>
        <img class="buttonIcon" align="left" src={this.props.icon} alt=''></img>
            {this.props.buttonText}
      </a>
    );
  };
}

export default Button