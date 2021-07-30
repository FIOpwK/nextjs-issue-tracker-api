function Issue(id, desc) {
return (
<div class="container">
    <h2>Issues</h2>

    <div class="table-responsive">
    <table class="table table-dark">
  <thead>
    <tr class="table-active">
      <th scope="col">ID</th>
      <th scope="col">Product</th>
      <th scope="col">Last Modified</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tracker</td>
      <td>{Date.now() - 21}</td>
      <td>Open</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>API</td>
      <td>{Date.now() + 21}</td>
      <td>Closed</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Website</td>
      <td>{Date.now() - 10}</td>
      <td>Resolved</td>
    </tr>
  </tbody>
</table>
    </div>
</div>
)

}

export default Issue
