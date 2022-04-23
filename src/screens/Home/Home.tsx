import getMaxValue from "@/utils/getMaxValue";

const Home = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1 className="dark:bg-gray-700 bg-gray-300 text-center">DEMO</h1>
      <h2>{getMaxValue(arr)}</h2>
    </div>
  );
};

export default Home;
