import fs from "fs"
import path from "path"
import Link from "next/link"

// Slugify helper function to create slugs from hotel names
function slugify(str) {
	return str.toLowerCase().replace(/\s+/g, "-")
}

// Fetch all hotels from the JSON file
async function getHotels() {
	const filePath = path.join(process.cwd(), "data", "hotels.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	const data = JSON.parse(jsonData)
	const hotels = data.properties

	return hotels
}

export default async function HotelListPage() {
	const hotels = await getHotels() // Fetch hotel data

	return (
		<div>
			<h1>Hotel List</h1>
			<ul>
				{hotels.map((hotel) => (
					<li key={hotel.id}>
						{/* Link to the individual hotel page using the hotel name slug */}
						<Link href={`/hotels/${slugify(hotel.id)}`}>{hotel.name}</Link>
						<p>{hotel.description}</p>
						<p>Rate per night: ${hotel.rate_per_night.lowest}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
