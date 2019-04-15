import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data:'',
      redirect: false
    }

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.fetchData();
    console.log(this.state.data);
  }
  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Your favorite flavor is: ' + this.state.data.first);
    console.log(this.state.data);

  }

    fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch(`http://localhost:8090/beyneksper/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))

      console.log(this.state.data)
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.data.id} onChange={this.handleChange.bind(this)}>
            <option value="id">{this.state.data.id}</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
