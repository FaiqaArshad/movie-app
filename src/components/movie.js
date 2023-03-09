import { handleInitialData } from "../actions/index";
import { Row } from "react-bootstrap";
import Cardcomponent from "./card";
import { connect } from "react-redux";
import { movieByCategory } from "../actions";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { Button, Input, Space, Pagination, Select } from "antd";

const MovieComponent = (props) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(8);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  useEffect(() => {
    const categ = props?.movies?.map((d) => {
      return d.category;
    });
    const d = categ?.filter((e, i, a) => a.indexOf(e) === i);

    setCategory(d);
  }, [props.movies]);
  const searchCategory = (e) => {
    dispatch(movieByCategory(e));
  };
  const indexOfLastmovie = currentPage * moviePerPage;
  const indexOfFirstmovie = indexOfLastmovie - moviePerPage;
  const currentmovie = props?.movies?.slice(
    indexOfFirstmovie,
    indexOfLastmovie
  );
  const paginate = (pageNumber, pageSize) => {
    console.log(pageSize, "pageSize");
    console.log(pageNumber, "PageNumber");
    setCurrentPage(pageNumber);
    setMoviePerPage(pageSize);
  };
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Select
          placeholder="search movie by category"
          style={{
            width: 600,
            marginTop: "20px",
          }}
          onSelect={searchCategory}
          // mode="multiple"
        >
          {category?.map((e, key) => {
            return (
              <Select.Option key={key} value={e} defaultValue="">
                {e}
              </Select.Option>
            );
          })}
        </Select>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Cardcomponent data={currentmovie} />
          </Row>
        </div>

        <Pagination
          pageSize={moviePerPage}
          total={props?.movies?.length}
          onChange={paginate}
          showSizeChanger
          style={{
            justifyContent: "center",
            display: "flex",
            color: "primary",
          }}
          pageSizeOptions={[4, 8, 12]}
          current={currentPage}
        />
      </Space>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieReducer.movie.movies,
});

export default connect(mapStateToProps)(MovieComponent);
