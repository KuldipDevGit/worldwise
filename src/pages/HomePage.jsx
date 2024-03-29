import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>Home Page</h1>
      <Link to="/app">Go to the APP</Link>
    </div>
  );
}

export default HomePage;
