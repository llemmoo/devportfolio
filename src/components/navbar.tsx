import { Link } from "@heroui/link";
import { Link as ScrollLink } from "react-scroll";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { subtitle } from "@/components/primitives.ts";


import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBordered
      shouldHideOnScroll
      className="bg-navbar text-foreground"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full"
         justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem className="typeface-roboto" key={item.label}>
              <ScrollLink
                className={subtitle({color: "flatGreen"})}
                color="foreground"
                duration={500}
                smooth={true}
                style={{ cursor: "pointer", fontFamily: "roboto mono" }}
                to={item.to}
              >
                {item.label}
              </ScrollLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
