import estilo from "./Navbar.module.css";
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer";
import imgLogo from "../../assets/images/Datacom Isotipo.png";
import { Outlet, Link } from "react-router-dom";
import { Footer } from "../../Footer";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const NavbarContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categorias");

    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);

  return (
    <>
      <div className={estilo.ContainerNavbar}>
        <div className={estilo.datacom}>
          <Link to="/">
            <img src={imgLogo} className={estilo.imgLogo} alt="Logo Datacom" />
          </Link>
        </div>

        <div className={estilo.Botones}>
          {categories.map((category) => {
            return (
              <div key={category.id} className={estilo.Botonera}>
                <Link className={estilo.Link} to={category.path}>
                  {category.title}
                </Link>
              </div>
            );
          })}
        </div>

        <div className={estilo.CarWidget}>
          <CartWidgetContainer />
        </div>
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};
