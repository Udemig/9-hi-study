import moment from "moment";
import "moment/locale/tr";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  let date = tweet.createdAt?.toDate();

  date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user.name}</p>

      <p className="text-gray-400 text-sm">
        @{tweet.user.name.toLowerCase().split(" ").join("_")}
      </p>

      <p className="text-gray-400 text-sm">{date}</p>

      {tweet.isEdited && (
        <p className="text-gray-400 text-xs">
          <span className="max-md:hidden">*düzenlendi</span>
          <span className="md:hidden">
            <MdEdit />
          </span>
        </p>
      )}
    </div>
  );
};

export default UserInfo;
