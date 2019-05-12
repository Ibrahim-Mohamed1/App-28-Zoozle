import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      searched: ""
    }
  }

  componentDidMount() {
    this.props.getLove()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getLove(this.state.search)
    this.setState({
      searched: "searched"
    })
  }

  render() {
    const styles = {
      form: {
        textAlign: "center",
        zoom: 2.6,
        marginTop: 10,
      },
      button: {
        display: "block",
        margin: "auto",
        marginTop: "1.5em",
        zoom: .7,
        borderRadius: 5,
        backgroundColor: "#d3d3d396",
      },
      title: {
        textAlign: "center",
        width: "90%",
        display: "block",
        margin: "auto",
        color: "red",
        marginTop: 20,
        fontFamily: "Helvetica",
      }
    }
    const searched = this.props.results.map(article => {
      return (
        <div className='results' key={article.url} style={{ paddingLeft: 15, paddingRight: 15 }}>
          <a href={article.url} target="_blank" el="noopener noreferrer"><h3 style={{ margin: 0, lineHeight: 1.33 }}>{article.title}</h3></a>
          <a href={article.url} target="_blank" el="noopener noreferrer"><p style={{ width: 230, color: 'green', margin: 0, lineHeight: 1.33 }}>{article.url}</p></a>
          <p style={{ margin: 0, marginBottom: 30, lineHeight: 1.33 }}>{article.kwic}</p>
        </div>
      )
    })
    return (
      <div>
        <div style={{ height: 30, padding: "1%" }}>
          <a href="/" style={{ textDecoration: "none", fontSize: 20, margin: 0, marginLeft: 5, display: "inline-block" }}>About</a>
          <a href="/" style={{ textDecoration: "none", fontSize: 20, margin: 0, marginLeft: 15, display: "inline-block" }}>Store</a>
          <div style={{ display: 'inline-block', margin: 0, padding: 0, float: "right" }}>
            <a href="/" style={{ textDecoration: "none", fontSize: 20, margin: 0, marginRight: 15, display: "inline-block" }}>Zmail</a>
            <a href="/" style={{ textDecoration: "none", fontSize: 20, margin: 0, marginRight: 5, display: "inline-block" }}>Images</a>
          </div>
        </div>
        <a style={{ textDecoration: "none" }} href="/"><h1 className='title' style={styles.title}><span style={{ color: '#4285f4' }}>Z</span><span style={{ color: '#ea4334' }}>o</span><span style={{ color: '#fbbc05' }}>o</span><span style={{ color: '#4285f4' }}>z</span><span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4334' }}>e</span></h1></a>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input
            style={{ outline: "none", borderRadius: 10, border: "gray solid", textAlign: "center" }}
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            autoComplete='off'
            placeholder="Search Topic"
            autoFocus
            required
          />
          <button className='button' style={styles.button}>Search</button>
        </form>
        {this.state.searched === "" ?
          null
          :
          <div style={{ marginTop: 40, marginBottom: 10 }}>
            {searched}
          </div>
        }
      </div>
    );
  }
}

export default withData(App);