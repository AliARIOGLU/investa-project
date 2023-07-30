import Container from "./Container";
import DesktopView, { FeatureMobile } from "./DesktopView";
import Title from "./Title";

const Feature = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title
            title="Every feature you need to wind. Try it for yourself."
            clasName="text-white text-2xl"
          />
          <p className="mt-2 text-lg text-gray-400">
            Investa was built for investors like you who play by their own rules
            and are not going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Investa has
            it.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div clasName="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopView />
      </div>
      {/* Mobile View */}
      <div clasName="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
