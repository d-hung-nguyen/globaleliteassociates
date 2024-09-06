"use client"

import { useState } from "react"

export default function SearchBar() {
	const [search, setSearch] = useState("")
	return (
		<main>
			<h1>Search</h1>
			<input type="search" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
			<button onClick={() => (window.location.href = `/hotel?search=${search}`)}>Search</button>
		</main>
	)
}
