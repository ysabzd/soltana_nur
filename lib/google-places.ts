const PLACE_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";

export function getGoogleMapsApiKey(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
    process.env.GOOGLE_PLACES_API_KEY
  );
}

export async function resolveGooglePlaceId(options: {
  placeId?: string | null;
  placeName?: string | null;
  apiKey?: string;
}): Promise<string | null> {
  const configured = options.placeId?.trim();
  if (configured) return configured;

  const apiKey = options.apiKey ?? getGoogleMapsApiKey();
  const placeName = options.placeName?.trim();
  if (!apiKey || !placeName) return null;

  try {
    const response = await fetch(PLACE_SEARCH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({ textQuery: placeName, languageCode: "fr" }),
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as {
      places?: Array<{ id?: string; displayName?: { text?: string } }>;
    };

    const match =
      data.places?.find(
        (place) =>
          place.displayName?.text
            ?.toLowerCase()
            .includes(placeName.toLowerCase())
      ) ?? data.places?.[0];

    return match?.id ?? null;
  } catch {
    return null;
  }
}
