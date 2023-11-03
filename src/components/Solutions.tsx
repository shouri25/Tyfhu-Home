import Operations from "./Operations";
import Training from "./Training";
import Analytics from "./Analytics";
import Safety from "./Safety";

const Solutions = () => {
  return (
    <div
      id="solutions"
      style={{
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Operations />
      <Safety />
      <Training />
      <Analytics />
    </div>
  );
};
export default Solutions;
