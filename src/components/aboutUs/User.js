const User=({name,location,contact,image})=>{
    return (
         <div className="w-52 border border-solid border-black rounded-lg mx-3 my-3">
            <img className="border border-solid rounded-lg" alt="profile" src={image}/>
        <h2>Name:<h2 className="font-semibold">{name}</h2></h2>
        <h3>Location:<h2 className="font-semibold">{location}</h2></h3>
        <h4>Contact:<h2 className="font-semibold">"shivam.hms@gmail.com"</h2></h4>

    </div>
    )
}
export default User;