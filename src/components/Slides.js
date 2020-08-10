import React from 'react';

class Slides extends React.Component {
  state = {
    index: 0,
  };

  next = () => {
    const { slides } = this.props;
    const { index } = this.state;
    if (index >= slides.length - 1) {
      return;
    }

    this.setState({ index: index + 1 });
  };

  prev = () => {
    const { slides } = this.props;
    const { index } = this.state;
    if (index <= 0) {
      return;
    }

    this.setState({ index: index - 1 });
  };

  rs = () => {
    const { slides } = this.props;
    const { index } = this.state;
    if (index == 0) {
      return;
    }

    this.setState({ index: 0 });
  };

  render() {
    const { slides } = this.props;
    const { index } = this.state;

    const classname = "small disabled";

    return (
      <div>
        <div id="navigation" className="text-center">
          <button
            data-testid="button-restart"
            className={index == 0 ? classname : "small outlined"}
            onClick={this.rs}
          >
            Restart
          </button>
          <button
            data-testid="button-prev"
            className={index == 0 ? classname : "small"}
            onClick={this.prev}
          >
            Prev
          </button>
          <button
            data-testid="button-next"
            className={index == slides.length - 1 ? classname : "small"}
            onClick={this.next}
          >
            Next
          </button>
        </div>
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{slides[index].title}</h1>
          <p data-testid="text">{slides[index].text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
