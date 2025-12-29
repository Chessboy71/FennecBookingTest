import NavigationBar from "./NavigationBar";

const PageHeaderWithNavigation = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-between items-center text-black my-4">
      <h2 className="text-4xl w-2/3">{title}</h2>
      <NavigationBar />
    </div>
  );
};

export default PageHeaderWithNavigation;
