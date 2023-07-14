const user = {
  name: "Christopher Robin",
  imageUrl:
    "https://s.yimg.com/ny/api/res/1.2/SA9YzyBUu6s4aPGFBG9kBw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/consequence_of_sound_458/64f02fedd847eed896a18fff40c27994",
  imageSize: 400,
};

const Avatar = () => {
  return <div>
    <h1>{user.name}</h1>
    <img src={user.imageUrl} alt={user.name} style={{width:user.imageSize}}/>
  </div>;
};

export default Avatar;
