import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="font-medium">
        <Link to="/blogs">Medium</Link>
      </div>
      <div>
        <Avatar name="M" />
      </div>
    </div>
  );
};
