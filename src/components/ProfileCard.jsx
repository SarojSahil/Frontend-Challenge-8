import image from "../assets/img.png";

const ProfileCard = () => {
  return (
    <section className="w-[90%] max-w-3xl mx-auto flex flex-col sm:flex-row gap-x-6 p-6 rounded-2xl border-12 border-white bg-glass">
      <div className="sm:w-70 sm:grow-0">
        <img
          src={image}
          alt="profile picture"
          className="w-40 aspect-square rounded-full block mr-auto sm:mr-0 sm:ml-auto border-8 border-gray-200" />
      </div>
      <div className="grow">
        <h1 className="text-3xl mt-6 font-medium">Sahil Saroj</h1>
        <h2 className="text-xl text-neutral-700">Frontend Devloper</h2>
        <p className="text-xl mt-2">Passionate frontend developer with expertise in html, css, javascript, tailwindcss and react.</p>
        <div className="flex my-6 text-center divide-x text-neutral-800 font-medium">
          <div className="pr-4">
            <div>1999</div>
            <div>Followers</div>
          </div>
          <div className="px-4">
            <div>190</div>
            <div>Following</div>
          </div>
          <div className="pl-4">
            <div>15</div>
            <div>Projects</div>
          </div>
        </div>
        <div className="flex gap-x-4 text-neutral-800">
          <button className="min-w-[120px] bg-cyan-200 p-1.5 hover:bg-cyan-300 transition-colors duration-200 border border-neutral-400 rounded-md">Follow</button>
          <button className="min-w-[120px] bg-orange-200 p-1.5 hover:bg-orange-300 transition-colors duration-200 border border-neutral-400 rounded-md">View Profile</button>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;