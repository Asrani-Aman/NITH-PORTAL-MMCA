import { Component } from "react";
import "./card-list.styles.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
class CardList extends Component {
  render() {
    console.log("render from Cardlist");
    const { students } = this.props; // whenever props will change component willl re render
    return (
      <div className="card-list bg-blue-200">
        {students.map((student) => {
          const { name, _id, roll } = student;
          return (
            <div className="card-container " key={_id}>
              <div className="image-section">
                <img
                  className="card__image"
                  alt={`monster ${name}`}
                  src={`https://robohash.org/${_id}?set=set743587&size=180x180`}
                ></img>
              </div>
              <div className="name_section">
                <h2>{`${name} (${roll})`}</h2>
              </div>
              <div className="reason_section">
                <p> Reason:-Reason here</p>
              </div>
              <div>
                <div class="inline-flex rounded-md shadow-sm" role="group">
                  <form
                    method="POST"
                    action="https://nith-portal-11-qsje.onrender.com/api/v1/form/mmca/63b70c3560453daebe657708"
                  >
                    <button
                      type="submit"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <DoneIcon />
                      APPROVE
                    </button>
                  </form>
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <CloseIcon />
                    DENY
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <PauseOutlinedIcon />
                    HOLD
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;

/////////////////////////////////////

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
