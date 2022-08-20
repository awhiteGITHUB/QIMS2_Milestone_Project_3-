

function Home() {
    return (
      <main>
        <h1>QIMS Inventory Management</h1>
        <div >
        <h2>Welcome to QIMS system. Please login or click the Register button to create an account </h2>
          <div>
          </div>
        </div>
        <br></br>
        <br></br>
        <a href="/Login">
          <button className="btn-primary">Login</button>
          </a>
          <br></br>
        <br></br>
        <a href="/Register">
          <button className="btn-primary">Register</button>
        </a>
      </main>
    );
  }
  
  export default Home;