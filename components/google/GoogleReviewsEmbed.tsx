"use client";

import type { CSSProperties } from "react";
import {
  APILoader,
  PlaceOverview,
  IconButton,
} from "@googlemaps/extended-component-library/react";

type GoogleReviewsEmbedProps = {
  apiKey: string;
  placeId: string;
  mapsUrl: string;
};

export function GoogleReviewsEmbed({
  apiKey,
  placeId,
  mapsUrl,
}: GoogleReviewsEmbedProps) {
  return (
    <APILoader apiKey={apiKey} solutionChannel="GMP_GCC_placeoverview_v1" version="beta">
      <div
        className="google-reviews-embed overflow-hidden rounded-sm border border-espresso/10 bg-cream shadow-sm"
        style={
          {
            "--gmpx-color-surface": "#e8dfd3",
            "--gmpx-color-on-surface": "#261c16",
            "--gmpx-color-on-surface-variant": "#261c16a6",
            "--gmpx-color-primary": "#a84d2f",
            "--gmpx-color-outline": "#261c1626",
            "--gmpx-font-family-base": "var(--font-inter), system-ui, sans-serif",
            "--gmpx-font-family-headings": "var(--font-fraunces), Georgia, serif",
            "--gmpx-font-size-base": "0.9375rem",
            "--gmpx-rating-color": "#b8944f",
            "--gmpx-rating-color-empty": "#ddd2c4",
          } as CSSProperties
        }
      >
        <PlaceOverview place={placeId} size="x-large">
          <IconButton
            slot="action"
            variant="filled"
            onClick={() => window.open(mapsUrl, "_blank", "noopener,noreferrer")}
          >
            Voir tous les avis sur Google
          </IconButton>
        </PlaceOverview>
      </div>
    </APILoader>
  );
}
