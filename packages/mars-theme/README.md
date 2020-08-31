# `@frontity/mars-theme`

This is a sample Tailwind / frontity theme to highlight a couple of issues.

## Flash of unstyled content

Not sure what the best way to handle this is.

## Unique key warning

I get the warning: Each child in a list should have a unique "key" prop.

````js
{state.theme.menu.map(([name, link]) => {
	// Check if the link matched the current page url
	const isCurrentPage = state.router.link === link;
	return (
		<>
		{/* If link url is the current page, add `aria-current` for a11y */}
		<Link
			_key={name}
			key={name}
			link={link}
			aria-current={isCurrentPage ? "page" : undefined}
			tw="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
		>
			{name}
		</Link>
		</>
	);
})}
```

Rendered HTML is:

```html

<nav class="css-1qgrphi-Header">
	<a href="/" target="_self" aria-current="page" _key="Home" class="css-ca1s4h-Header">Home</a>
	<a href="/category/nature/" target="_self" _key="Nature" class="css-ca1s4h-Header">Nature</a>
	<a href="/category/travel/" target="_self" _key="Travel" class="css-ca1s4h-Header">Travel</a>
	<a href="/tag/japan/" target="_self" _key="Japan" class="css-ca1s4h-Header">Japan</a>
	<a href="/about-us/" target="_self" _key="About Us" class="css-ca1s4h-Header">About Us</a>
</nav>

```

I expect the "key" attribute to be set.


## Demo
https://fouc.bowriverstudio.vercel.app
````
