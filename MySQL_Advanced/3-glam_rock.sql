-- Lists all bands with Glam rock as their main style
-- ranked by their longevity

SELECT
    band_name,
    (IFNULL(split, 2024) - formed) AS LIFESPAN
FROM
    metal_bands
WHERE
    style LIKE '%Glam rock%'
ORDER BY
    LIFESPAN DESC;
