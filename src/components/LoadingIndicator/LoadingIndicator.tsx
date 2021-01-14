import Loader from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <div className="centerize full-view-height">
      <Loader type="ThreeDots" color="#00c2cb" height={300} width={300} />
    </div>
  );
};

export default LoadingIndicator;
