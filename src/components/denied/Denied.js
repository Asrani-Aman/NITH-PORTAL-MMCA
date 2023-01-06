import { Component } from "react";
import "../students-card-list/card-list.styles.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../navbar/navbar";
class Denied extends Component {
  constructor() {
    super();
    console.log("construtor request");

    this.state = {
      acceptedStudents: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount request");
    fetch("https://nith-portal-11-qsje.onrender.com/api/v1/form/show")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => {
        // whenever set state i called rneder function is re called
        this.setState(
          () => {
            console.log(users.data);
            return {
              acceptedStudents: users.data,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  onSearchChange = (event) => {
    // event.preventDefault();
    const searchField = event.target.value.toLowerCase();
    // console.log(event.target.value);
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");
    const { acceptedStudents, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredacceptedStudents = acceptedStudents.filter((student) =>
      student.Name.toLowerCase().includes(searchField)
    );
    const newFilteredacceptedStudents = acceptedStudents.filter(
      (student) => student.mmcaVerified === false
    );

    return (
      <div>
        <Navbar onSearchChange={onSearchChange} />
        <div className="card-list bg-blue-200">
          {newFilteredacceptedStudents.map((student) => {
            const { Name, _id, roll, address, description } = student;
            return (
              <div className="card-container-request " key={_id}>
                <div className="image-section">
                  <img
                    className="card__image"
                    alt={`monster ${Name}`}
                    src={`https://robohash.org/${_id}?set=set743587&size=180x180`}
                  ></img>
                </div>
                <div className="name_section">
                  <h2>{`${Name}`}</h2>
                </div>
                <div className="reason_section">
                  <h2>{`${roll}`}</h2>
                </div>
                <div className="buttons flex justify-around">
                  <div
                    class="inline-flex justify-around rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <CloseIcon />
                      Denied
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Denied;
