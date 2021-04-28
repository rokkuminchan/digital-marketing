import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import ListNewsElement from "./ListNewsElement";
import { Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "5px",
    paddingRight: "20px",
    paddingLeft: "20px",
    "@media screen and (min-width: 768px)": {
      paddingRight: "5%",
      paddingLeft: "5%",
    },
  },
  searchInput: {
    display: "flex",
    color: "#EAEAEA",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize:"1.5em",
    "@media screen and (max-width: 767px)": {
      paddingTop: "1rem",
    },
  },
  searchIcon: {
    color: "#111",
    marginLeft: 5,
    fontSize:"2.5em"
  },
  pagination: {
    margin: "16px auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    "@media screen and (min-width: 768px)": {
      margin: "24px auto",
    },
  },
}));

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export default function SearchBlogs({ data }) {
  const classes = useStyles();

  const filterNews = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((current) => {
      const blogNews = removeAccents(current.news.toLowerCase());
      return blogNews.includes(removeAccents(query));
    });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const filteredNews = filterNews(data, searchQuery.toLowerCase());

  // Logic for displaying current Blogs

  const blogsPerPage = 5;
  const [page, setPage] = useState(1);

  const LastBlog = page * blogsPerPage;
  const FirstBlog = LastBlog - blogsPerPage;
  const currentBlogs = filteredNews.slice(FirstBlog, LastBlog);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.searchInput}>
        <input
          style={{ width: 300, height: 28 }}
          type="string"
          placeholder="Tìm kiếm ..."
          value={searchQuery}
          onInput={(e) => (setSearchQuery(e.target.value), setPage(1))}
        />
        <SearchIcon className={classes.searchIcon} />
      </div>

      <div>
        {currentBlogs.map((blog, index) => (
          <ListNewsElement data={blog} key={index} />
        ))}
      </div>

      <div className={classes.pagination}>
        <Pagination
          count={
            filteredNews
              ? Math.ceil(filteredNews.length / 5)
              : Math.ceil(data.length / 5)
          }
          color="primary"
          page={page}
          defaultPage={1}
          onChange={handleChange}
          shape="rounded"
          disabled={false}
        />
      </div>
    </Container>
  );
}
