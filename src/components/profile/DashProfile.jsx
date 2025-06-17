import { useEffect, useState } from "react";


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
        <div className="grid grid-cols-5 gap-1 grid-rows-10">
          <div className="grid h-full grid-cols-5 col-span-5 row-span-4 gap-2">
            <div className="grid col-span-2 ">
              <img className="mt-2 ml-5 rounded-full size-20" src={avatar} alt="profile Image" />
              <p className="mt-1 ml-3 text-sm font-medium">{profileData.name}</p>
              <p className="ml-3 text-sm ">{profileData.bio}</p>
              <p className="ml-3 text-sm ">{profileData.blog}</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.public_repos}</p>
                <p className="text-xs text-center">repos</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.followers}</p>
                <p className="text-xs text-center">followers</p>
            </div>
            <div className="col-span-1 place-self-center">
                <p className="text-center">{profileData.following}</p>
                <p className="text-xs text-center">following</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 ">
            
          </div>
          <div className="col-span-1 row-span-1 bg-blue-500">
            {/* <GitMap/> */}
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
