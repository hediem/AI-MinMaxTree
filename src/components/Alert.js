import React from "react";
import Swal from "sweetalert2";

const Alert = ({ numPlayer }) => {
  console.log("Alert");
  let my_icon = numPlayer == 1 ? "success" : "error";
  return Swal.fire({
    icon: my_icon,
    title: `${numPlayer == 1 ? "Hey..." : "Oops..."} `,
    text: `${numPlayer == 1 ? "You Win" : "You Lost,Computer Win"}`,
  });
};

export default Alert;
