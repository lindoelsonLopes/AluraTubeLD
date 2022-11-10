import Image from 'next/image';
import * as S from './styled';
import config from '../../../config.json';
import img from '../../../public/banner.png'

function Header() {
    return (
      <S.Header>
        <S.Banner>

        <Image className="banner" src={img} />
        </S.Banner>
        <section className="user-info">
          <img className="avatar-user" src={config.github} alt="avatar do github" />
          <div>
            <h1>{config.name}</h1>
            <p>{config.job}</p>
          </div>
        </section>
      </S.Header>
    )
  }

export default Header;