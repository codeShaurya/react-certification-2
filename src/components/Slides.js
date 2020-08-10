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
    if (index === 0) {
      return;
    }

    this.setState({ index: 0 });
  };

  render() {
    const { slides } = this.props;
    const { index } = this.state;

    return (
      <div>
        <div id="navigation" className="text-center">
          <button
            disabled={index === 0 ? true : false}
            data-testid="button-restart"
            className={"small outlined"}
            onClick={index !== 0 ? this.rs : null}
          >
            Restart
          </button>
          <button
            disabled={index === 0 ? true : false}
            data-testid="button-prev"
            className={"small"}
            onClick={this.prev}
          >
            Prev
          </button>
          <button
            data-testid="button-next"
            disabled={index === slides.length - 1 ? true : false}
            className={"small"}
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
