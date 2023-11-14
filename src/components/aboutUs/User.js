const User=({name,location,contact,image})=>{
    return (
         <div className="w-52 border border-solid border-black rounded-lg px-2 mx-3 my-3">
            <img className="border border-solid rounded-lg" alt="profile" src={image}/>
        <h2>Name:<h2 className="font-semibold">{name}</h2></h2>
        <h3>Location:<h2 className="font-semibold">{location}</h2></h3>
        <h4>Contact:<h2 className="font-semibold">shivam.hms@gmail.com</h2></h4>
       <a href="https://github.com/Shivam-ku539"><h2 className="text-blue-600 text-center">GitHub🔗</h2></a>
       <a href="https://www.linkedin.com/in/shivam-kumar-b73297239/"><h2 className="text-blue-600 text-center">LinkedIn🔗</h2></a>

    </div>
    )
}
export default User;