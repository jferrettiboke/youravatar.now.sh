import { useState } from "react";
// import { CirclePicker } from "react-color";
import Avatar from "avataaars";
import Container from "../components/ui/container";

// https://getavataaars.com/?accessoriesType=Prescription01&topType=NoHair

const avatarStyle = ["Circle", "Transparent"];

// Section: Top
const topType = [
  "NoHair",
  "Eyepatch",
  "Hat",
  "Hijab",
  "Turban",
  "WinterHat1",
  "WinterHat2",
  "WinterHat3",
  "WinterHat4",
  "LongHairBigHair",
  "LongHairBob",
  "LongHairBun",
  "LongHairCurly",
  "LongHairCurvy",
  "LongHairDreads",
  "LongHairFrida",
  "LongHairFro",
  "LongHairFroBand",
  "LongHairNotTooLong",
  "LongHairShavedSides",
  "LongHairMiaWallace",
  "LongHairStraight",
  "LongHairStraight2",
  "LongHairStraightStrand",
  "ShortHairDreads01",
  "ShortHairDreads02",
  "ShortHairFrizzle",
  "ShortHairShaggyMullet",
  "ShortHairShortCurly",
  "ShortHairShortFlat",
  "ShortHairShortRound",
  "ShortHairShortWaved",
  "ShortHairSides",
  "ShortHairTheCaesar",
  "ShortHairTheCaesarSidePart"
];
const accessoriesType = [
  "Blank",
  "Kurt",
  "Prescription01",
  "Prescription02",
  "Round",
  "Sunglasses",
  "Wayfarers"
];
const hatColor = [
  "Black",
  "Blue01",
  "Blue02",
  "Blue03",
  "Gray01",
  "Gray02",
  "Heather",
  "PastelBlue",
  "PastelGreen",
  "PastelOrange",
  "PastelRed",
  "PastelYellow",
  "Pink",
  "Red",
  "White"
];
const hairColor = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "PastelPink",
  "Platinum",
  "Red",
  "SilverGray"
];

// Section
const facialHairType = [
  "Blank",
  "BeardMedium",
  "BeardLight",
  "BeardMagestic",
  "MoustacheFancy",
  "MoustacheMagnum"
];
const facialHairColor = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "Platinum",
  "Red"
];

// Section
const clotheType = [
  "BlazerShirt",
  "BlazerSweater",
  "CollarSweater",
  "GraphicShirt",
  "Hoodie",
  "Overall",
  "ShirtCrewNeck",
  "ShirtScoopNeck",
  "ShirtVNeck"
];
const clotheColor = [
  "Black",
  "Blue01",
  "Blue02",
  "Blue03",
  "Gray01",
  "Gray02",
  "Heather",
  "PastelBlue",
  "PastelGreen",
  "PastelOrange",
  "PastelRed",
  "PastelYellow",
  "Pink",
  "Red",
  "White"
];

const eyeType = [
  "Close",
  "Cry",
  "Default",
  "Dizzy",
  "EyeRoll",
  "Happy",
  "Hearts",
  "Side",
  "Squint",
  "Surprised",
  "Wink",
  "WinkWacky"
];

const eyebrowType = [
  "Angry",
  "AngryNatural",
  "Default",
  "DefaultNatural",
  "FlatNatural",
  "RaisedExcited",
  "RaisedExcitedNatural",
  "SadConcerned",
  "SadConcernedNatural",
  "UnibrowNatural",
  "UpDown",
  "UpDownNatural"
];

const mouthType = [
  "Concerned",
  "Default",
  "Disbelief",
  "Eating",
  "Grimace",
  "Sad",
  "ScreamOpen",
  "Serious",
  "Smile",
  "Tongue",
  "Twinkle",
  "Vomit"
];

const skinColor = [
  "Tanned",
  "Yellow",
  "Pale",
  "Light",
  "Brown",
  "DarkBrown",
  "Black"
];

