import {
  NavigationBar,
  NavigationLogo,
  NavigationList,
  NavigationItem,
  Divider,
  Banner,
  MenuBar,
} from "@/components";

function HomePage() {
  return (
    <>
      <NavigationBar>
        <NavigationLogo
          imageSrc="/assets/images/header/pharmeasy-care-logo.svg"
          imageAlt="pharmeasy care logo"
          height={36}
          width={128}
        />
        <NavigationList>
          <NavigationItem
            imageSrc="/assets/images/header/search-icon.png"
            imageAlt="Search"
            imageWidth={20}
            imageHeight={20}
          />
          <NavigationItem
            imageSrc="/assets/images/header/notification-icon.png"
            imageAlt="Notification"
            imageWidth={20}
            imageHeight={20}
          />
          <NavigationItem
            imageSrc="/assets/images/header/user-icon.png"
            imageAlt="User"
            imageWidth={20}
            imageHeight={20}
          />
        </NavigationList>
      </NavigationBar>

      <Divider />

      <Banner
        imageSrc="/assets/images/banner/banner-mobile.jpeg"
        imageAlt="banner"
        imageWidth={390}
        imageHeight={200}
        coverTitle="Together we can."
        coverMessage="Make it Easy"
      />

      <MenuBar />
    </>
  );
}

export default HomePage;
