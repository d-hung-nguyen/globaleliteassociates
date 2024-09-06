// app/hotels/[slug]/page.js
import fs from "fs"
import path from "path"

// Slugify helper function to create slugs from hotel names
function slugify(str) {
	return str.toLowerCase().replace(/\s+/g, "-")
}

// Fetch hotel data based on the slug
async function getHotelBySlug(slug) {
	const filePath = path.join(process.cwd(), "data", "hotels.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	const data = JSON.parse(jsonData)
	const hotels = data.properties

	// Find the hotel that matches the slug
	const hotel = hotels.find((hotel) => slugify(hotel.id) === slug)

	return hotel
}

export default async function HotelPage({ params }) {
	const { slug } = params // Get the hotel slug from the URL
	const hotel = await getHotelBySlug(slug) // Fetch hotel data based on the slug

	return (
		<div>
			<h1>{hotel.name}</h1>
			<ul>
				<li>{hotel.description}</li>
				<li>Rate per night: ${hotel.rate_per_night.lowest}</li>
				<li>Address: {hotel.address}</li>
				<li>Rating: {hotel.rating}</li>
				<li>
					Amenities:{" "}
					{hotel.amenities.map((amenity) => (
						<span key={amenity}>{amenity}, </span>
					))}
				</li>
				<li>
					Images:{" "}
					{hotel.images.map((image) => (
						<img key={image} src={image.original_image} alt={hotel.name} width={400} />
					))}
				</li>
			</ul>
		</div>
	)
}