function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <div className="mb-5 border-b flex overflow-x-scroll whitespace-no-wrap">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={[
              "p-5",
              "cursor-pointer",
              currentTab === i && "font-bold"
            ].join(" ")}
            onClick={e => setCurrentTab(i)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={[currentTab === i ? "block" : "hidden"].join(" ")}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

const defaultAvatar = {
  avatarStyle: "Transparent",
  topType: "NoHair",
  accessoriesType: "Default",
  hairColor: "BrownDark",
  facialHairType: "Blank",
  clotheType: "ShirtCrewNeck",
  clotheColor: "White",
  eyeType: "Default",
  eyebrowType: "Default",
  mouthType: "Serious",
  skinColor: "Light"
};

export default () => {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const tabs = [
    {
      title: "Skin",
      content: (
        <div className="flex flex-wrap">
          {skinColor.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, skinColor: i })}
            >
              <Avatar {...avatar} skinColor={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Eyes",
      content: (
        <div className="flex flex-wrap">
          {eyeType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, eyeType: i })}
            >
              <Avatar {...avatar} eyeType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Brows",
      content: (
        <div className="flex flex-wrap">
          {eyebrowType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, eyebrowType: i })}
            >
              <Avatar {...avatar} eyebrowType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Mouth",
      content: (
        <div className="flex flex-wrap">
          {mouthType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, mouthType: i })}
            >
              <Avatar {...avatar} mouthType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Facial Hair",
      content: (
        <div className="flex flex-wrap">
          {facialHairType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, facialHairType: i })}
            >
              <Avatar {...avatar} facialHairType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Facial Hair (Color)",
      content: (
        <div className="flex flex-wrap">
          {facialHairColor.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, facialHairColor: i })}
            >
              <Avatar {...avatar} facialHairColor={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Top",
      content: (
        <div className="flex flex-wrap">
          {topType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, topType: i })}
            >
              <Avatar {...avatar} topType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Hair (Color)",
      content: (
        <div className="flex flex-wrap">
          {hairColor.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, hairColor: i })}
            >
              <Avatar {...avatar} hairColor={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Accessories",
      content: (
        <div className="flex flex-wrap">
          {accessoriesType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, accessoriesType: i })}
            >
              <Avatar {...avatar} accessoriesType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Hat (Color)",
      content: (
        <div className="flex flex-wrap">
          {hatColor.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, hatColor: i })}
            >
              <Avatar {...avatar} hatColor={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Clothes",
      content: (
        <div className="flex flex-wrap">
          {clotheType.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, clotheType: i })}
            >
              <Avatar {...avatar} clotheType={i} />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Clothes (Color)",
      content: (
        <div className="flex flex-wrap">
          {clotheColor.map(i => (
            <div
              key={i}
              className="w-1/3 flex justify-center items-center"
              onClick={e => setAvatar({ ...avatar, clotheColor: i })}
            >
              <Avatar {...avatar} clotheColor={i} />
            </div>
          ))}
        </div>
      )
    }
  ];

  function generateRandomAvatar() {
    setAvatar({
      ...avatar,
      avatarStyle: "Transparent",
      topType: topType[Math.floor(Math.random() * topType.length)],
      accessoriesType:
        accessoriesType[Math.floor(Math.random() * accessoriesType.length)],
      hairColor: hairColor[Math.floor(Math.random() * hairColor.length)],
      facialHairType:
        facialHairType[Math.floor(Math.random() * facialHairType.length)],
      clotheType: clotheType[Math.floor(Math.random() * clotheType.length)],
      clotheColor: clotheColor[Math.floor(Math.random() * clotheColor.length)],
      eyeType: eyeType[Math.floor(Math.random() * eyeType.length)],
      eyebrowType: eyebrowType[Math.floor(Math.random() * eyebrowType.length)],
      mouthType: mouthType[Math.floor(Math.random() * mouthType.length)],
      skinColor: skinColor[Math.floor(Math.random() * skinColor.length)]
    });
    return;
  }

  function queryString(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  function getAvatarUrl() {
    return `https://avataaars.io/?${queryString(avatar)}`;
  }

  return (
    <>
      {/* <CirclePicker />
      <a href={getAvatarUrl()}>{getAvatarUrl()}</a> */}

      <Container>
        <div className="mb-16 flex flex-col items-center">
          <div className="flex justify-center">
            <Avatar {...avatar} />
          </div>
          <button
            className="mt-5 p-2 block text-sm "
            onClick={e => generateRandomAvatar()}
          >
            Generate random avatar
          </button>
        </div>
      </Container>
      <Tabs tabs={tabs} />
    </>
  );
};
