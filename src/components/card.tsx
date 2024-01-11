import { Button } from "src/components/ui/button";

interface card {
  title: string;
  content: string;
  img: string;
  text_btn?: string;
}

const Card = (props: card) => {
  return (
    <>
      <div className="w-[380px] h-[438px] rounded-lg drop-shadow-lg border border-gray-100 flex flex-col justify-between items-center overflow-hidden">
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className={"h-[272px] w-full"}
        />
        <div className="text-lg font-bold max-w-[300px] color-[#142B41]">
          {props.title}
        </div>
        <div className="text-sm max-w-[300px] color-[#142B41]">
          {props.content}
        </div>
        <Button className="rounded-3xl text-base w-[139px] h-12 bg-[#2A4B6A] mb-4">
          {props.text_btn ? props.text_btn : "Buy package"}
        </Button>
      </div>
    </>
  );
};

export default Card;
