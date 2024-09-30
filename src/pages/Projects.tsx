import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button, Grid2 } from '@mui/material';

interface Project {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    owner: { avatar_url: string };
    stars?: number;
    languages: string[];
}

const fetchGitHubProjects = async (username: string): Promise<Project[]> => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projects = await response.json();
        const projectsWithLanguages = await Promise.all(projects.map(async (repo: any) => {
            const langResponse = await fetch(repo.languages_url);
            const languages = await langResponse.json();
            const languageList = Object.keys(languages);
    
            return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                owner: repo.owner,
                languages: languageList // Ajoute les langages ici
            };
        }));
        return projectsWithLanguages;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
};


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const fetchedProjects = await fetchGitHubProjects("tvelu77");
            setProjects(fetchedProjects);
        };
        fetchProjects();
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                GitHub Projects
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <Card 
                            key={project.id} 
                            variant="outlined" 
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: '300px',
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Couleur de fond
                                '&:hover': {
                                    '& .overlay': {
                                        opacity: 0.8,
                                    }
                                }
                            }}
                        >
                            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                                <Typography variant="h5" component="div" color="text.primary">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description || 'No description available.'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {project.languages.length > 0 
                                        ? `Languages: ${project.languages.join(', ')}` 
                                        : 'No languages available.'
                                    }
                                </Typography>
                                <Button 
                                    variant="contained" 
                                    href={project.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    sx={{ mt: 2 }}
                                >
                                    View on GitHub
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        No projects available.
                    </Typography>
                )}
            </div>
        </Container>
    );
};

export default Projects;

