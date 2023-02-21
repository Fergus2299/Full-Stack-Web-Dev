import Navbar from "../components/Navbar.js";
import Welcome from "../components/Welcome";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import ProfileBoard from "../components/ProfileBoard";

function Profile() {
  return (
    <>
      <Header />
      <Navbar />
      <Welcome />
      <SideNav />
      <ProfileBoard />
    </>
  );
}
export default Profile;
