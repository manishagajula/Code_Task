import { SiYoutubemusic } from "react-icons/si";
import { MdWifiFind } from "react-icons/md";
import { GiSaxophone } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { MdHorizontalRule } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="w-[300px]  h-[900px] p-8 bg-violet-900 text-white text-2xl text-center">
      <div className="pb-20 ml-4">
        <img
          src="https://wowstudios.com.au/wp-content/uploads/2021/09/Wow-Studios-Yellow-Narrow.png"
          alt="logo"
          className="h-[80px] w-[200px] text-white"
        />
      </div>
      <div className="pl-6">
        <div className="flex flex-row gap-8">
          <span>
            <SiYoutubemusic />
          </span>
          <p className="pb-4 text-[20px]"> Music</p>
        </div>
        <div className="flex flex-row gap-8">
          <span>
            <MdWifiFind />
          </span>
          <p className="pb-4 text-[20px]"> Find</p>
        </div>{" "}
        <div className="flex flex-row gap-8">
          <span>
            <GiSaxophone />
          </span>

          <p className="pb-4 text-[20px]"> Singer</p>
        </div>{" "}
        <div className="flex flex-row gap-8">
          <span>
            <MdStars />
          </span>
          <p className="pb-4 text-[20px]"> Collection</p>
        </div>
      </div>
      <div className=" flex flex-col pl-6">
        <div className="flex flex-row pb-6 mt-10">
          <p className="font-bold ">Songs List</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-6">
            <span>
              <MdHorizontalRule />
            </span>{" "}
            <p className="text-[20px]">Favourite music</p>
          </div>
          <div className="flex flex-row gap-6">
            <span>
              <MdHorizontalRule />
            </span>{" "}
            <p className="text-[20px]">Pop music</p>
          </div>
          <div className="flex flex-row gap-6">
            <span>
              <MdHorizontalRule />
            </span>{" "}
            <p className="text-[20px]">BGM music</p>
          </div>
        </div>
      </div>
    </div>
  );
};
