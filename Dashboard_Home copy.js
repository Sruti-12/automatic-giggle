const Dashboard_Home = () => {
    return ( 

    
//   //<nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Hello, There 👋</a>
//   <button class="btn btn-outline-primary">Logout</button>
//    {/* data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  */}
//     {/* <span class="navbar-toggler-icon"></span> */}
  
  
// //</nav>
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <a class="navbar-brand abs" href="#">Navbar 1</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbar">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="//codeply.com">Codeply</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#myAlert" data-toggle="collapse">Link</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
            </li>
        </ul>
    </div>
</nav>

);
}
 
export default Dashboard_Home;