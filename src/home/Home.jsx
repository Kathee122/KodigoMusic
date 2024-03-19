import React, { useState } from 'react'
import { Link } from "react-router-dom"
import cancionesData from "../canciones.json"
import Swal from 'sweetalert2'


export const Home = () => {
  const [canciones,setCanciones] = useState(cancionesData.canciones)
  const [artista,setArtista] = useState(null)
  function cancionesByArtista(nombreArtista){
    console.log(nombreArtista);
    
    let nuevo_array = canciones.filter(item => item.autor === nombreArtista)
    
    nuevo_array.map(elemento => {
      Swal.fire({
        title: `${elemento.autor}`,
        html: `
              <b>Las canciones mas populares:</b>,
              <p>${elemento.canciones}</p>
            `,
        imageUrl: "https://estaticos.elcolombiano.com/binrepository/780x565/0c0/0d0/none/11101/EDTW/nostalgia-musica-1_42537840_20230605193530.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    })
  }

  return (
    <>

<nav className="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
      <img src="https://i.pinimg.com/564x/00/5d/35/005d35dff5f05be6ca8246439a7e3b0e.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
      KodigoMusic
    </a>
    <ul className="nav justify-content-end">
  <li className="nav-item content-end">
  <Link className='nav-link' to='/signup'>Registrate</Link>
  </li>
  <li className="nav-item">
  <Link className='nav-link' to='/login'>Iniciar Sesion</Link>
  </li>
</ul>
  </div>
</nav>

    <div className="main">
    <div className="audio dark">
        <img src="https://musicandote.com/wp-content/uploads/2016/02/adele-1.jpg" alt=""/>
        <h2>Adele</h2>
        <p>Your daily update of the most played tracks right now - India.</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('Adele')}>Canciones</button>
    </div>
    <div className="audio dark">
        <img src="https://image.europafm.com/clipping/cmsimages01/2023/06/06/B9EB8B2B-8D14-4FB1-BC71-147AD8CDE3FD/dua-lipa-met-gala-2023_98.jpg?crop=3608,2030,x0,y0&width=1900&height=1069&optimize=low&format=webply" alt=""/>
        <h2>Dua lipa</h2>
        <p>The finest set of Telugu music from the past 5 years. Cover : Pushpa</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('Dua Lipa')}>Canciones</button>
    </div>
    <div className="audio  dark">
        <img src="https://www.datocms-assets.com/54049/1630008534-1627383728114716-1627027583140960-selena-gomez.jpeg?auto=format%2Ccompress&cs=srgb" alt=""/>
        <h2>Selena</h2>
        <p>Chaand Baaliyan' and other popular Indie hits! Cover - Akanksha Sethi</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('Selena Gomez')}>Canciones</button>
    </div>
    <div className="audio dark">
        <img src="https://i.scdn.co/image/ab6761610000e5ebc9690bc711d04b3d4fd4b87c" alt=""/>
        <h2>Blackpink</h2>
        <p>Keep calm and focus with ambient and post-rock music.</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('Blackpink')}>Canciones</button>
    </div>
    <div className="audio dark">
        <img src="https://akamai.sscdn.co/uploadfile/letras/fotos/7/0/9/b/709bbe520ed8c793a763ca4496c540ec.jpg" alt=""/>
        <h2>Top 50 - USA BTS</h2>
        <p>Your daily update of the most played tracks right now - India.</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('BTS')}>Canciones</button>
    </div>
    <div className="audio dark">
        <img src="https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg" alt=""/>
        <h2>Top 50 - USA Ariana</h2>
        <p>Your daily update of the most played tracks right now - India.</p>
        <button className='btn btn-dark' onClick={() => cancionesByArtista('Ariana Grande')}>Canciones</button>
    </div>
    </div>
    
    </>
  )
}
