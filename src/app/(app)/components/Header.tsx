import HeaderLegacy from "@/app/components/Header";
import Hamburger from "./Hamburger";
import Menu from "./Menu/Menu";

const Header = () => {
	return (
		<HeaderLegacy>
			<div className="xl:hidden">
				<Hamburger />
			</div>
			<div className="hidden xl:block">
				<Menu />
			</div>
		</HeaderLegacy>
	);
};

export default Header;
