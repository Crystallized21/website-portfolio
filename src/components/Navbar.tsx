import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, Home, Mail, Menu, User } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
	{ name: "Home", icon: <Home className="w-8 h-8" />, url: "/" },
	{ name: "Profile", icon: <User className="w-8 h-8" />, url: "/profile" },
	{
		name: "Projects",
		icon: <Briefcase className="w-8 h-8" />,
		url: "/projects",
	},
	{ name: "Contact", icon: <Mail className="w-8 h-8" />, url: "/contact" },
];

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center mb-12 relative ">
			<Link href="/" className="flex items-center">
				<Button variant="ghost" size="icon">
					<Home />
				</Button>
			</Link>
			<div className="flex items-center space-x-4">
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<Menu />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{navLinks.map((link) => (
							<DropdownMenuItem key={link.name} asChild>
								<Link href={link.url} className="flex items-center">
									{link.icon}
									<span className="ml-2">{link.name}</span>
								</Link>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
