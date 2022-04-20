import React, { useEffect , useState} from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const[articles , setArticles]  = useState([])
  const[loading , setLoading]  = useState(true)
  const[page , setPage]  = useState(1)
  const[totalResults , setTotalResults]  = useState(0)
  

  const updateNews = async() =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json(); 
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title =` ${props.category}-Newscaster`;
    updateNews();
    // eslint disable-next-line
  }, [])

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };


  //previous click

  // const handlePrevclick = async () => {
  // setPage : (page - 1)
    // updateNews();
  // };
  
  // // Next ckick

  //  const handleNexclick = async () => {
  // setPage(page + 1)
  //  updateNews();
  // };

    return (
      <>
     
        <h1 className="text-center text-decoration-underline" style={{margin:'35px,0px',marginTop:'70px'}}>
          Today's Top {props.category} News!!
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-4"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize) 
            }
            type="button"
            className="btn btn-dark my-4"
            onClick={this.handleNexclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
}

News.defaultProps ={
  country : 'in',
  pageSize : 8,
  category : 'general',
}
 News.propTypes = {
   country : PropTypes.string,
   pageSize : PropTypes.number,
   category : PropTypes.string,
 }


 export default News;
