import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { PaperPlaneIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <Link href="/" className="font-bold text-xl">
        Recipe Blog
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/post" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <PaperPlaneIcon className="mr-2" />
                Write a post
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://github.com/Aziz8860"
              target="_blank"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <GitHubLogoIcon className="mr-2" />
                Github Profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
