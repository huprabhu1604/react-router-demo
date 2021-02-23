import './App.css';
import {Route, Link} from 'react-router-dom';

const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>Home Page</h1>
    </div>
  )
}

const TopicsList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topics List Page</h1>
      <Link to={`${props.match.url}/13`}>To Topics 13</Link>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic Detail Page {props.match.params.topicsId}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/topics" component={TopicsList}/>
      <Route path="/topics/:topicsId" component={TopicDetail}/>
    </div>
  );
}

export default App;
