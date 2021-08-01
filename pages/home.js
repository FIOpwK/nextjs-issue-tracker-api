import Link from "next/link";
import Navigation from "./navigtion";

export default function Home() {
  return (
    <div className="container">
      <Navigation />

      <div className="gap-3" style={{ margin: "5px" }}>
        <button className="btn btn-danger"> Open New Issue </button>
      </div>

    </div>
  );
}
