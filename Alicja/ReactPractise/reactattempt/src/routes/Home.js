import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import SideNav from "../components/SideNav";
import Board from "../components/Board";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Welcome />
      <SideNav />
      <Board />
    </>
  );
}
export default Home;
