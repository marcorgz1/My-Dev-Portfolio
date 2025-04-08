import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';

export function ProjectCard({ title, description, image, technologies, github, url }) {
    return (
        <Card variant='outlined'>
            <CardHeader>
                <Typography variant='h2'>{title}</Typography>
            </CardHeader>
                <CardMedia 
                    component="img"
                    height="194"
                    image={image}
                    alt='First project image'
                    />
                <CardContent>                
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                    </Typography>
                    <Typography>
                    {technologies.map((technology) => (
                        <span>{technology}</span>
                    ))}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small">
                    <a href={github}>GitHub</a>
                </Button>
                <Button size="small">
                    <a href={url}>Demo</a>
                </Button>
            </CardActions>
        </Card>
    )
}
