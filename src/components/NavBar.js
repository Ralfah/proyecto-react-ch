import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="Home">Ralfantastic Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="nav justify-content-center" id="navbarNav">
                <a class="nav-link" href="Emotions">
                    <ItemListContainer item = "Emotions"/>
                </a>
                <a class="nav-link" href="Skills">
                 <ItemListContainer item = "Skills"/>
             </a>
              <a class="nav-link" href="Tripps">
                  <ItemListContainer item = "Tripps"/>
              </a>
            </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;