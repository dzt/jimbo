require("console-stamp")(console, {
  colors: {
    stamp: "yellow",
    label: "white",
    metadata: "green"
  }
});

function log(msg, type) {
  switch (type) {
    case "warning":
      console.warn(msg)
      break;
    case "error":
      console.error(msg)
      break;
    case "info":
      console.info(msg)
      break;
    default:
      console.log(msg)
  }
}

console.log("This is a console.log message");
