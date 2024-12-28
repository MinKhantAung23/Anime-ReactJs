import HeroSection from "../components/HeroSection";
import ShowAnime from "../components/ShowAnime";
import Container from "../../../components/Container";
import ShowManga from "../components/ShowManga";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container className={"mb-4"}>
        <ShowAnime />
        <ShowManga />
      </Container>
    </>
  );
};

export default HomePage;
