import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const AboutPage = () => {
  return (
    <Container>
      <div className="min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">
            About RedCloudHub
          </h1>
          <p className="text-lg text-center mb-8">
            Welcome to{" "}
            <span className="font-semibold text-red-500">RedCloudHub</span>,
            your ultimate destination for all things anime!
          </p>
          <section className="mb-8 ">
            <h2 className="text-2xl font-bold mb-3">Who Am I</h2>
            <p>
              I am a Junior Full Stack Developer, passionate about web
              development and constantly learning new technologies. Currently, I
              am focusing on mastering full-stack development with a strong
              interest in both front-end and back-end technologies. I’m excited
              to continue growing my skills and contributing to the world of
              development.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What Is RedCloudHub</h2>
            <p>
              RedCloudHub is a platform dedicated to providing anime enthusiasts
              with a one-stop destination for all things related to the anime
              world. We believe that anime is a universal language that can
              connect people from different backgrounds and cultures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
            <ul className="list-disc pl-5">
              <li>
                Anime Recommendations: Discover the best anime tailored to your
                tastes, curated by our expert team.
              </li>
              <li>
                Latest Releases: Stay updated on the newest anime episodes and
                series as they hit platforms.
              </li>
              <li>
                Trending Anime News: Keep up with the latest anime industry
                updates and news.
              </li>
              <li>
                Top Lists: Browse through our carefully curated lists of
                must-watch anime across genres.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p>
              Our mission is to create a space where anime enthusiasts can
              explore, learn, and share their love for anime. We believe anime
              is more than just entertainment—it’s a powerful storytelling
              medium that connects people across the globe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Let’s Connect</h2>
            <p>
              Have questions, suggestions, or feedback? We’d love to hear from
              you! Connect with us on our social media channels or drop us a
              message through our{" "}
              <Link to="/contact" className="text-white underline font-bold">
                Contact Page
              </Link>
              .
            </p>
          </section>

          <p className="text-center mt-10 text-lg">
            At <span className="font-semibold text-red-500">RedCloudHub</span>,
            every anime has a story, and every visitor is part of ours.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
