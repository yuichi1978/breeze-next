import React from 'react'
import Link from 'next/link'
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'

const MediaCard = ({ item }) => {
    const imagePath = item.poster_path
        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
        : 'media_poster_img/NO IMAGE.png'
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardActionArea>
                    <Link href={`/detail/${item.media_type}/${item.id}`}>
                        <CardMedia
                            component={'img'}
                            sx={{ aspectRatio: '2/3' }}
                            image={imagePath}
                        />
                        <CardContent>
                            <Typography variant="h6" component={'div'} noWrap>
                                {item.title || item.name}
                            </Typography>
                            <Typography variant="subtile" color="textSecondary">
                                {item.release_date || item.first_air_date}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default MediaCard
