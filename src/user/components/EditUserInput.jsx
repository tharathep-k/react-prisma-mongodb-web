export default function EditUserInput({ name, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <label for={name}>{name}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[36px] pl-4 border border-black rounded-lg"
      />
    </div>
  );
}
