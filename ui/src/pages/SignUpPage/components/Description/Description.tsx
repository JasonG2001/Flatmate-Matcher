interface Props {
  value: string;
  handleChange: (val: string) => void;
  noBackground?: boolean;
}

export const Description: React.FC<Props> = ({
  value,
  handleChange,
  noBackground,
}) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">Description</div>
      <textarea
        className={`h-3/5 w-95% rounded-lg p-2 border border-gray-400 ${
          noBackground ? "bg-transparent" : "bg-[#E5E5E5]"
        } text-sm resize-none`}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={150}
        placeholder="Max length: 150 characters"
      ></textarea>
    </label>
  );
};
