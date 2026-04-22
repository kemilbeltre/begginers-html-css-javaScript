interface RadioOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const RadioOption = ({ label, selected, onClick }: RadioOptionProps) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
      selected
        ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold"
        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
    }`}
  >
    <span className="font-mono text-lg">{label}</span>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        selected ? "border-indigo-600" : "border-gray-300 group-hover:border-indigo-300"
      }`}
    >
      {selected && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}
    </div>
  </button>
);
