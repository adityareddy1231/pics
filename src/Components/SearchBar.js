import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="massive ui label">
              <h1>Image Search</h1>
            </label>
            <div className="ui massive action input">
              <input
                type="text"
                placeholder="Enter required image here.."
                onChange={e => this.setState({ input: e.target.value })}
                value={this.state.input}
              />
              <div className="ui button" onClick={this.onFormSubmit}>
                Search
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
