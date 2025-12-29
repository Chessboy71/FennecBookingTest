import NavigationBar from "./NavigationBar";

const PageHeaderWithNavigation = ({
  title,
  cartCount,
}: {
  title: string;
  cartCount?: number;
}) => {
  const titleChanged = title.split(" ");
  const lastWord = titleChanged.pop();
  return (
    <div
      className={`flex flex-row w-full justify-between items-center text-black my-4 ${
        cartCount ? "" : "px-4"
      }`}
    >
      <h2 className="text-4xl w-2/3">
        {titleChanged.join(" ")} <span className="font-bold">{lastWord}</span>
      </h2>
      {cartCount ? (
        <div className="text-black h-12 w-12 font-bold text-2xl bg-primary rounded-full flex items-center justify-center">
          {cartCount}
        </div>
      ) : (
        <NavigationBar />
      )}
    </div>
  );
};

export default PageHeaderWithNavigation;
