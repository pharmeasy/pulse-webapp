import {
  Banner,
  Divider,
  MenuBar,
  MenuItem,
  MenuList,
  NavigationBar,
  NavigationItem,
  NavigationList,
  NavigationLogo,
} from '@/components';
import PharmeasyCareLogo from '@/svgs/header/pharmeasy-care-logo.svg';
import BlogIcon from '@/svgs/menu/blog-icon.svg';
import EventIcon from '@/svgs/menu/event-icon.svg';
import FeedIcon from '@/svgs/menu/feed-icon.svg';

function HomePage() {
  return (
    <div className="overflow-scroll">
      <NavigationBar>
        <NavigationLogo>
          <PharmeasyCareLogo />
        </NavigationLogo>
        <NavigationList>
          <NavigationItem
            imageSrc="/assets/images/header/search-icon.png"
            imageAlt="Search"
          />
          <NavigationItem
            imageSrc="/assets/images/header/notification-icon.png"
            imageAlt="Notification"
          />
          <NavigationItem
            imageSrc="/assets/images/header/user-icon.png"
            imageAlt="User"
          />
        </NavigationList>
      </NavigationBar>

      <Divider />

      <Banner
        imageSrc="/assets/images/banner/banner-mobile.jpeg"
        imageAlt="banner"
        coverTitle="Together we can."
        coverMessage="Make it Easy"
      />

      <MenuBar>
        <MenuList>
          <MenuItem itemText="Feeds" isSelected={true}>
            <FeedIcon />
          </MenuItem>
          <MenuItem itemText="Events">
            <EventIcon />
          </MenuItem>
          <MenuItem itemText="Blogs">
            <BlogIcon />
          </MenuItem>
        </MenuList>
      </MenuBar>
    </div>
  );
}

export default HomePage;
