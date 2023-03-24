import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title='Nosotros'
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="imagen sobre nosotros" />

          <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula sodales metus, ut lobortis erat molestie ornare. Morbi nec consectetur risus. Duis rutrum mi vitae blandit rutrum. Praesent erat risus, mattis vitae lacus ut, varius volutpat ex. Nulla convallis fermentum aliquam. Aenean at mi eu nibh ullamcorper sagittis sed a dolor.</p>

            <p>Ut vel nulla vitae purus consequat varius a vitae risus. Nam iaculis lectus in quam condimentum accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ac mi ipsum. Nullam nec metus eget augue vulputate sollicitudin.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
