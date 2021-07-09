import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../store/action/userAction";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="h-screen w-screen bg-blue-700 flex items-center justify-center">
        <div className="w-72 h-60h bg-blue-600 mx-3 md:mx-0 text-center rounded  shadow-lg">
          <h1 className="font-bold my-3 capitalize text-lg">Home Page</h1>
          <p className="font-bold my-3 capitalize text-xs">
            You can't go back to login or register page without logout
          </p>
          <div className="my-3">
            <button
              className="capitalize font-normal border rounded bg-blue-700 px-3 py-1 mt-3 focus:outline-none text-white my-2"
              type="submit"
            >
              <div className="flex">
                <p
                  onClick={() => {
                    dispatch(logout());
                    history.push("/login");
                  }}
                >
                  Log out
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
