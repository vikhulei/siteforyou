import { Wrapper, MainImage } from "./HomeHeaderStyle";
import homeImage from "../../../assets/01_01_home.jpg"

const HomeHeader = () => {
    return (
        <Wrapper>
            <MainImage src={homeImage} />

        </Wrapper>
    )
}

export default HomeHeader