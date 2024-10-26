import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { getAllMovies } from "../../calls/movies";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import moment from "moment";
import { EditOutlined,DeleteOutlined } from "@ant-design/icons";
import MovieForm from "./MovieForm";
import DeleteMovieModal from "./DeleteMovieModal"

function MovieList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formType, setFormType] = useState("add");
  const [movies, setMovies] = useState([]);
  //editing deletion
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();

  //get all movies
  const getData = async () => {
    dispatch(showLoading());
    const resp = await getAllMovies();
    const allMovies = resp.data;
    setMovies(
      allMovies.map((item) => {
        return { ...item, key: `movie${item._id}` };
      })
    );
    dispatch(hideLoading());
  };
  useEffect(() => {
    getData();
  }, []);

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img
            width="75"
            height="115"
            style={{ objectFit: "cover" }}
            src={data.poster}
            alt="movie poster"
          />
        );
      },
    },
    {
      title: "Movie Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} Min`;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, data) => {
        //can be done using inbuilt lib ?
        return moment(data.releaseData).format("MM-DD-YYYY");
      },
    },
    {
      title: "Action",
      render: (text, data) => {
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setSelectedMovie(data);
                setFormType("edit");
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedMovie(data);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setFormType("add");
          }}
          Add
          Movie
        >Add Movie</Button>
      </div>
      <div>
        <Table dataSource={movies} columns={tableHeadings}></Table>
        {isModalOpen && (
          <MovieForm
            isModalOpen = { isModalOpen }
            setIsModalOpen = { setIsModalOpen }
            selectedMovie = { selectedMovie }
            formType = { formType }
            setSelectedMovie = { setSelectedMovie }
            getData = { getData }
            //
          />
        )}

        {isDeleteModalOpen && (
          <DeleteMovieModal
            isDeleteModalOpen = { isDeleteModalOpen }
            setIsDeleteModalOpen = { setIsDeleteModalOpen }
            selectedMovie = { selectedMovie }
            setSelectedMovie = { setSelectedMovie }      
            getData = { getData }
          />
        )}
      </div>
    </>
  );
}

export default MovieList;