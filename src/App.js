import "./styles.css";
import User from "./user";

export default function App() {
  const arrs = [
    { name: "rupali", no: 2340, address: "sangli" },
    { name: "ruturaj", no: 3070, address: "satara" },
    { name: "amit", no: 2080, address: "kolhapur" }
  ];
  return (
    <div className="App">
      <div>
        <h4>
          reuse component simple way and pass data using props parent to child
          component
        </h4>
        <User name="anvi" />
        <User name="anvit" />
        <User name="amar" />
      </div>
      <h3>
        reuse component using map method and pass data using props parent to
        child component
      </h3>
      {arrs.map((data) => (
        <User nm={data.no} add={data.address} />
      ))}
    </div>
  );
}
