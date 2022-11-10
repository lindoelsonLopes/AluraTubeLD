import * as S from './styled';

function TimeLine(props) {
    const playListNames = Object.keys(props.playlists);
    return (
        <S.StyledTimeline>
            {playListNames.map((playListName) => {
                const videos = props.playlists[playListName]
                console.log(playListName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {
                                videos.map((video) => {
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