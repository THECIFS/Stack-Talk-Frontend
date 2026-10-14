import NavBar from '../components/navbar';
import Inicio from '../components/inicio';
import Categorias from '../components/categorias';
import Publicaciones from '../components/publicaciones';
import Comentarios from '../components/comentarios';
import Footer from '../components/footer';

export default function LandingPage() {
    return (
        <div>
            <NavBar/>
            <Inicio />
            <Categorias />
            <Publicaciones />
            <Comentarios />
            <Footer />
        </div>
    )
}