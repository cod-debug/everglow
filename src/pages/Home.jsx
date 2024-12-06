import Container from "../components/Container";
import Banner from "../components/home/Banner";
import MoodBoard from "../components/home/MoodBoard";

export default function Home(){
    window.scrollTo(0, 0);
    return(
        <>
            <Banner />
            <Container>
                <MoodBoard />
            </Container>
        </>
    )
}