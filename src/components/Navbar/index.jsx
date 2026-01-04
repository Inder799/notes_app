import logo from "../../assets/image.png";

export const Navbar = () => {
  return (
    <header className="flex px-3 py-1 gap-3 border-b-2 border-gray-100">
      <div className="w-13 h-12">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <h1 className="text-indigo-800 text-4xl font-bold">Note-it</h1>
    </header>
  );
};
