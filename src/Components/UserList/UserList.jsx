import React from "react";
import { useProfileList } from "../../hooks/useProfileList";
import UserCard from "../UserCard/UserCard";
import './UserList.css'
import Loader from "../Loader/Loader";
function UserList() {
  const { profileList, setProfileList } = useProfileList();
  return (
    <div className="cardsCont">
          {
              profileList.loading ? (<Loader/>) : ( profileList.data.map((user) => (
                <UserCard key={user.id} image={user.image} name={user.name} />)))
         }
      
        
    </div>
  );
}

export default UserList;
