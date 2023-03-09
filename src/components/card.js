import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import React from "react";
import { removeMovie, likeMovie } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Space, Switch } from "antd";

const Cardcomponent = ({ data }) => {
  const dispatch = useDispatch();
  const handleChage = (e, data) => {
    // alert(e)
    if (e === true) {
      if (!data.data.LIKES) {
        if (data.data.DISLIKES) {
          data.data.likes = data.data.likes + 1;
          data.data.dislikes = data.data.dislikes - 1;
          data.data.LIKES = true;
        } else {
          data.data.likes = data.data.likes + 1;
          data.data.LIKES = true;
        }
      }
    } else if (e === false) {
      if (!data.data.DISLIKES) {
        if (data.data.LIKES) {
          data.data.dislikes = data.data.dislikes + 1;
          data.data.likes = data.data.likes - 1;
          data.data.DISLIKES = true;
        } else {
          data.data.dislikes = data.data.dislikes + 1;
          data.data.DISLIKES = true;
        }
      }
    }

    dispatch(likeMovie(data));
  };
  const onDelete = (key) => {
    dispatch(removeMovie(key));
  };

  return (
    <>
      {data?.map((data) => {
        return (
          <Col key={data.id} style={{ margin: "25px",  }}>
                    <Card style={{width:"100%"}}>
              <Card.Body>
                <Card.Title>
                  {data.title}
                  <b></b>
                </Card.Title>
                <br />
                <Card.Text>{data.category}</Card.Text>
                <br />
                <div style={{ display: "flex", gap: "2rem" }}>
                  <Switch onChange={(e) => handleChage(e, { data })} 
                  disabled = {data?.LIKES && data?.DISLIKES}
                  
                  />

                  <Button danger onClick={(e) => onDelete({ data })}>
                    Delete
                  </Button>

                  <br />
                </div>
                <br />
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "10px" }}
                >
                  <Button>
                    <i className="fa fa-thumbs-up" style={{ fontSize: "24px" }}></i>
                    <span style={{ marginLeft: "10px" }}>
                      {" "}
                      {data.likes}
                    </span>{" "}
                  </Button>
                  <Button>
                    <i
                      className="fa fa-thumbs-down"
                      style={{ fontSize: "24px" }}
                    ></i>

                    <span style={{ marginLeft: "10px" }}> {data.dislikes}</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default connect()(Cardcomponent);
