

export default function Photo({ imageUrl, name }) {
    return (
      <div className="w-48 h-48 overflow-hidden rounded-full">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  function ProfileInfo({ name, bio }) {
    return (
      <div className="my-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600 text-justify">{bio}</p>
      </div>
    );
  }

  function Profile({ imageUrl, name, bio }) {
    return (
      <div className="bg-gray-100 p-8">
        <Photo imageUrl={imageUrl} name={name} />
        <ProfileInfo name={name} bio={bio} />
      </div>
    );
  }
  
  export default function Page() {
    const dog = {
      name: "Daisy",
      bio:
        "The Labrador Retriever whose infectious joy is rivaled only by the sunniest of summer days; she brightens every room she enters with her boundless energy and ever-wagging tail.",
      imageUrl:
        "./images/linkedin.png",
    };
    
    return (
      <div className="bg-gray-300 p-10">
        <Profile name={dog.name} bio={dog.bio} imageUrl={dog.imageUrl} />
      </div>
    );
  }