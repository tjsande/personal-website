import React from 'react';
import Button from '../components/button.js';

class Card extends React.Component {
  render() {
    return (
        <div class="card">
            <h2 id="cardTitle">{this.props.title}</h2>
            <p class="buttonDescription">{this.props.description}</p>
            <div id="cardButtonWrapper">
                <Button
                    iconLink={this.props.iconLink}
                    buttonLink={this.props.buttonLink}
                    buttonText={this.props.buttonText}
                />
            </div>
        </div>
    );
  };
}

export default Card