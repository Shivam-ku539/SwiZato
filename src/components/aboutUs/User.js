const User=({name,location,contact,image})=>{
    return (
         <div className="user-card">
            <img className="git-img" alt="profile" src={image}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>

    </div>
    )
}
export default User;