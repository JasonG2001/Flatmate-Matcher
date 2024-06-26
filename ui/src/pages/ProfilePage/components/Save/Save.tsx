import { TiTick } from "react-icons/ti";

interface Props {
  handleSave: () => void;
  tick: boolean;
  changeTick: (val: boolean) => void;
}

export const Save: React.FC<Props> = ({ handleSave, tick, changeTick }) => {
  setTimeout(() => {
    if (tick) {
      changeTick(false);
    }
  }, 2000);
  return (
    <button
      className="flex justify-center items-center w-1/2 h-full shadow-defaultButton rounded-lg bg-[#9BBFBB] duration-300 hover:bg-[#89ada9] font-serif-display"
      onClick={() => handleSave()}
    >
      {tick ? <TiTick /> : <div className="">Save</div>}
    </button>
  );
};
