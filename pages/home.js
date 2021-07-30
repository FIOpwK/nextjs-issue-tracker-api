import Link from "next/link";

export default function Home() {
  return (
    <div class="container">
      <h3> Home </h3>
      <nav class="navbar navbar-dark bg-dark">
        <Link href="/home">
          
          <a> Home </a>
        </Link>

        <Link href="/issues">
     
          <a> Issues </a>
        </Link>
      </nav>
      <div>
        <button class="btn btn-danger"> Open New Issue </button>
      </div>
    </div>
  );
}
