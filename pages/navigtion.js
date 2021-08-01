import Link from "next/dist/client/link";

export default function Navigation() {
  return (
    <div className="container">
      <h3> API Issue Tracker </h3>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/home">
            <a className="navbar-brand"> Home </a>
          </Link>

          <Link href="/issues">
            <a className="navbar-brand"> Issues </a>
          </Link>
          <Link href="#">
            <a className="navbar-brand"> Tracker </a>
          </Link>

          <Link href="#">
            <a className="navbar-brand"> News </a>
          </Link>

          <Link href="/about">
            <a className="navbar-brand"> About </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
