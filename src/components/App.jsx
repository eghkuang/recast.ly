// import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoList from './VideoList.js'; //
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'videoList': [],
      'currentVideo': null,
      'searchTerm': ''
    };
    this.clickHandle = this.clickHandle.bind(this);//always bind in constructor
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    searchYouTube(this.state.searchTerm, (data) => this.setState({ 'videoList': data, 'currentVideo': data[0] }));
  }

  clickHandle(selectedVideo) {
    this.setState({
      'videoList': this.state.videoList,
      'currentVideo': selectedVideo
    });
  }

  handleChange(event) {
    this.setState({ 'searchTerm': event.target.value });
  }

  render() {
    return (
      <div>
        <img src="src/lib/download.jpeg" alt="logo" class="center"/>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search typeSearch={this.handleChange} submitSearch={this.componentDidMount}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>{this.state.currentVideo ? <VideoPlayer video={this.state.currentVideo} /> : null }</div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} clicked={this.clickHandle} /></div>
          </div>
        </div>
      </div >
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


/*
- onclick
  how do we add it to videolistentry
  are we using clicked prop correctly down the hierarchy?
- heirarchy
  do we have the correct hierarchy?
- why do we need to wrap onClick={() => clicked(video)} in an anonymous function in order for it to work in videolistentry
  - best way is to bind in the constructor. easier way to keep track

-- cant connect videolist with app on the current ideo
//why doesnt this.state.currentVideo work for line 33
*/