import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-shrink-0 ">
        <Header />
      </div>
      <div className=" flex flex-col space-y-4 ">
        <div className="flex justify-center">
          <button className="border-2 border-solid border-rose-300 rounded-lg mr-4 font-pop font-semibold p-1 hover:bg-rose-400 hover:text-white">
            <Link to="/notes">All Notes</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-solid border-rose-300 rounded-lg mr-4 font-pop font-semibold p-1 hover:bg-rose-400 hover:text-white">
            <Link to="/archived">Archived Notes</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-solid border-rose-300 rounded-lg mr-4 font-pop font-semibold p-1 hover:bg-rose-400 hover:text-white">
            <Link to="/active">Active Notes</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-solid border-rose-300 rounded-lg mr-4 font-pop font-semibold p-1 hover:bg-rose-400 hover:text-white">
            <Link to="/notes/create">Create Note</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;