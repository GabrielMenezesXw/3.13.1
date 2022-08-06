import "./styles.css";
import { Box } from "./Box.js";

export default function App() {
  const box = Box();

  return (
    <nav className="template">
      <Box />
    </nav>
  );
}
