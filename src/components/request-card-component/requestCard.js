import { Component } from "react";
import "./requestCard.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import Navbar from "../navbar/navbar";
class RequestCard extends Component {
  constructor() {
    super();
    console.log("construtor request");

    this.state = {
      requestedStudents: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount request");
    // fetch("https://nith-portal-11-qsje.onrender.com/api/v1/student?search=")
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
              requestedStudents: users.data,
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
    const { requestedStudents, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredRequestedStudents = requestedStudents.filter((student) =>
      student.Name.toLowerCase().includes(searchField)
    );

    return (
      <div>
        <Navbar onSearchChange={onSearchChange} />
        <div className="card-list bg-blue-200">
          {filteredRequestedStudents.map((student) => {
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
                  <h2>{`${Name} (${roll})`}</h2>
                </div>
                <div className="reason_section">
                  <p>
                    {`Place To Go = ${address} `}
                    {/* <h2>{`${roll}`}</h2> */}
                  </p>
                  <p>Reason = {description}</p>
                </div>
                <div className="buttons flex justify-around">
                  <div
                    class="inline-flex justify-around rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="submit"
                      class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-indigo-900 dark:hover:bg-white dark:focus:bg-white"
                    >
                      <DoneIcon />
                      Approved
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-indigo-900 hover:text-indigo-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-indigo-900 dark:hover:bg-white dark:focus:bg-white"
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

export default RequestCard;
