import { Container, Typography, Card, CardContent, Button, Box, Link } from '@mui/material';
import projectsData from '../assets/Projects.json';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <Container
                sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {projectsData.length > 0 ? (
                        projectsData.map((project) => (
                            <Card
                                key={project.id}
                                variant="outlined"
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '300px',
                                    width: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
                                        {project.description || t('projects.no-description')}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        {project.languages.length > 0
                                            ? `${t('projects.languages')} ${project.languages.join(', ')}`
                                            : `${t('projects.no-languages')}`
                                        }
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ mt: 2 }}
                                    >
                                        {t('projects.to-github')}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            {t('projects.no-projects')}
                        </Typography>
                    )}
                    <Link href="https://github.com/tvelu77" underline="none" sx={{ mt: 2, textAlign: 'center', color: 'primary.main' }}>
                        <Typography variant="body1" color="primary">
                        {t('projects.much-more')}
                        </Typography>
                    </Link>
                </div>
            </Container>
        </Box>
    );
};

export default Projects;

