import { Card, Image, Button } from '@chakra-ui/react'

export function ProjectCard ({ title, description, image, technologies, github, url }) {
    return (
        <Card.Root>
            <Image src={image} alt='Project image' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Description>{description}</Card.Description>
                <div>
                {
                    technologies.map((technology, index) => (
                        <span key={index}>{technology}</span>
                    ))
                }
                </div>
            </Card.Body>
            <Card.Footer>
                <Button variant='solid'>
                {github && <a href={github} target="_blank">Github</a>}
                </Button>
                <Button variant='solid'>
                {url && <a href={url} target="_blank">Demo</a>}
                </Button>
            </Card.Footer>
        </Card.Root>
    )
}
