import { GiPlayButton } from "react-icons/gi";

import song from "../Audio/.Dekha Tenu Pehli Pehli Baar Ve.mp3";

export const Section = () => {
  return (
    <div className="ml-14 mt-10">
      <img
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="sectionCover"
        className="h-[300px] w-[800px]"
      />
      <p className="text-white">OZUNA & MORE!</p>
      <p className="text-white">
        A song is a musical composition performed by the human voice. The voice
        often carries the melody using patterns of sound and silence.
      </p>
      <div className="text-yellow-500 text-[100px]"></div>
      <div>
        <button>
          <GiPlayButton className="text-yellow-500 text-[100px]" />
        </button>
        {/* <ReactAudioPlayer
          src="https://soundcloud.com/nirvairpannu09/dekha-tenu-pehli-pehli-baar?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          autoPlay
          controls
          onPlay={(e) => console.log(e)}
        /> */}
      </div>
      <div>
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio controls src={song}></audio>
          <a href={song}> Download audio </a>
        </figure>
      </div>
    </div>
  );
};
