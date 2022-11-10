import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import TimeLine from '../src/components/TimeLine';

import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';


function HomePage() {
    return (
      <>
        <CSSReset />
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}>
          <Menu />
          <Header />
          <TimeLine playlists={config.playlists}>
            Conteudo
          </TimeLine> 

        </div>
      </>
    )
  }
  
  export default HomePage 
  

  