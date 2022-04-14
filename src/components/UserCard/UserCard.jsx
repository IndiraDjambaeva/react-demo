// import React from 'react'

// function UserCard(props) {
//   return (
//     <div>
//       <h3>{props.userName}</h3>
//       <p>{props.userAge}</p>
//     </div>
//   );
// }

// export default UserCard


import React from 'react'

function UserCard({userName, userAge}) {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{userAge}</p>
    </div>
  );
}

export default UserCard
