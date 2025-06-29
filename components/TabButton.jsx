const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-purple-500 border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`!mr-3 cursor-pointer font-semibold hover:text-pink-400 hover:bg-pink-200 p-2 hover:rounded-lg ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
