import { Component } from "react";

import "./styles.css";
import { Posts } from "../../posts";

import { loadPosts } from "../../utils/load-posts";
import Button from "../../components/Button";
import { TextInput } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
    // .then(response => response.json())
    //   .then(posts => this.setState({ posts }))
  }
  loadPosts = async () => {
    const { posts, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(posts, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePost = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue, } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;

    const filterPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <section className="container">
        <div className="seacher-container">
        {!!searchValue && (
          
            <h1>Search value: {searchValue}</h1>
         
        )}

        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
     
        {filterPosts.length > 0 && (
          <Posts posts={filterPosts} />
        )}
         {filterPosts.length === 0 && (
          <p>Não existe este post</p>
        )}

        <div className="btn-container">

          {!searchValue && (
            <Button

              text="Loading"
              onClick={this.loadMorePost}

              disabled={noMorePost}
            />

          )}

        </div >
      </section>
    );
  }
}

export default Home;
