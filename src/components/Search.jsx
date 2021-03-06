var Search = ({ typeSearch, submitSearch }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={() => typeSearch(event)} />
    <button className="btn hidden-sm-down" onClick={() => submitSearch()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
