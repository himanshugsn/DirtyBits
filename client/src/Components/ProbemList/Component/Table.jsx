const Table = () => {
	return (
		<>
			<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Problem Title</th>
      <th scope="col">Difficulty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><a style={{textDecoration:'none'}} href="/problemlist">Bubble Sort</a></td>
      <td style={{color:'green'}}>Easy</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><a style={{textDecoration:'none'}} href="/problemlist">Travelling salesman problem</a></td>
      <td style={{color:'red'}}>Hard</td>
    </tr>
  </tbody>
</table>
		</>
	)
}

export default Table;