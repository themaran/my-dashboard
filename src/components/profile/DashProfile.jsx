import { useEffect, useState } from "react";
import DashQuotes from "./DashQuotes";

const DashProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  useEffect(() => {
    fetch("https://api.github.com/users/themaran")
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, []);
  useEffect(() => {
    if (profileData) {
      setAvatar(profileData.avatar_url);
    }
  }, [profileData]);
  return (
    <div className="w-full h-full p-2">
      {profileData ? (
        <div className="grid grid-cols-5 grid-rows-10 gap-1">
          <div className="col-span-5 row-span-4 grid grid-cols-5 h-full gap-2">
            <div className="col-span-2  grid ">
              <img className="size-20 rounded-full ml-5 mt-2" src={avatar} alt="profile Image" />
              <p className="ml-3 text-sm mt-1 font-medium">{profileData.name}</p>
              <p className="ml-3 text-sm ">{profileData.bio}</p>
              <p className="ml-3 text-sm ">{profileData.blog}</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.public_repos}</p>
                <p className="text-center text-xs">repos</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.followers}</p>
                <p className="text-center text-xs">followers</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.following}</p>
                <p className="text-center text-xs">following</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 ">
            <DashQuotes/>
          </div>
          <div className="col-span-1 row-span-1 bg-blue-500">
          </div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
          <div className="col-span-1 row-span-1 bg-blue-500">1</div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default DashProfile;
