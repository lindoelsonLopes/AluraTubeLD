import * as S from './styled';

function TimeLine({ searchValue, ...props }) {
    const playListNames = Object.keys(props.playlists);
    return (
        <S.StyledTimeline>
            {playListNames.map((playListName) => {
                const videos = props.playlists[playListName]
                return (
                    <section key={playListName}>
                        <h2>{playListName}</h2>
                        <div>
                            {
                                videos.filter((video) => {
                                    const titleNormalize = video.title.toLowerCase();
                                    const searchValueNormalize = searchValue.toLowerCase();
                                    return titleNormalize.includes(searchValueNormalize)
                                }).map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} alt="imagem" />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </S.StyledTimeline>
    )
}

export default TimeLine;