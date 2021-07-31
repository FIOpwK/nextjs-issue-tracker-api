import Link from "next/link";

export default function Home() {
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
        </div>
      </nav>

      <div className="gap-3" style={{margin: '5px'}}>
        <button className="btn btn-danger"> Open New Issue </button>
      </div>
      <div className="ratio ratio-1x1">
        <iframe
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
