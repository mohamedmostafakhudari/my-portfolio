import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export function TypographyH1({ children }: { children: React.ReactNode }) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
				playfairDisplay.className
			)}>
			{children}
		</h1>
	);
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
	return (
		<h2
			className={cn(
				"scroll-m-20 pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
				playfairDisplay.className
			)}>
			{children}
		</h2>
	);
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				playfairDisplay.className
			)}>
			{children}
		</h3>
	);
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
	return (
		<h4
			className={cn(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				playfairDisplay.className
			)}>
			{children}
		</h4>
	);
}

export function TypographyP({ children }: { children: React.ReactNode }) {
	return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyLarge({ children }: { children: React.ReactNode }) {
	return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({ className, children }: { className: string; children: React.ReactNode }) {
	return <small className={cn("text-sm leading-none", className)}>{children}</small>;
}
