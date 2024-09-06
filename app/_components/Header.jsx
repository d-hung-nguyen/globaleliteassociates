import Link from "next/link"

export default function Header() {
	const navItems = [
		{
			display: "Home",
			slug: "/",
		},
		{
			display: "About",
			slug: "/about",
		},
		{
			display: "Hotels",
			slug: "/hotels",
		},
		{
			display: "Contact",
			slug: "/contact",
		},
	]
	return (
		<header className="header">
			<img src="/icon.svg" alt="logo" width={100} height={100} />
			<ul className="header__nav">
				{navItems.map((item, index) => (
					<li key={index}>
						<Link href={`/${item.slug}`}> {item.display} </Link>
					</li>
				))}
			</ul>
		</header>
	)
}
