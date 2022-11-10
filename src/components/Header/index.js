import * as S from './styled';
import config from '../../../config.json';

function Header() {
    return (
      <S.Header>
        <section className="user-info">
          <img src={config.github} alt="avatar do github" />
          <div>
            <h1>{config.name}</h1>
            <p>{config.job}</p>
          </div>
        </section>
      </S.Header>
    )
  }

export default Header;