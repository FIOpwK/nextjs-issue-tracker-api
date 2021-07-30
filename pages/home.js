import Link from "next/link";

export default function Home() {
  return (
    <div class="container">
      <h3> API Issue Tracker </h3>
      <nav class="navbar sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
          <Link href="/home">
            <a class="navbar-brand"> Home </a>
          </Link>

          <Link href="/issues">
            <a class="navbar-brand"> Issues </a>
          </Link>
          <Link href="#">
            <a class="navbar-brand"> Tracker </a>
          </Link>

          <Link href="#">
            <a class="navbar-brand"> News </a>
          </Link>
        </div>
      </nav>
	  
      <div>
        <button class="btn btn-danger"> Open New Issue </button>
      </div>
    </div>
  );
}
