export default function LoginInput({ name, type, placeholder, value, onChange }) {
  return (
    <>
      <label for={name}>{placeholder}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="grid grid-cols-1 w-[30vw] h-[36px] pl-4 border border-black rounded-lg"
      />
    </>
  );
}
