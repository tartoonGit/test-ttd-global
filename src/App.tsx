import "./App.css";
import Card from "src/components/card";

interface CardData {
  title: string;
  content: string;
  img: string;
}

function App() {

    const cards = (): CardData[] => {
      const data: CardData[] = [];
      for (let i = 0; i < 4; i++) {
        data.push({
          title: "Lorem ipsum",
          content:
            "One-stop Platform community for Agents and Operator in Thailand.",
          img: `./${i + 1}.jpg`,
        });
      }
      return data;
    };

  return (
    <>
      <div className="bg-gray-200 h-[635px] flex items-center justify-center ">
        <div className="text-center text-white">
          <div className="text-5xl font-bold pb-[18px]">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="text-[32px]">
            One-stop Platform community for Agents and Operator in Thailand.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-[32px] color-[#142B41] font-bold pt-12 pb-6">
            Lorem ipsum
          </div>
          <div className="pb-6 grid grid-cols-4 gap-6">
            {cards().map((item, index) => (
              <Card
                key={index}
                title={item.title}
                content={item.content}
                img={item.img}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
