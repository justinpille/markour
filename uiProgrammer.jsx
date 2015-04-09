var EditBox = React.createClass({
  handleChange: function(event){

    this.props.onCh(event);
  },
  render: function() {
    return (
      <div className="EditBox">
        <label htmlFor={this.props.ident}>{this.props.plHold}</label>
        <textarea placeholder={this.props.plHold} id={this.props.ident} value={this.props.val} onChange={this.handleChange}></textarea>
      </div>
    );
  }
});

var App = React.createClass({
  getInput: function() {
    return $('#input').html();
  },
  getInitialState: function() {
    return {
      input: "",
      lines: []
    };
  },
  handleChange: function(event) {
    var input = event.target.value;
    this.setState({
      input: input,
      lines: input.split(/\r?\n|\r/)
    });
  },
  render: function() {
    return (
      <div classNameName="app">

        <h1>Input:</h1>
        <p>Saved in <code>App.state.input</code></p>
        <EditBox  plHold="Input" ident="input" val={this.state.input} onCh={this.handleChange} />

        <p>Input is passed to a func: <code>App.mkLines</code>, that returns an array where each item is a line of text</p>
        <EditBox  plHold="Make Lines" ident="mkLines" val={this.state.lines} onCh={this.handleChange} />

        <p>Arr: <code>mkLocations</code> stores the line numbers where a rule declaration (::mk) exists</p>
        <textarea id="mkLocations" onBlur={this.update}></textarea>

        <p>Another func: <code>getVal</code> uses <code>mkLocations</code> and returns values of the next line after mk declarations. These are the user-defined patterns.</p>
        <textarea id="patternVals" onBlur={this.update}></textarea>

        <p>The same func <code>(getVal)</code> is asked for values of the second line after mk declarations. These are the user-defined effects.</p>
        <textarea id="effectVals" onBlur={this.update}></textarea>

        <p>Is Seperated into two parts</p>
        <h2>One is text</h2>
        <textarea id="text" onBlur={this.update}></textarea>
        <h2>The other is data</h2>
        <textarea id="data" onBlur={this.update}></textarea>

        <p>Then the two parts are reconciled</p>
        <textarea id="rendered" onBlur={this.update}></textarea>

      </div>
    );
  }
});
React.render(
  <App />,
  document.getElementById('content')
);
