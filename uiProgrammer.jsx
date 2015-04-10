var EditBox = React.createClass({
  handleChange: function(event){

    this.props.onCh(event);
  },
  render: function() {
    var style = {
      display: this.props.val[0] ? 'block' : 'none'
    };
    return (
      <div className="EditBox">
        <label style={style} htmlFor={this.props.ident}>{this.props.plHold}</label>
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
  showTree: function(obj) {
    var str = JSON.stringify(obj)
      .replace(/</g, '&lt;')
      .replace(/,/g, ',\n')
      .replace(/\{/g, '{\n')
      .replace(/\}/g, '\n}');
      return (str);
  },
  render: function() {
    return (
      <div classNameName="app">

        <p>The input box uses React's special "onChange" attribute to fire App.handleChange.</p>
        <EditBox  plHold="Input" ident="input" val={this.state.input} onCh={this.handleChange} />

        <p>App.handleChange sets component state based on the input</p>
        <EditBox  plHold="State" ident="state" val={this.showTree(this.state)} onCh={this.handleChange} />

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
