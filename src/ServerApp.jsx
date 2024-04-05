import { renderToPipeableStream } from "react-dom/server"; //run our application into a node stream which progressively renders our app.
import { StaticRouter } from "react-router-dom/server"; //react router that can be run in node
import App from "./App";

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );

  return stream;
}
